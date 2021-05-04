import React from "react";
import styled from "styled-components";
import { useIcon } from "../utils/getIcon";

const Wrapper = styled.div`
  margin-bottom: 25px;
  color: ${({ theme }) => theme.iconBlock.color};
  background: ${({ theme }) => theme.iconBlock.bg};
  border-radius: 10px;
  padding: 15px;
`;

interface IconWrapperProps {
  iconColor?: string;
}

const IconWrapper = styled.div<IconWrapperProps>`
  border-radius: 100%;
  padding: 10px;
  background: ${({ theme }) => theme.iconBlock.icon.bg};
  ${({ iconColor }) => iconColor && `color: ${iconColor};`}
  width: 50px;
  height: 50px;
  margin-bottom: 15px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  text-transform: uppercase;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Text = styled.div`
  font-weight: 400;
`;

interface IconBlockProps {
  icon: string;
  iconColor?: string;
  title?: string;
  text: string;
}

export const IconBlock: React.FC<IconBlockProps> = ({
  icon,
  title,
  text,
  iconColor,
}) => {
  const Icon = useIcon(icon);

  return (
    <Wrapper>
      <IconWrapper iconColor={iconColor}>
        <Icon />
      </IconWrapper>
      <Title dangerouslySetInnerHTML={{ __html: title }} />
      <Text dangerouslySetInnerHTML={{ __html: text }} />
    </Wrapper>
  );
};
