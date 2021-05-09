import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled, { useTheme } from "styled-components";
import { content } from "../content";
import { ContactLink } from "./ContactLink";
import { navbarHeight } from "./Navbar/Navbar";
import { Social } from "./Socials/Social";

const Wrapper = styled.div`
  background: ${({ theme }) => theme.footer.bg};
  color: ${({ theme }) => theme.footer.color};
  padding-top: 50px;
  padding-bottom: 50px;
`;

const LogoWrapper = styled.div`
  width: 150px;
  height: ${navbarHeight}px;
  margin-right: 10px;
  background: url(/images/logo.png${content.cash});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 90%;
`;

const Leaf = styled.div`
  background: ${({ theme }) => theme.footer.leaf.bg};
  color: ${({ theme }) => theme.footer.leaf.color};
  padding: 30px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

const Address = styled.div`
  margin-top: 20px;
`;

const Copyright = styled.div`
  opacity: 0.7;
`;

const CopyAndLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col>
            <CopyAndLogo>
              <LogoWrapper />
              {content.footer.socials.map((social, i) => (
                <Social key={i} style={theme.footer.socialLink} {...social} />
              ))}
            </CopyAndLogo>
            <Copyright>
              © {new Date().getFullYear()} {content.footer.copyrightBy}
            </Copyright>
          </Col>
          <Col>
            <Leaf>
              {content.footer.contacts.map((contact, i) => (
                <ContactLink key={i} type={contact.type}>
                  {contact.value}
                </ContactLink>
              ))}
              <Address>{content.footer.address}</Address>
            </Leaf>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};
