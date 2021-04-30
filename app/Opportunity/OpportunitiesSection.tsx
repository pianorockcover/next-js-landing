import React from "react";
import { content } from "../../content";
import styled, { createGlobalStyle } from "styled-components";
import { Col, Container, Row } from "react-bootstrap";
import { Opportunity } from "./Opportunity";

const GlobalStyles = createGlobalStyle`
  .opportunities-main-row {
    align-items: center;
    position: relative;
    z-index: 2;
  }

  .opportunities-container {
      position: relative;
  }
`;

const OpportunitiesSectionWrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  position: relative;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 85%;
    left: 0px;
    width: 100%;
    height: 200px;
    transform: skewY(-3deg);
    box-shadow: 0px 3px 10px 0.5px #25252547;
  }
`;

const Description = styled.div`
  color: #ffffff;
  padding-right: 50px;
  padding-left: 20px;
`;

const Title = styled.div`
  font-weight: 800;
  font-size: 35px;
  line-height: 45px;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 19px;
  font-weight: 300;
`;

const BgText = styled.div`
  position: absolute;
  font-size: 140px;
  top: -50px;
  left: 0px;
  color: #1d2023;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
`;

export const OpportunitiesSection: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <OpportunitiesSectionWrapper className="bg-dark before-bg-dark-lighten">
        <Container className="opportunities-container">
          <BgText
            className="text-darken-dark"
            dangerouslySetInnerHTML={{ __html: content.mainOpportunity.bgText }}
          />
          <Row className="opportunities-main-row">
            <Col>
              <Description>
                <Title
                  dangerouslySetInnerHTML={{
                    __html: content.mainOpportunity.title,
                  }}
                />
                <Text
                  dangerouslySetInnerHTML={{
                    __html: content.mainOpportunity.text,
                  }}
                />
              </Description>
            </Col>
            <Col>
              {content.opportunities.map((row, i) => (
                <Row key={i}>
                  {row.map((col, j) => (
                    <Col key={j}>
                      <Opportunity
                        {...col}
                        lastRow={i + 1 === content.opportunities.length}
                      />
                    </Col>
                  ))}
                </Row>
              ))}
            </Col>
          </Row>
        </Container>
      </OpportunitiesSectionWrapper>
    </>
  );
};
