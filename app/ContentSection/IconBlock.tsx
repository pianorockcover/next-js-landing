import React, { useMemo } from "react";
import styled, { useTheme } from "styled-components";
import { useIcon } from "../utils/getIcon";

interface WrapperProps {
  bg?: string;
  color?: string;
  shadow?: string;
  direction?: "vertical" | "horizontal";
}

const Wrapper = styled.div<WrapperProps>`
  margin-bottom: 25px;
  color: ${({ theme, color }) => color || theme.iconBlock.color};
  background: ${({ theme, bg }) => bg || theme.iconBlock.bg};
  box-shadow: ${({ theme, shadow }) =>
    `2px 3px 10px 1px ${shadow || theme.iconBlock.shadow}`};
  border: ${({ theme }) => `1px solid ${theme.iconBlock.border}`};
  padding: 15px;

  border-radius: 5px;
  display: flex;
  align-items: flex-start;

  ${({ direction }) =>
    direction === "vertical" &&
    `
        flex-direction: column;
        align-items: center;
    `}
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
  margin-right: 15px;
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
  coloring: "stroke" | "fill";
}

const IconWrapper = styled.div<IconWrapperProps>`
  width: 100px;
  margin: 0 auto;
  margin-bottom: 15px;

  & > svg {
    width: 100%;
    height: 100%;
    ${({ coloring, iconColor }) => `${coloring}: url(#${iconColor})`};
  }
`;

interface IconBlockProps {
  icon?: string;
  iconColorFrom?: string;
  iconColorTo?: string;
  digit?: number;
  digitColor?: string;
  digitBg?: string;
  title?: string;
  text: string;
  bg?: string;
  color?: string;
  shadow?: string;
  direction?: "vertical" | "horizontal";
  coloring: "stroke" | "fill";
}

export const IconBlock: React.FC<IconBlockProps> = ({
  icon,
  digit,
  digitColor,
  digitBg,
  iconColorFrom,
  iconColorTo,
  title,
  text,
  bg,
  color,
  coloring,
  shadow,
  direction,
}) => {
  const Icon = useIcon(icon);
  const theme = useTheme();
  const gradId = useMemo(() => `${+new Date()}-grad`, []);

  return (
    <>
      <svg style={{ width: 0, height: 0 }}>
        <linearGradient id={gradId} x1="0" y1="0%">
          <stop
            offset="0%"
            stop-color={theme.iconBlock.icon.from || iconColorFrom}
          />
          <stop
            offset="100%"
            stop-color={theme.iconBlock.icon.to || iconColorTo}
          />
        </linearGradient>
      </svg>
      <Wrapper bg={bg} color={color} shadow={shadow} direction={direction}>
        <div>
          {icon && (
            <IconWrapper iconColor={gradId} coloring={coloring || "stroke"}>
              <Icon />
            </IconWrapper>
          )}
          {digit && (
            <DigitWrapper digitColor={digitColor} digitBg={digitBg}>
              <Digit>{digit}</Digit>
            </DigitWrapper>
          )}
        </div>
        <div>
          <Title dangerouslySetInnerHTML={{ __html: title }} />
          <Text dangerouslySetInnerHTML={{ __html: text }} />
        </div>
      </Wrapper>
    </>
  );
};
