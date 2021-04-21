import React, { useMemo } from "react";
import { Button } from "react-bootstrap";
import { createGlobalStyle } from "styled-components";
import * as icons from "react-bootstrap-icons";

const SubmitButtonStyles = createGlobalStyle`
    .custom-submit-button {
        border: 0px;
        font-weight: 300;
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
            box-shadow: 0px 3px 10px 0.5px #afb3b5ab;
        }
    }
`;

interface SubmitButtonProps {
  onClick: () => void;
  gradient?: string;
  icon?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  gradient,
  children,
  icon,
}) => {
  const Icon = useMemo(() => (icon && icons[icon] ? icons[icon] : () => null), [
    icon,
  ]);

  return (
    <>
      <SubmitButtonStyles />
      <Button
        onClick={onClick}
        className={`custom-submit-button bg-gradient-${gradient}`}
      >
        <Icon />
        {children}
      </Button>
    </>
  );
};
