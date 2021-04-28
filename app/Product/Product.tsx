import React, { useCallback, useContext, useMemo } from "react";
import { ProductStyles } from "./styles";
import { content } from "../../content";
import { formatPrice } from "../utils/formatPrice";
import { Check, DashCircle } from "react-bootstrap-icons";
import { SubmitButton } from "../Buttons/SubmitButton";

const {
  ProductContainer,
  Bg,
  Wrapper,
  Image,
  Price,
  Name,
  SubName,
  OptionsWrapper,
  Option,
  BtnWrapper,
  LabelsWrapper,
  Label,
} = ProductStyles;

export interface ProductOption {
  plus?: boolean;
  title: string;
}

export interface ProductProps {
  id: number;
  images?: string[];
  price: number;
  name: string;
  options?: ProductOption[];
  imageHeight?: number;
  subName?: string;
  labels?: {
    text: string;
    color: "warning" | "success" | "danger";
  }[];
  onClick?: (id: number) => () => void;
  fullView?: boolean;
}

export const Product: React.FC<ProductProps> = ({
  id,
  price,
  subName,
  name,
  images,
  options,
  labels,
  imageHeight,
  fullView,
  onClick,
}) => {
  return (
    <ProductContainer fullView={fullView}>
      {!fullView && (
        <>
          <Bg left={true} />
          <Bg />
        </>
      )}
      <Wrapper fullView={fullView}>
        {!fullView && (
          <LabelsWrapper staticPos={!images}>
            {labels &&
              labels.map((label, i) => (
                <Label className={`bg-product-label-${label.color}`} key={i}>
                  {label.text}
                </Label>
              ))}
          </LabelsWrapper>
        )}
        {!fullView && images && (
          <Image style={{ height: imageHeight }}>
            <img src={`/images/products/${id}/${images[0]}${content.cash}`} />
          </Image>
        )}
        <Name>
          <span dangerouslySetInnerHTML={{ __html: name }} />
          <SubName dangerouslySetInnerHTML={{ __html: subName }} />
        </Name>
        <Price className="bg-warning">
          {formatPrice(price)} {content.currency}
        </Price>
        <OptionsWrapper>
          {options
            ?.slice(0, !fullView ? 4 : options.length)
            .map(({ plus, title }, i) => (
              <Option key={i} plus={plus}>
                {plus ? (
                  <Check className="text-success" />
                ) : (
                  <DashCircle className="text-danger" />
                )}
                <span dangerouslySetInnerHTML={{ __html: title }} />
              </Option>
            ))}
        </OptionsWrapper>
        <BtnWrapper>
          <SubmitButton
            gradient="primary-success"
            icon={fullView || !images ? "Cart" : undefined}
            onClick={onClick && onClick(id)}
          >
            {fullView || !images ? "Заказать" : "Подробнее"}
          </SubmitButton>
        </BtnWrapper>
      </Wrapper>
    </ProductContainer>
  );
};
