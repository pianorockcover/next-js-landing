import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { content } from "../../content";
import { ProductElement } from "./ProductElement";
import Slick from "react-slick";

export const productInSliderClassName = "product-in-slider";

const ProductsSectionWrapper = styled.div`
  background: #eee;
  padding-top: 150px;
  padding-bottom: 50px;
`;

const ProductContent = styled.div``;

const Title = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
`;

const SubTitle = styled.div`
  max-width: 700px;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 50px;
  font-size: 19px;
  color: #4a4a4a;
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
    <ProductsSectionWrapper>
      <style>
        {`
            .${productInSliderClassName} {
                min-height: ${productHeight}px;
            }
        `}
      </style>
      <Container>
        <Title>{content.productsSection.title}</Title>
        <SubTitle>{content.productsSection.subTitle}</SubTitle>
        <ProductContent>
          <Slick slidesToShow={3} className="products-slick" touchMove={false}>
            {content.products.map((product, i) => (
              <div key={i}>
                <ProductElement {...product} />
              </div>
            ))}
          </Slick>
        </ProductContent>
      </Container>
    </ProductsSectionWrapper>
  );
};
