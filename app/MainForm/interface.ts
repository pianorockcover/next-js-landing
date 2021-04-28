import { ProductProps } from "../Product/Product";

export enum FieldType {
  text = "text",
  email = "email",
  phone = "phone",
  select = "select",
  offer = "offer",
}

export type FieldInfo = {
  type: FieldType;
  defaultValue?: FieldValue;
  label?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
} & SelectFieldInfo;

export interface SelectFieldInfo {
  options?: ProductProps[];
}

export type FieldValue = number | string | boolean;

export interface FieldProps {
  error?: FieldError;
  value?: FieldValue;
  onChange: (value?: FieldValue) => void;
}

export interface FieldError {
  isInvalid: boolean;
  text: string;
}
