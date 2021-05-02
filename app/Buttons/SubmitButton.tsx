import React, { CSSProperties, useMemo } from "react";
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
        color: ${({ theme }) => theme.white};
        background: ${({ theme }) => theme.primary};
        transition: transform 0.2s linear;
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
  const Icon = useMemo(() => (icon && icons[icon] ? icons[icon] : () => null), [
    icon,
  ]);

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
