import React, { useMemo } from "react";
import { TelephoneFill, Envelope } from "react-bootstrap-icons";
import styled from "styled-components";

interface ContactLinkProps {
  type: string;
  children: string;
}

const IconWrapper = styled.div`
  padding: 7px;
  margin-right: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin-right: 10px;

  color: ${({ theme }) => theme.footer.contactLink.color};
  background: ${({ theme }) => theme.footer.contactLink.bg};

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const Icons = {
  phone: TelephoneFill,
  email: Envelope,
};

const Link = styled.a`
  display: flex;
  text-decoration: none !important;
  aligh-items: center;
  color: ${({ theme }) => theme.footer.contactLink.textColor} !important;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;
  align-items: center;
  margin-bottom: 10px;
  margin-right: 15px;
  display: inline-flex;

  &:hover {
    opacity: 0.8;
  }
`;

export const ContactLink: React.FC<ContactLinkProps> = ({ type, children }) => {
  const Icon = useMemo(() => Icons[type] || (() => null), []);
  const contact = useMemo(() => children.replace(new RegExp(" ", "g"), ""), []);
  const hrefType = useMemo(() => (type === "phone" ? "tel:" : "mailto:"), []);
  const href = useMemo(() => `${hrefType}${contact}`, []);

  return (
    <Link href={href}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <span>{children}</span>
    </Link>
  );
};
