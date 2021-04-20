import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import { FieldInfo, FieldProps } from "../interface";

const { Control } = Form;

export const TextField: React.FC<FieldInfo & FieldProps> = ({
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
      isInvalid={!!error}
      value={String(value || "")}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
    />
  );
};
