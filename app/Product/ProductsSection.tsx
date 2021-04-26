import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { content } from "../../content";
import { Product } from "./Product";

const ProductsSectionWrapper = styled.div`
  background: #eee;
  padding-top: 150px;
  padding-bottom: 50px;
`;

const ProductContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductsSection: React.FC = () => (
  <ProductsSectionWrapper>
    <Container>
      <ProductContent>
        {content.products.map((product, i) => (
          <Product {...product} key={i} />
        ))}
      </ProductContent>
    </Container>
  </ProductsSectionWrapper>
);
