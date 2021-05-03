import React from "react";
import styled from "styled-components";
import { useIcon } from "../utils/getIcon";

interface OpportunityWrapperProps {
  lastRow?: boolean;
}

const OpportunityWrapper = styled.div<OpportunityWrapperProps>`
  color: ${({ theme }) => theme.opportunities.item.color};

  ${({ lastRow }) =>
    !lastRow &&
    `
        margin-bottom: 30px
    `}
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.opportunities.item.icon.padding};
  color: ${({ theme }) => theme.opportunities.item.icon.color};
  border-radius: 100%;
  box-shadow: ${({ theme }) =>
    `2px 2px 8px 0.5px ${theme.opportunities.item.icon.shadow}`};
  margin-bottom: 10px;
  background: ${({ theme }) => theme.opportunities.item.icon.bg};

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Text = styled.div`
  font-weight: 300;
`;

export interface OpportunityProps {
  icon: string;
  title?: string;
  text?: string;
  lastRow?: boolean;
}

export const Opportunity: React.FC<OpportunityProps> = ({
  title,
  icon,
  lastRow,
  text,
}) => {
  const IconComponent = useIcon(icon);

  return (
    <OpportunityWrapper lastRow={lastRow}>
      <Icon>
        <IconComponent />
      </Icon>
      {title && <Title>{title}</Title>}
      {text && <Text>{text}</Text>}
    </OpportunityWrapper>
  );
};
