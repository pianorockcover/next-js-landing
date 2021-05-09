import React, { useMemo } from "react";
import styled from "styled-components";
import { socialIcons } from "./icons";

interface LinkProps {
  iconColor?: string;
}

const Link = styled.a<LinkProps>`
  width: 40px;
  height: 40px;
  display: inline-flex;
  text-decoration: none !important;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin-left: 10px;

  ${({ theme }) => theme.hoverEffect()}

  & > svg {
    width: 100%;
    height: 100%;
    fill: ${({ iconColor }) => iconColor};
  }
`;

interface SocialProps {
  icon: string;
  link: string;
  style: {
    color: string;
    bg: string;
  };
}

export const Social: React.FC<SocialProps> = ({ icon, link, style }) => {
  const IconComponent = useMemo(() => socialIcons[icon], []);
  return (
    <Link
      href={link}
      target="_blank"
      style={{ background: style.bg }}
      iconColor={style.color}
    >
      <IconComponent />
    </Link>
  );
};
