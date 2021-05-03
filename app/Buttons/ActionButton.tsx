import React, { CSSProperties } from "react";
import { Button } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";
import { useIcon } from "../utils/getIcon";

const ActionButtonStyles = createGlobalStyle`
    .custom-action-button {
        border: 0px;
        letter-spacing: 1px;
        border-radius: ${({ theme }) => theme.buttonBorderRadius};
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
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

interface ActionButtonProps {
  onClick: () => void;
  icon?: string;
  style?: CSSProperties;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
  icon,
  style,
}) => {
  const Icon = useIcon(icon);

  return (
    <>
      <ActionButtonStyles />
      <Button
        size="lg"
        style={style}
        onClick={onClick}
        className="custom-action-button"
      >
        <Icon />
        {children}
      </Button>
    </>
  );
};
