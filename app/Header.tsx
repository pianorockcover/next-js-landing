import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { content } from "../content";
import { FeedbackForm } from "./FeedbackForm";
import { RandomShape } from "./RandomShape";

const HeaderStyles = createGlobalStyle`
    .custom-header-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }
`;

const SiteHeader = styled.div`
  color: #ffffff;
  height: 660px;
  width: 100%;
  overflow: hidden;
`;

const SiteTitle = styled.div`
  line-height: 55px;
  font-weight: 600;
  font-size: 45px;
  margin-bottom: 30px;
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const Header: React.FC = () => {
  return (
    <>
      <HeaderStyles />
      <SiteHeader className="bg-header">
        <Container className="custom-header-container">
          <RandomShape />
          <HeaderContent>
            <Row>
              <Col md={7}>
                <SiteTitle>{content.siteTitle}</SiteTitle>
                <FeedbackForm />
              </Col>
            </Row>
          </HeaderContent>
        </Container>
      </SiteHeader>
    </>
  );
};
