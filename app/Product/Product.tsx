import React from "react";
import { ProductStyles } from "./styles";
import { content } from "../../content";
import { formatPrice } from "../utils/formatPrice";
import { Check, DashCircle } from "react-bootstrap-icons";
import { SubmitButton } from "../Buttons/SubmitButton";
import { productInSliderClassName } from "./ProductsSection";
import { useTheme } from "styled-components";

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
  ProductArea,
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
  const theme = useTheme();

  return (
    <ProductArea fullView={fullView}>
      <ProductContainer fullView={fullView}>
        {!fullView && (
          <>
            <Bg left={true} />
            <Bg />
          </>
        )}
        <Wrapper
          fullView={fullView}
          className={!fullView && productInSliderClassName}
        >
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
          <Price className="bg-warning">{formatPrice(price)}</Price>
          <OptionsWrapper>
            {options
              ?.slice(
                0,
                !fullView ? content.productPreviewOptionsAmount : options.length
              )
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
              style={theme.product.submit}
              icon={fullView || !images ? "Cart" : undefined}
              onClick={onClick && onClick(id)}
            >
              {fullView || !images ? "Заказать" : "Подробнее"}
            </SubmitButton>
          </BtnWrapper>
        </Wrapper>
      </ProductContainer>
    </ProductArea>
  );
};
