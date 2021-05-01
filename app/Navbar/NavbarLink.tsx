import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { theme } from "../../content";

interface LinkProps {
  active?: boolean;
}

const Link = styled.a<LinkProps>`
  text-decoration: none !important;
  transition: border-bottom-color 0.2s linear;
  display: inline-block;
  width: fit-content;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
  border-bottom: 2px solid
    ${({ active }) => (active ? theme.navbar.linkBorder : "transparent")};
  letter-spacing: 0.6px;
`;

interface NavbarLinkProps {
  href?: string;
  active?: boolean;
  white?: boolean;
  color?: string;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({
  href,
  children,
  active,
  white,
  color,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const onMouseEnter = useCallback(() => setHovered(true), []);
  const onMouseLeave = useCallback(() => setHovered(false), []);

  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      active={Boolean(active || hovered)}
      style={{ color: color || "#444444" }}
    >
      {children}
    </Link>
  );
};
