import React, { useMemo } from "react";
import styled, { useTheme } from "styled-components";
import { Container as BsContainer, Row, Col } from "react-bootstrap";
import { content } from "../../content";
import { Step } from "./Step";
import { useIcon } from "../utils/getIcon";

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 90px;
`;

const Container = styled(BsContainer)`
  position: relative;
  z-index: 2;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.stepsSection.title.color};
  margin: 0 auto;
  margin-bottom: 40px;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 40px;
  font-weight: 500;
  position: relative;
  z-index: 2;
`;

interface IconWrapperProps {
  iconSize: number;
  gradientColorId: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  position: absolute;
  z-index: 1;
  top: 0px;
  left: calc(50% + ${({ iconSize }) => iconSize / 3}px);

  & > svg {
    font-size: ${({ iconSize }) => iconSize}px;
    stroke: url(#${({ gradientColorId }) => gradientColorId});
    fill: url(#${({ gradientColorId }) => gradientColorId});
  }
`;

export const StepsSection: React.FC = () => {
  const Icon = useIcon(content.stepsSection.icon);
  const theme = useTheme();
  const gradId = useMemo(() => `${+new Date()}-grad`, []);

  return (
    <>
      <svg style={{ width: 0, height: 0 }}>
        <linearGradient id={gradId} x1="0" y1="0%">
          <stop offset="0%" stop-color={theme.stepsSection.icon.from} />
          <stop offset="100%" stop-color={theme.stepsSection.icon.to} />
        </linearGradient>
      </svg>
      <Wrapper>
        <IconWrapper
          iconSize={content.stepsSection.iconSize}
          gradientColorId={gradId}
        >
          <Icon />
        </IconWrapper>
        <Title>{content.stepsSection.title}</Title>
        <Container>
          {content.stepsSection.items.map((row, i) => (
            <Row key={i}>
              {row.map((col, j) => (
                <Col key={j}>
                  <Step {...col} />
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      </Wrapper>
    </>
  );
};
