import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { content } from "../../content";

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.aboutSection.bg};
  padding-top: 60px;
  padding-bottom: 60px;
`;

const Title = styled.div`
  background: ${({ theme }) => theme.aboutSection.title.bg};
  color: ${({ theme }) => theme.aboutSection.title.color};
  width: fit-content;
  font-weight: 800;
  font-size: 35px;
  line-height: 45px;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
`;

const Text = styled.div`
  position: relative;
  z-index: 2;
  background: ${({ theme }) => theme.aboutSection.text.bg};
  color: ${({ theme }) => theme.aboutSection.text.color};
  margin-left: -40px;
  padding: 30px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

interface ImageProps {
  imgWidth: number;
}

const Image = styled.div<ImageProps>`
  background: url(/images/about.jpg);
  position: absolute;
  top: -20px;
  height: calc(100% + 40px);
  z-index: 1;
  box-shadow: ${({ theme }) =>
    `0 0 20px 1px ${theme.aboutSection.imageShadow}`};
  width: ${({ imgWidth }) => imgWidth}px;
  left: calc(50% - ${({ imgWidth }) => imgWidth}px);
  background-size: cover;
  background-position-x: center;
  background-position-y: top;
  border-radius: 10px;
`;

const DigitsWrapper = styled.div`
  color: ${({ theme }) => theme.aboutSection.digits};
  display: flex;
  align-items: flex-start;
`;

const DigitValue = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 5px;
`;

const Digit = styled.div`
  margin-right: 15px;
  min-width: 25%;
`;

export const AboutSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col
            md={12 - content.aboutSection.textColWidth}
            style={{ position: "static" }}
          >
            <Image imgWidth={content.aboutSection.imgWidth} />
          </Col>
          <Col md={content.aboutSection.textColWidth}>
            <Text>
              <Title>{content.aboutSection.title}</Title>
              <div
                dangerouslySetInnerHTML={{ __html: content.aboutSection.text }}
              />
            </Text>
            <DigitsWrapper>
              {content.aboutSection.digits.map((digit, i) => (
                <Digit key={i}>
                  <DigitValue>{digit.value}</DigitValue>
                  <div dangerouslySetInnerHTML={{ __html: digit.exp }}></div>
                </Digit>
              ))}
            </DigitsWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};
