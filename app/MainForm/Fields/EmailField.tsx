import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import { FieldInfo, FieldProps } from "../interface";

const { Control } = Form;

export const EmailField: React.FC<FieldInfo & FieldProps> = ({
  placeholder,
  error,
  value,
  ...props
}) => {
  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => props.onChange(e.target.value),
    [props.onChange]
  );

  return (
    <Control
      onChange={onChange}
      isInvalid={!!error}
      value={String(value || "")}
      type="email"
      placeholder={placeholder}
    />
  );
};
