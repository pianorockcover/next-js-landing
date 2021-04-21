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
  height: 660px;
  width: 100%;
  overflow: hidden;
  background: url(/images/header-bg.jpg);
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
`;

const HeaderGradient = styled.div`
  height: 100%;
`;

const SiteTitle = styled.div`
  color: #ffffff;
  text-shadow: 0 5px 7px rgb(0 0 0 / 44%);
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
      <SiteHeader>
        <HeaderGradient className="bg-header">
          <Container className="custom-header-container">
            <RandomShape />
            <HeaderContent>
              <Row>
                <Col md={7}>
                  <SiteTitle>{content.siteTitle}</SiteTitle>
                  <FeedbackForm />
                </Col>
                <Col md={5}></Col>
              </Row>
            </HeaderContent>
          </Container>
        </HeaderGradient>
      </SiteHeader>
    </>
  );
};
