import React, { useCallback } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import {
  FieldInfo,
  FieldProps,
  FieldValue,
  SelectFieldParams,
} from "../interface";
import styled, { createGlobalStyle } from "styled-components";
import { content } from "../../../content";
import { formatPrice } from "../../formatPrice";

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

const OptionWrapper = styled.div`
  position: relative;
  width: 100%;
`;
const HitLabel = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;
const Price = styled.div`
  font-size: 13px;
`;
const Label = styled.div`
  font-weight: 500;
`;

const { Toggle, Menu, Item } = Dropdown;

const getOptionParams = (
  value?: FieldValue,
  optionParams?: {
    [key: string]: SelectFieldParams;
  }
) => ({
  ...(value && optionParams && optionParams[String(value)]
    ? optionParams[String(value)]
    : {}),
});

export const SelectField: React.FC<FieldInfo & FieldProps> = ({
  value,
  options,
  optionParams,
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
          <Option
            text={String(value)}
            {...getOptionParams(value, optionParams)}
          />
        </Toggle>
        <Menu className="custom-dropdown">
          {(options || []).map((option, i) => (
            <Item key={i} onClick={onChange(option)} active={value === option}>
              <Option
                text={String(value)}
                {...getOptionParams(option, optionParams)}
              />
            </Item>
          ))}
        </Menu>
      </Dropdown>
    </>
  );
};

type OptionProps = {
  text?: string;
} & SelectFieldParams;

const Option: React.FC<OptionProps> = ({ text, price, hit }) => (
  <OptionWrapper>
    <Label>{text}</Label>
    <Price>
      {formatPrice(price)} {content.currency}
    </Price>
    {hit && (
      <HitLabel>
        <Badge pill variant="warning">
          Хит
        </Badge>
      </HitLabel>
    )}
  </OptionWrapper>
);
