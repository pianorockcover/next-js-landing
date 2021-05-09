import React, { useCallback, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled, { createGlobalStyle, useTheme } from "styled-components";
import { content } from "../../content";
import { Social } from "../Socials/Social";
import { NavbarLink } from "./NavbarLink";

export const navbarHeight = 84;

const NavbarGlobalStyle = createGlobalStyle`
    .custom-navbar-container {
        border-bottom: 1px solid ${({ theme }) =>
          theme.navbar.borderBottomColor};
        height: 100%;
    }
`;

interface NavbarWrapperProps {
  scrolled?: boolean;
}

const NavbarWrapper = styled.div<NavbarWrapperProps>`
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  height: ${navbarHeight}px;
  transition: background 0.2s linear;

  ${({ scrolled, theme }) =>
    scrolled &&
    `
        box-shadow: 0 0 30px 3px ${theme.navbar.scrolledBoxShadow};
        background-color: ${theme.navbar.scrolledBg};

        .custom-navbar-container {
            border-bottom-width: 0px;
        }
  `}
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

  const theme = useTheme();

  return (
    allowRender && (
      <>
        <NavbarGlobalStyle />
        <NavbarWrapper scrolled={scrolled}>
          <Container className="custom-navbar-container">
            <Content>
              <LogoWrapper />
              <MenuWrapper>
                {content.navLinks.map((link, i) => (
                  <NavbarLink
                    white={true}
                    href={link.to}
                    key={i}
                    active={i === 0}
                    color={theme.navbar.linkColor}
                  >
                    {link.name}
                  </NavbarLink>
                ))}
              </MenuWrapper>
              <SocialWrapper>
                {content.headerSocials.map((social, i) => (
                  <Social key={i} style={theme.navbar.socialLink} {...social} />
                ))}
              </SocialWrapper>
            </Content>
          </Container>
        </NavbarWrapper>
      </>
    )
  );
};
