import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { content } from "../../content";
import { Social } from "../Socials/Social";
import { clsx } from "../utils/clsx";
import { NavbarLink } from "./NavbarLink";

export const navbarHeight = 84;

const NavbarGlobalStyle = createGlobalStyle`
    .custom-navbar-container {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        height: 100%;
    }

    .nav-scrolled {
        box-shadow: 0 0 30px 3px #444444;

        .custom-navbar-container {
            border-bottom: 0px;
        }
    }
`;

const NavbarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  height: ${navbarHeight}px;
  transition: background 0.2s linear;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  width: 150px;
  height: 100%;
  margin-right: 10px;
  background: url(/images/logo.png${content.cash});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
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
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [allowRender, setAllowRender] = useState<boolean>(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 0);
    setAllowRender(true);
    document.addEventListener("scroll", onScroll);
  }, []);

  return (
    allowRender && (
      <>
        <NavbarGlobalStyle />
        <NavbarWrapper
          className={clsx([["nav-scrolled bg-primary-darken", scrolled]])}
        >
          <Container className="custom-navbar-container">
            <Content>
              <LogoWrapper />
              <MenuWrapper>
                {content.navLinks.map((link, i) => (
                  <NavbarLink white={true} href={link.to} active={i === 0}>
                    {link.name}
                  </NavbarLink>
                ))}
              </MenuWrapper>
              <SocialWrapper>
                {content.headerSocials.map((social, i) => (
                  <Social key={i} {...social} />
                ))}
              </SocialWrapper>
            </Content>
          </Container>
        </NavbarWrapper>
      </>
    )
  );
};
