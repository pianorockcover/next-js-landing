import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { content } from "../content";

const ExplanationWrapper = styled.div`
  margin-top: -400px;
  position: relative;
  z-index: 2;
`;

const ExplanationContent = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 300px;
  border-radius: 10px;
  margin-top: 20px;
  background: #ffffff;
  padding: 30px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 28px;
  line-height: 31px;
  margin-bottom: 50px;
`;

const Text = styled.div`
  font-size: 22px;
`;

export const Explanation: React.FC = () => (
  <ExplanationWrapper>
    <Container>
      <ExplanationContent className="shadow-primary-tr">
        <Row>
          <Col md={7}>
            <Title
              dangerouslySetInnerHTML={{ __html: content.explanation.title }}
            />
            <Text
              dangerouslySetInnerHTML={{ __html: content.explanation.text }}
            />
          </Col>
          <Col md={5}></Col>
        </Row>
      </ExplanationContent>
    </Container>
  </ExplanationWrapper>
);
