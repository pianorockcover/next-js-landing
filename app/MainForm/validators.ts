import { FieldError, FieldInfo, FieldValue } from "./interface";
import { Errors, Values } from "./MainForm";

export const requiredValidator = (
  { label, required }: FieldInfo,
  value: FieldValue
): FieldError | undefined =>
  required && (!value || !String(value).trim())
    ? {
        isInvalid: true,
        text: `Пожалуйста, введите ${label}`,
      }
    : undefined;

export const emailValidator = (
  { type }: FieldInfo,
  value: FieldValue
): FieldError | undefined => {
  if (type === "email") {
    const emailRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegexp.test(String(value).toLowerCase())) {
      return {
        isInvalid: true,
        text: "Пожалуйста, введите настоящий email",
      };
    }
  }
};

export const phoneValidator = (
  { type }: FieldInfo,
  value: FieldValue
): FieldError | undefined => {
  if (type === "phone") {
    const phoneRegexp = /\+\d-\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegexp.test(String(value).toLowerCase())) {
      return {
        isInvalid: true,
        text: "Пожалуйста, введите настоящий номер телефона",
      };
    }
  }
};

export const validators = [requiredValidator, emailValidator, phoneValidator];

export const validate = (fieldInfo: FieldInfo, value: FieldValue) =>
  validators.map((validator) => validator(fieldInfo, value)).find((v) => v);

export const validateForm = (fields: FieldInfo[][], values: Values) => {
  const validation = fields
    .reduce((prev, cur) => [...prev, ...cur], [] as FieldInfo[])
    .reduce(
      (prev, cur) => ({
        ...prev,
        [cur.name]: validate(cur, values[cur.name]),
      }),
      {} as Errors
    );

  const hasErrors = !!Object.values(validation).find((v) => v);

  return {
    validation,
    hasErrors,
  };
};
