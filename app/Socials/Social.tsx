import React, { useMemo } from "react";
import styled from "styled-components";
import { socialIcons } from "./icons";

const Link = styled.a`
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
  }
`;

interface SocialProps {
  icon: string;
  link: string;
  style?: React.CSSProperties;
}

export const Social: React.FC<SocialProps> = ({ icon, link, style }) => {
  const IconComponent = useMemo(() => socialIcons[icon], []);
  return (
    <Link href={link} target="_blank" style={style}>
      <IconComponent />
    </Link>
  );
};
