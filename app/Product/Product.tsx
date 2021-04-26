import React, { useCallback, useContext } from "react";
import styled from "styled-components";
import { content } from "../../content";
import { formatPrice } from "../utils/formatPrice";
import { Check, DashCircle } from "react-bootstrap-icons";
import { SubmitButton } from "../Buttons/SubmitButton";
import { FeedbackFormContext } from "../FeedbackForm";

const ProductContainer = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: top;
`;

const Bg = styled.div`
  box-shadow: 0 0 10px 3px rgb(156 156 156 / 17%);
  border-radius: 10px;
  background: #f7f7f7;
  width: 300px;
  height: 100%;
  position: absolute;
  z-index: 1;
  height: calc(100% - 5px);
  top: 5px;
`;

const Wrapper = styled.div`
  box-shadow: 0 0 10px 3px rgb(156 156 156 / 17%);
  border-radius: 10px;
  width: 300px;
  max-width: 100%;
  display: flex;
  background: #ffffff;
  flex-direction: column;
  position: relative;
  z-index: 2;
`;
const Image = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  overflow: hidden;

  & > img {
    max-width: 100%;
    max-height: 100%;
  }
`;
const Price = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 600;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border: 0px;
  transform: rotate(-3deg);
  font-size: 25px;
`;
const Name = styled.div`
  padding: 15px;
  padding-top: 25px;
  padding-bottom: 25px;
  text-align: center;
  font-size: 20px;
  letter-spacing: 0.7px;
  font-weight: 900;
  text-transform: uppercase;
`;
const SubName = styled.div`
  font-weight: 400;
  text-transform: none;
  font-size: 16px;
  letter-spacing: normal;
  opacity: 0.7;
  margin-top: 7px;
`;
const PlusesWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
`;
const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-bottom: 0px;
  padding-top: 0px;

  & > svg {
    margin-right: 5px;
    width: 35px;
    height: 35px;
  }
`;

const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-bottom: 5px;
  padding-top: 5px;

  & > svg {
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }
`;

const BtnWrapper = styled.div`
  padding: 15px;
  padding-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LabelsWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: -1px;
`;

const Label = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding: 8px 10px;
  box-shadow: -1px 2px 3px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  &:before,
  &:after {
    content: "";
    position: absolute;
  }

  &:before {
    width: 7px;
    height: calc(100% + 7px);
    top: 0;
    left: -6.5px;
    padding: 0 0 7px;
    background: inherit;
    border-radius: 5px 0 0 5px;
  }

  &:after {
    width: 5px;
    height: 5px;
    bottom: -5px;
    left: -4.5px;
    border-radius: 5px 0 0 5px;
  }
`;

export interface ProductProps {
  id: number;
  image?: string;
  price: number;
  name: string;
  subName?: string;
  pluses: string[];
  minuses?: string[];
  imageHeight?: number;
  labels?: {
    text: string;
    color: "warning" | "success" | "danger";
  }[];
}

export const Product: React.FC<ProductProps> = ({
  id,
  price,
  subName,
  name,
  image,
  pluses,
  labels,
  imageHeight,
  minuses,
}) => {
  const { toggleFeedback } = useContext(FeedbackFormContext);

  const openFeedback = useCallback(
    (name: string) => () =>
      toggleFeedback({
        defaultValues: {
          product: name,
        },
        visible: true,
      }),
    []
  );

  return (
    <ProductContainer>
      <Bg style={{ transform: "rotate(-5deg)", left: -5 }} />
      <Bg style={{ transform: "rotate(5deg)", right: -5 }} />
      <Wrapper>
        <LabelsWrapper>
          {labels &&
            labels.map((label, i) => (
              <Label className={`bg-product-label-${label.color}`} key={i}>
                {label.text}
              </Label>
            ))}
        </LabelsWrapper>
        <Image style={{ height: imageHeight }}>
          <img src={`/images/products/${id}/${image}${content.cash}`} />
        </Image>
        <Name>
          <span dangerouslySetInnerHTML={{ __html: name }} />
          <SubName dangerouslySetInnerHTML={{ __html: subName }} />
        </Name>
        <Price className="bg-warning">
          {formatPrice(price)} {content.currency}
        </Price>
        <PlusesWrapper>
          <>
            {pluses.map((plus, i) => (
              <Plus key={i}>
                <Check className="text-success" />
                <span dangerouslySetInnerHTML={{ __html: plus }} />
              </Plus>
            ))}
            {minuses && (
              <>
                {minuses.map((minus, i) => (
                  <Minus key={i}>
                    <DashCircle
                      style={{ width: 25, height: 25 }}
                      className="text-danger"
                    />
                    <span dangerouslySetInnerHTML={{ __html: minus }} />
                  </Minus>
                ))}
              </>
            )}
          </>
        </PlusesWrapper>
        <BtnWrapper>
          <SubmitButton
            gradient="primary-success"
            icon={content.productBuyBtn.icon}
            onClick={openFeedback(name)}
          >
            {content.productBuyBtn.text}
          </SubmitButton>
        </BtnWrapper>
      </Wrapper>
    </ProductContainer>
  );
};
