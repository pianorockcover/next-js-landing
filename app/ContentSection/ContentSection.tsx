import React, { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { content } from "../../content";
import { ContentBlocks } from "./styles";
import styled from "styled-components";

const ContentSectionWrapper = styled.div`
  background: ${({ theme }) => theme.contentSection.bg};
  color: ${({ theme }) => theme.contentSection.color};
  box-shadow: ${({ theme }) =>
    `0px 0px 10px 1px ${theme.contentSection.shadow}`};
  padding-top: 70px;
  padding-bottom: 50px;
  position: relative;
`;

export interface ContentBlock {
  type: string;
  props?: object;
  text?: string;
}

export const ContentSection: React.FC = () => (
  <ContentSectionWrapper>
    <Container>
      {content.contentSection.map((row, i) => (
        <Row key={i}>
          {row.map(({ type, props, text }, j) => {
            const Block = useMemo(() => ContentBlocks[type], []);

            return (
              <Col key={j}>
                <Block
                  dangerouslySetInnerHTML={{ __html: text }}
                  {...{ ...props, text }}
                />
              </Col>
            );
          })}
        </Row>
      ))}
    </Container>
  </ContentSectionWrapper>
);
