import React, { useCallback } from "react";
import { Anchor } from "../../Anchor";
import { FieldInfo, FieldProps } from "../interface";
import styled, { createGlobalStyle } from "styled-components";
import { Check } from "react-bootstrap-icons";

const Label = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  padding-top: 7px;
  padding-bottom: 7px;
`;

interface CheckboxIconProps {
  checked?: boolean;
}

const CheckboxIcon = styled.div<CheckboxIconProps>`
  width: 20px;
  height: 20px;
  background: ${({ checked, theme }) =>
    checked ? theme.form.checkbox.filled : "#cecece"};
  margin-right: 10px;
  border-radius: 2px;
  position: relative;
`;

const CheckboxStyles = createGlobalStyle`
    .custom-checkbox-icon {
        position: absolute;
        transition: opacity .1s linear;
        width: 100%;
        height: 100%;
        color: #ffffff;
    }
`;

const LabelText = styled.div`
  font-size: 14px;
`;

export const OfferField: React.FC<FieldInfo & FieldProps> = ({
  placeholder,
  error,
  value,
  ...props
}) => {
  const onChange = useCallback(() => props.onChange(!value), [props.onChange]);

  return (
    <>
      <CheckboxStyles />
      <Label onClick={onChange}>
        <CheckboxIcon checked={!!value}>
          <Check
            className="custom-checkbox-icon"
            style={{ opacity: !value ? 0 : 1 }}
          />
        </CheckboxIcon>
        <LabelText>
          Я согласен с{" "}
          <Anchor href="#">правилами обработки персональных данных</Anchor>
        </LabelText>
      </Label>
    </>
  );
};
