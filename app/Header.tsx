import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { content } from "../content";
import { FeedbackForm } from "./FeedbackForm";
import { navbarHeight } from "./Navbar/Navbar";
import { RandomShape } from "./RandomShape";

const headerBottomPadding = 500;

const HeaderStyles = createGlobalStyle`
    .custom-header-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
    }
`;

const SiteHeader = styled.div`
  color: #ffffff;
  height: ${content.headerHeight + headerBottomPadding}px;
  width: 100%;
  overflow: hidden;
  padding-top: ${navbarHeight}px;
  padding-bottom: ${headerBottomPadding}px;
  position: relative;

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 85%;
    left: 0px;
    width: 100%;
    background: #ffffff;
    height: 100vh;
    transform: skewY(-3deg);
    box-shadow: 0px 3px 10px 0.5px #25252547;
  }
`;

const SubHeader = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  font-size: 21px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-bottom: 5px;
  margin-bottom: 30px;
  width: fit-content;
  max-width: 100%;
`;

const HeaderBubble = styled.div`
  position: relative;
  color: white;
  border-radius: 24px;
  font-size: 15px;
  padding: 10px 15px 10px;
  width: fit-content;
  max-width: 100%;
  margin-bottom: 50px;
  line-height: 18px;
  font-weight: 300;

  &:after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 25px;
    border-left-width: 14px;
    border-left-style: solid;
    border-top-width: 16px;
    border-top-style: solid;
    border-top-color: transparent;
  }
`;

const SiteTitle = styled.div`
  line-height: 55px;
  font-weight: 600;
  font-size: 45px;
  margin-bottom: 25px;
  margin-top: 25px;
  text-shadow: 0 5px 7px rgb(0 0 0 / 38%);
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
`;

const PlusesWrapper = styled.div`
  margin-bottom: 50px;
`;

const Plus = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 5px;
  position: relative;

  &:nth-last-child(1) {
    margin-bottom: 0px;
  }

  &:before {
    content: " ";
    display: block;
    width: 100vh;
    height: 2px;
    position: absolute;
    top: calc(50% - 1px);
    left: auto;
    right: calc(100% + 10px);
    background: rgba(255, 255, 255, 0.4);
  }
`;

export const Header: React.FC = () => {
  return (
    <>
      <HeaderStyles />
      <SiteHeader className="bg-header">
        <Container className="custom-header-container">
          <RandomShape />
          <HeaderContent>
            <Row>
              <Col md={content.headerContentWidth}>
                <SiteTitle
                  dangerouslySetInnerHTML={{ __html: content.siteTitle }}
                />
                <SubHeader
                  dangerouslySetInnerHTML={{ __html: content.subTitle }}
                  className="text-warning border-warning-tr"
                />
                <HeaderBubble
                  dangerouslySetInnerHTML={{ __html: content.headerBubble }}
                  className="bg-darken-tr after-border-darken-tr"
                />
                <PlusesWrapper>
                  {content.pluses.map((plus, i) => (
                    <Plus key={i}>{plus}</Plus>
                  ))}
                </PlusesWrapper>
                <FeedbackForm />
              </Col>
            </Row>
          </HeaderContent>
        </Container>
      </SiteHeader>
    </>
  );
};
