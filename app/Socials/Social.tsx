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
  transition: box-shadow .2s linear;
  margin-left: 10px;

  &:hover {
      box-shadow: 0px 3px 10px 0.5px #25252547;
  }

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

interface SocialProps {
  icon: string;
  link: string;
}

export const Social: React.FC<SocialProps> = ({ icon, link }) => {
  const IconComponent = useMemo(() => socialIcons[icon], []);
  return (
    <Link href={link} className="bg-warning" target="_blank">
      <IconComponent />
    </Link>
  );
};
