import React, { useCallback } from "react";
import { Badge, Dropdown } from "react-bootstrap";
import { FieldInfo, FieldProps, FieldValue } from "../interface";
import styled, { createGlobalStyle } from "styled-components";
import { content } from "../../../content";
import { formatPrice } from "../../utils/formatPrice";
import { ProductProps } from "../../Product/Product";

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

    .custom-badge {
        margin-bottom: 5px;
        display: block;

        &:nth-child(1) {
            margin-top: 3px;
        }
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
  display: flex;
  align-items: center;
`;

const OptionContent = styled.div`
  flex: 1;
`;

const Labels = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
`;

const Price = styled.div`
  font-size: 13px;
`;

const Label = styled.div`
  font-weight: 500;
  max-width: 100%;
  white-space: normal;
  padding-right: 20px;
`;

const Image = styled.div`
  width: 40px;
  height: 45px;
  margin-right: 10px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const { Toggle, Menu, Item } = Dropdown;

const getOptionParams = (options: ProductProps[], value?: FieldValue) =>
  options.find(({ id }) => id === value) || ({} as any);

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
          <Option {...getOptionParams(options, value)} />
        </Toggle>
        <Menu className="custom-dropdown">
          {(options || []).map((option, i) => (
            <Item
              key={i}
              onClick={onChange(option.id)}
              active={value === option.id}
            >
              <Option {...getOptionParams(options, option.id)} />
            </Item>
          ))}
        </Menu>
      </Dropdown>
    </>
  );
};

const Option: React.FC<ProductProps> = ({
  id,
  images,
  name,
  price,
  labels,
}) => (
  <OptionWrapper>
    {images && (
      <Image
        style={{
          backgroundImage: `url(/images/products/${id}/${images[0]}${content.cash})`,
        }}
      />
    )}
    <OptionContent>
      <Label>{name}</Label>
      <Price>{formatPrice(price)}</Price>
    </OptionContent>
    {labels && (
      <Labels>
        {labels.map(({ color, text }, i) => (
          <Badge className="custom-badge" key={i} pill variant={color}>
            {text}
          </Badge>
        ))}
      </Labels>
    )}
  </OptionWrapper>
);
