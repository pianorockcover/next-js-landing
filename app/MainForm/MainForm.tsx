import React, { useCallback, useEffect, useRef, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { SubmitButton } from "../Buttons/SubmitButton";
import { EmailField } from "./Fields/EmailField";
import { PhoneField } from "./Fields/PhoneField";
import { SelectField } from "./Fields/SelectField";
import { TextField } from "./Fields/TextField";
import { FieldError, FieldInfo, FieldProps, FieldValue } from "./interface";
import { validateForm } from "./validators";
import styled from "styled-components";
import { Loader } from "../Loader";

const Wrapper = styled.div`
  position: relative;
  padding: 15px;
`;

const { Label, Group } = Form;

const fieldControls: { [key: string]: React.FC<FieldInfo & FieldProps> } = {
  text: TextField,
  email: EmailField,
  phone: PhoneField,
  select: SelectField,
};

export type Errors = { [key: string]: FieldError };

export type Values = {
  [key: string]: FieldValue;
};

interface MainFormConfig {
  fields: FieldInfo[][];
  defaultValues?: Values;
}

export const MainForm: React.FC<MainFormConfig> = ({
  fields,
  defaultValues,
}) => {
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState<Values>(defaultValues || {});
  const [loader, setLoader] = useState<boolean>();

  const onChangeValidation = useRef(false);

  const onChange = useCallback(
    (name: string) => (value: FieldValue) =>
      setValues({ ...values, [name]: value }),
    [values]
  );

  const onSubmit = useCallback(() => {
    const { validation, hasErrors } = validateForm(fields, values);
    setErrors(validation);

    if (hasErrors) {
      onChangeValidation.current = true;
    } else {
      setLoader(true);
    }
  }, [values]);

  useEffect(() => {
    if (onChangeValidation.current) {
      setErrors(validateForm(fields, values).validation);
    }
  }, [values]);

  return (
    <Wrapper>
      <Loader show={loader} />
      <Form>
        {fields.map((row, i) => (
          <Row key={i}>
            {row.map((field, j) => {
              const Component = fieldControls[field.type];
              return (
                <Col key={j}>
                  <Group>
                    <Label>
                      {field.label}
                      {field.required ? " *" : ""}
                    </Label>
                    <Component
                      {...field}
                      value={values[field.name]}
                      error={errors[field.name]}
                      onChange={onChange(field.name)}
                    />
                    {errors[field.name] && (
                      <Form.Control.Feedback type="invalid" tooltip={false}>
                        {errors[field.name].text}
                      </Form.Control.Feedback>
                    )}
                  </Group>
                </Col>
              );
            })}
          </Row>
        ))}
      </Form>
      <SubmitButton onClick={onSubmit}>Отправить</SubmitButton>
    </Wrapper>
  );
};
