import React, { useCallback, useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled, { createGlobalStyle, useTheme } from "styled-components";
import { content } from "../content";
import { ActionButton } from "./Buttons/ActionButton";
import { FeedbackFormContext } from "./FeedbackForm";
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
  background: ${({ theme }) => theme.header.bg};

  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 85%;
    left: 0px;
    width: 100%;
    height: 100vh;
    transform: skewY(-3deg);
    background: ${({ theme }) => theme.header.before.background};
    box-shadow: 0px 3px 15px 0.5px ${({ theme }) => theme.header.before.shadow};
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
  color: ${({ theme }) => theme.header.subTitle.color};
  border-color: ${({ theme }) => theme.header.subTitle.border};
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
  background: ${({ theme }) => theme.header.bubble.background};

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
    border-left-color: ${({ theme }) => theme.header.bubble.background};
  }
`;

const SiteTitle = styled.div`
  line-height: 55px;
  font-weight: 600;
  font-size: 45px;
  margin-bottom: 25px;
  margin-top: 25px;
  color: ${({ theme }) => theme.header.title.color};
  text-shadow: 0 5px 7px ${({ theme }) => theme.header.title.textShadow};
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
  color: ${({ theme }) => theme.header.plus.color};

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
    background: ${({ theme }) => theme.header.plus.before};
  }
`;

export const Header: React.FC = () => {
  const { toggleFeedback } = useContext(FeedbackFormContext);
  const openFeedback = useCallback(() => toggleFeedback({ visible: true }), []);

  const theme = useTheme();

  return (
    <>
      <HeaderStyles />
      <SiteHeader>
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
                />
                <HeaderBubble
                  dangerouslySetInnerHTML={{ __html: content.headerBubble }}
                />
                <PlusesWrapper>
                  {content.pluses.map((plus, i) => (
                    <Plus key={i}>{plus}</Plus>
                  ))}
                </PlusesWrapper>

                <ActionButton
                  onClick={openFeedback}
                  icon={content.actionButton.icon}
                  style={theme.header.actionButton}
                >
                  <span
                    dangerouslySetInnerHTML={{
                      __html: content.actionButton.text,
                    }}
                  />
                </ActionButton>
              </Col>
            </Row>
          </HeaderContent>
        </Container>
      </SiteHeader>
    </>
  );
};
