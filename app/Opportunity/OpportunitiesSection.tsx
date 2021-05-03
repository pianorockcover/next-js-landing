import React from "react";
import { content } from "../../content";
import styled from "styled-components";
import { Col, Container as BsContainer, Row as BsRow } from "react-bootstrap";
import { Opportunity } from "./Opportunity";

const Container = styled(BsContainer)`
  position: relative;
`;

const Row = styled(BsRow)`
  align-items: center;
  position: relative;
  z-index: 2;
`;

const OpportunitiesSectionWrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 90px;
  position: relative;
  background: ${({ theme }) => theme.opportunities.background};
  color: ${({ theme }) => theme.opportunities.text};

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 85%;
    left: 0px;
    width: 100%;
    height: 200px;
    transform: skewY(-3deg);
    background: ${({ theme }) => theme.opportunities.before.bg};
    box-shadow: ${({ theme }) =>
      `0px 3px 10px 0.5px ${theme.opportunities.before.shadow}`};
  }
`;

const Description = styled.div`
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
  color: ${({ theme }) => theme.opportunities.bgText};
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
`;

export const OpportunitiesSection: React.FC = () => {
  return (
    <OpportunitiesSectionWrapper>
      <Container>
        <BgText
          dangerouslySetInnerHTML={{ __html: content.mainOpportunity.bgText }}
        />
        <Row>
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
              <BsRow key={i}>
                {row.map((col, j) => (
                  <Col key={j}>
                    <Opportunity
                      {...col}
                      lastRow={i + 1 === content.opportunities.length}
                    />
                  </Col>
                ))}
              </BsRow>
            ))}
          </Col>
        </Row>
      </Container>
    </OpportunitiesSectionWrapper>
  );
};
