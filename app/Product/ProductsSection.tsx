import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { content } from "../../content";
import { ProductElement } from "./ProductElement";
import Slick from "react-slick";
import { SlickSliderStyles } from "./SlickSliderStyles";

export const productInSliderClassName = "product-in-slider";

const ProductsSectionWrapper = styled.div`
  background: ${({ theme }) => theme.productsSection.bg};
  padding-top: 70px;
  padding-bottom: 50px;
  position: relative;
  overflow: hidden;
`;

const ProductContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 40px;
  position: relative;

  & > span {
    position: relative;
    z-index: 2;
  }

  &:before {
    content: " ";
    width: 120%;
    position: absolute;
    height: 15px;
    bottom: 5px;
    z-index: 1;
    transform: rotate(-2deg);
    left: -10%;
    background: ${({ theme }) => theme.productsSection.titleUnderline};
  }
`;

export const ProductsSection: React.FC = () => {
  const [productHeight, setProductHeight] = useState<number>();

  useEffect(() => {
    let maxHeight = 0;
    document.querySelectorAll(`.${productInSliderClassName}`).forEach((el) => {
      maxHeight = el.clientHeight > maxHeight ? el.clientHeight : maxHeight;
    });

    setProductHeight(maxHeight);
  }, []);

  return (
    <>
      <SlickSliderStyles />
      <ProductsSectionWrapper>
        <ProductContent>
          <style>
            {`
            .${productInSliderClassName} {
                min-height: ${productHeight}px;
            }
        `}
          </style>
          <Container>
            <Title className="before-bg-warning">
              <span>{content.productsSection.title}</span>
            </Title>
            <Slick
              slidesToShow={3}
              className="products-slick"
              touchMove={false}
            >
              {content.products.map((product, i) => (
                <div key={i}>
                  <ProductElement {...product} />
                </div>
              ))}
            </Slick>
          </Container>
        </ProductContent>
      </ProductsSectionWrapper>
    </>
  );
};
