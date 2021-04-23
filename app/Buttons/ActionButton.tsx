import React, { useMemo } from "react";
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
        transition: box-shadow .2s linear;

        display: flex;
        align-items: center;
        justify-content: center;

        & > svg {
            margin-right: 10px;
        }

        &:hover {
            box-shadow: 0px 3px 10px 0.5px #252525ab;
        }
    }
`;

interface ActionButtonProps {
  onClick: () => void;
  icon?: string;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
  icon,
}) => {
  const Icon = useMemo(() => (icon && icons[icon] ? icons[icon] : () => null), [
    icon,
  ]);

  return (
    <>
      <ActionButtonStyles />
      <Button
        variant="warning"
        size="lg"
        onClick={onClick}
        className="custom-action-button"
      >
        <Icon />
        {children}
      </Button>
    </>
  );
};
