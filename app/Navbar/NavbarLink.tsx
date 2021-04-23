import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { clsx } from "../utils/clsx";

const Link = styled.a`
  text-decoration: none !important;
  transition: border-bottom-color 0.2s linear;
  display: inline-block;
  width: fit-content;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  letter-spacing: 0.6px;

  &,
  &:hover,
  &:active,
  &:visited,
  &:focus {
    color: #ffffff;
  }
`;

interface NavbarLinkProps {
  href?: string;
  active?: boolean;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  children,
  active,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={clsx([["border-warning", Boolean(active || hovered)]])}
    >
      {children}
    </Link>
  );
};
