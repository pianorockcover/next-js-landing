import React from "react";
import styled, { keyframes } from "styled-components";
import { useIcon } from "../utils/getIcon";
import { fadeIn } from "react-animations";

interface WrapperProps {
  bg?: string;
  color?: string;
  shadow?: string;
}

const fadeInAnimation = keyframes`${fadeIn}`;

const Wrapper = styled.div<WrapperProps>`
  margin-bottom: 25px;
  color: ${({ theme, color }) => color || theme.iconBlock.color};
  background: ${({ theme, bg }) => bg || theme.iconBlock.bg};
  box-shadow: ${({ theme, shadow }) =>
    `5px 5px 10px 1px ${shadow || theme.iconBlock.shadow}`};
  border-radius: 10px;
  padding: 15px;
  animation: 1s ${fadeInAnimation};
`;

interface DigitWrapperProps {
  digitColor?: string;
  digitBg?: string;
}

const DigitWrapper = styled.div<DigitWrapperProps>`
  border-radius: 100%;
  padding: 10px;

  background: ${({ theme, digitBg }) =>
    digitBg ? digitBg : theme.iconBlock.digit.bg};

  color: ${({ digitColor, theme }) =>
    digitColor ? digitColor : theme.iconBlock.digit.color};

  width: 50px;
  height: 50px;
  margin-bottom: 15px;
  position: relative;
`;

const Digit = styled.span`
  position: absolute;
  bottom: -9px;
  right: 0px;
  display: block;
  font-weight: 800;
  line-height: 1;
  font-size: 50px;
`;

const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Text = styled.div`
  font-weight: 400;
`;

interface IconWrapperProps {
  iconColor?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  width: 100px;
  margin: 0 auto;
  margin-top: 15px;

  ${({ iconColor }) => iconColor && `color: ${iconColor};`}

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

interface IconBlockProps {
  icon?: string;
  iconColor?: string;
  digit?: number;
  digitColor?: string;
  digitBg?: string;
  title?: string;
  text: string;
  bg?: string;
  color?: string;
  shadow?: string;
}

export const IconBlock: React.FC<IconBlockProps> = ({
  icon,
  iconColor,
  digit,
  digitColor,
  digitBg,
  title,
  text,
  bg,
  color,
  shadow,
}) => {
  const Icon = useIcon(icon);

  return (
    <Wrapper bg={bg} color={color} shadow={shadow}>
      {digit && (
        <DigitWrapper digitColor={digitColor} digitBg={digitBg}>
          <Digit>{digit}</Digit>
        </DigitWrapper>
      )}
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Text dangerouslySetInnerHTML={{ __html: text }} />
      {icon && (
        <IconWrapper iconColor={iconColor}>
          <Icon />
        </IconWrapper>
      )}
    </Wrapper>
  );
};
