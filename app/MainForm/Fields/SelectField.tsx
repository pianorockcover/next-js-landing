import React, { useCallback } from "react";
import { Dropdown } from "react-bootstrap";
import { FieldInfo, FieldProps } from "../interface";
import { createGlobalStyle } from "styled-components";

const SelectStyles = createGlobalStyle`
    .custom-select-btn,
    .custom-select-btn:hover,
    .custom-select-btn:active {
        color: #212529;
        width: 100%;
        text-align: left;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        border-color: #ced4da;
    }

    .custom-select-btn:hover {
        background-color: #efefef;
    }

    .custom-dropdown {
        width: 100%;
    }
`;

const { Toggle, Menu, Item } = Dropdown;

export const SelectField: React.FC<FieldInfo & FieldProps> = ({
  value,
  options,
  ...props
}) => {
  const onChange = useCallback((v) => () => props.onChange(v), [
    props.onChange,
  ]);
  return (
    <>
      <SelectStyles />
      <Dropdown>
        <Toggle variant="default" className="custom-select-btn">
          {value}
        </Toggle>
        <Menu className="custom-dropdown">
          {(options || []).map((option, i) => (
            <Item key={i} onClick={onChange(option)} active={value === option}>
              {option}
            </Item>
          ))}
        </Menu>
      </Dropdown>
    </>
  );
};
