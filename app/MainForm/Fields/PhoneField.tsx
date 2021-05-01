import React, { useCallback } from "react";
import { Form } from "react-bootstrap";
import { FieldInfo, FieldProps } from "../interface";
import InputMask from "react-input-mask";

const { Control } = Form;

export const PhoneField: React.FC<FieldInfo & FieldProps> = ({
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
      onChange={onChange}
      value={String(value || "")}
      as={InputMask}
      mask="+9-(999)-999-99-99"
      type="tel"
      placeholder={placeholder}
    />
  );
};
