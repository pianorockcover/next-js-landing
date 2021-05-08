import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  margin-bottom: 35px;
`;

const Digit = styled.div`
  margin-right: 15px;
  font-size: 50px;
  position: relative;
  color: ${({ theme }) => theme.stepsSection.item.digit.color};
  font-weight: 800;
  line-height: 1;

  & > span {
      position: relative;
      z-index: 2;
  }

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: -5px;
    right: -5px;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    z-index: 1;
    background: ${({ theme }) => theme.stepsSection.item.digit.circle};
  }
`;

const Title = styled.div`
  color: ${({ theme }) => theme.stepsSection.item.title};
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 20px;
`;

const Text = styled.div`
  color: ${({ theme }) => theme.stepsSection.item.text};
`;

export interface StepProps {
  digit: number;
  title: string;
  text: string;
}

export const Step: React.FC<StepProps> = ({ digit, title, text }) => {
  return (
    <Wrapper>
      <Digit><span>{digit}</span></Digit>
      <div>
        <Title dangerouslySetInnerHTML={{ __html: title }} />
        <Text dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </Wrapper>
  );
};
