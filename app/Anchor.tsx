import React from "react";
import styled from "styled-components";

const Link = styled.a`
  border-bottom: 1px solid;
  text-decoration: none !important;
  transition: border-bottom 0.2s linear;
  color: ${({ theme }) => theme.primary} !important;

  &:hover {
    border-bottom: 1px solid transparent;
  }
`;

interface AnchorProps {
  href?: string;
  text?: string;
}

export const Anchor: React.FC<AnchorProps> = ({ href, children, text }) => (
  <Link href={href}>{text || children}</Link>
);
