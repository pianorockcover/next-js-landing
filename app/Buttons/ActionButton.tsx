import React, { CSSProperties, useMemo } from "react";
import { Button } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";
import * as icons from "react-bootstrap-icons";

const ActionButtonStyles = createGlobalStyle`
    .custom-action-button {
        border: 0px;
        letter-spacing: 1px;
        border-radius: 50px;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: transform .2s linear;
        box-shadow: none !important;

        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
            margin-right: 10px;
        }

        &:hover {
            transform: scale(1.05);
        }
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
  const Icon = useMemo(() => (icon && icons[icon] ? icons[icon] : () => null), [
    icon,
  ]);

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
