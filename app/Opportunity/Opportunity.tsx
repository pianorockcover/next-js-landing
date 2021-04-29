import React, { useMemo } from "react";
import * as icons from "react-bootstrap-icons";
import styled from "styled-components";

interface OpportunityWrapperProps {
  lastRow?: boolean;
}

const OpportunityWrapper = styled.div<OpportunityWrapperProps>`
  color: #ffffff;

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
  padding: 12px;
  color: #fff;
  border-radius: 100%;
  box-shadow: 2px 2px 8px 0.5px #0000002e;
  margin-bottom: 10px;

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
  const IconComponent = useMemo(
    () => (icon && icons[icon] ? icons[icon] : () => null),
    [icon]
  );

  return (
    <OpportunityWrapper lastRow={lastRow}>
      <Icon className="bg-gradient-danger-warning">
        <IconComponent />
      </Icon>
      {title && <Title>{title}</Title>}
      {text && <Text>{text}</Text>}
    </OpportunityWrapper>
  );
};
