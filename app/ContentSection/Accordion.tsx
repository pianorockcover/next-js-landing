import React, { useState } from "react";
import { Accordion as BSAccordion, Card } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { ChevronDown } from "react-bootstrap-icons";

const GlobalStyle = createGlobalStyle`
    .custom-card {
        margin-bottom: 10px;
        border-radius: 5px !important;
        box-shadow: ${({ theme }) =>
          `3px 5px 10px 1px ${theme.contentSection.accordeon.shadow}`};
    }

    .custom-card-header {
        border: 0px !important;
        cursor: pointer;
        background: transparent;
        font-weight: 500;
    }

    .custom-card-body {
        color: ${({ theme }) => theme.contentSection.accordeon.content.color};
        background: ${({ theme }) => theme.contentSection.accordeon.content.bg};
    }
`;

const Wrapper = styled.div`
  margin-bottom: 25px;
`;

const Toggle = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
`;

const Title = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.contentSection.accordeon.title.color};
  padding-right: 15px;
`;

interface IconProps {
  isActive: boolean;
}

const Icon = styled.div<IconProps>`
  transition: transform 0.2s ease-in-out;
  flex: none !important;
  color: ${({ theme }) => theme.contentSection.accordeon.arrow.down};

  ${({ isActive, theme }) =>
    isActive &&
    `
    color: ${theme.contentSection.accordeon.arrow.up};
    transform: rotate(180deg);
  `}
`;

interface AccordionItem {
  title: string;
  text: string;
}

interface AccordionProps {
  defaultActiveKey?: string;
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({
  defaultActiveKey,
  items,
}) => {
  const [active, setAcive] = useState<string | undefined>(defaultActiveKey);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <BSAccordion
          activeKey={active}
          onSelect={setAcive}
          defaultActiveKey={defaultActiveKey}
        >
          {items.map(({ title, text }, i) => (
            <Card key={i} className="custom-card">
              <BSAccordion.Toggle
                as={Card.Header}
                eventKey={`${i}`}
                className="custom-card-header"
              >
                <Toggle>
                  <Title dangerouslySetInnerHTML={{ __html: title }} />
                  <Icon isActive={String(i) === active}>
                    <ChevronDown />
                  </Icon>
                </Toggle>
              </BSAccordion.Toggle>
              <BSAccordion.Collapse eventKey={`${i}`}>
                <Card.Body className="custom-card-body">
                  <div dangerouslySetInnerHTML={{ __html: text }} />
                </Card.Body>
              </BSAccordion.Collapse>
            </Card>
          ))}
        </BSAccordion>
      </Wrapper>
    </>
  );
};
