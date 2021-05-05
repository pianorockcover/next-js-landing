import React, { useState } from "react";
import { Accordion as BSAccordion, Card } from "react-bootstrap";
import styled, { createGlobalStyle } from "styled-components";
import { ChevronDown } from "react-bootstrap-icons";

const GlobalStyle = createGlobalStyle`
    .custom-card {
        border: 0px !important;
        border-radius: 0px !important;
    }

    .custom-card-header {
        border-color: transparent !important;
        color: ${({ theme }) => theme.contentSection.accordeon.title.color};
        background: ${({ theme }) => theme.contentSection.accordeon.title.bg};
    }
`;

const Wrapper = styled.div`
  margin-bottom: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.contentSection.accordeon.color};
`;

const Toggle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  & > div {
    flex: 1;
    padding-right: 15px;
  }
`;

interface IconProps {
  isActive: boolean;
}

const Icon = styled.div<IconProps>`
  transition: transform 0.2s ease-in-out;
  flex: none !important;
  width: 16px;
  height: 16px;
  ${({ isActive }) => isActive && `transform: rotate(180deg);`}
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
                  <div>{title}</div>
                  <Icon isActive={String(i) === active}>
                    <ChevronDown />
                  </Icon>
                </Toggle>
              </BSAccordion.Toggle>
              <BSAccordion.Collapse eventKey={`${i}`}>
                <Card.Body>
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
