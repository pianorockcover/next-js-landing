import React, { CSSProperties, useMemo } from "react";
import { Button } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";
import { useIcon } from "../utils/getIcon";

const SubmitButtonStyles = createGlobalStyle`
    .custom-submit-button {
        border: 0px;
        font-weight: 300;
        letter-spacing: 1px;
        border-radius: ${({ theme }) => theme.buttonBorderRadius};
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        color: ${({ theme }) => theme.white};
        background: ${({ theme }) => theme.primary};
        box-shadow: none !important;

        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
            margin-right: 10px;
        }

        ${({ theme }) => theme.hoverEffect(0.2, 1.05)}
    }
`;

interface SubmitButtonProps {
  onClick: () => void;
  style?: CSSProperties;
  icon?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  children,
  style,
  icon,
}) => {
  const Icon = useIcon(icon);

  return (
    <>
      <SubmitButtonStyles />
      <Button onClick={onClick} className="custom-submit-button" style={style}>
        <Icon />
        {children}
      </Button>
    </>
  );
};
