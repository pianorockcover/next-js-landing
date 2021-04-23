import React from "react";
import { Container } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { content } from "../../content";
import { Social } from "../Socials/Social";
import { NavbarLink } from "./NavbarLink";

export const navbarHeight = 84;

const NavbarGlobalStyle = createGlobalStyle`
    .custom-navbar-container {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        height: 100%;
    }
`;

const NavbarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  height: ${navbarHeight}px;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-intems: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  width: 150px;
  margin-right: 10px;
`;

const MenuWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Navbar: React.FC = () => {
  return (
    <>
      <NavbarGlobalStyle />
      <NavbarWrapper>
        <Container className="custom-navbar-container">
          <Content>
            <LogoWrapper></LogoWrapper>
            <MenuWrapper>
              <NavbarLink active={true}>Как работает квиз?</NavbarLink>
              <NavbarLink>Кейсы</NavbarLink>
              <NavbarLink>Возможности</NavbarLink>
              <NavbarLink>Тарифы</NavbarLink>
              <NavbarLink>Блог</NavbarLink>
            </MenuWrapper>
            <SocialWrapper>
              {content.headerSocials.map((social) => (
                <Social {...social} />
              ))}
            </SocialWrapper>
          </Content>
        </Container>
      </NavbarWrapper>
    </>
  );
};
