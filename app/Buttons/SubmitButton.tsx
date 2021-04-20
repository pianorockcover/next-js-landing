import React from "react";
import { Button } from "react-bootstrap";

interface SubmitButtonProps {
  onClick: () => void;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  onClick,
  children,
}) => <Button onClick={onClick}>{children}</Button>;
