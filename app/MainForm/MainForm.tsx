import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Form, Row, Col } from "react-bootstrap";
import { SubmitButton } from "../Buttons/SubmitButton";
import { EmailField } from "./Fields/EmailField";
import { PhoneField } from "./Fields/PhoneField";
import { SelectField } from "./Fields/SelectField";
import { TextField } from "./Fields/TextField";
import {
  FieldError,
  FieldInfo,
  FieldProps,
  FieldType,
  FieldValue,
} from "./interface";
import { validateForm } from "./validators";
import styled, { createGlobalStyle } from "styled-components";
import { Loader } from "../Loader";
import { OfferField } from "./Fields/OfferField";
import { clsx } from "../utils/clsx";
import {
  AlertWindow,
  AlertWindowContext,
  AlertWindowProps,
} from "../AlertWindow";
import { content } from "../../content";
import { request } from "../service";

const MainFormStyle = createGlobalStyle`
    .custom-label {
        color: #6f6f6f;
        font-size: 15px;
        margin-bottom: 5px;
    }

    .blured-form {
        filter: blur(2px);
    }

    .custom-form {
        margin-bottom: 10px;
    }

    .custom-form-control {}
`;

const Wrapper = styled.div`
  position: relative;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
`;

const { Label, Group } = Form;

const fieldControls: { [key: string]: React.FC<FieldInfo & FieldProps> } = {
  text: TextField,
  email: EmailField,
  phone: PhoneField,
  offer: OfferField,
  select: SelectField,
};

export type Errors = { [key: string]: FieldError };

export type Values = {
  [key: string]: FieldValue;
};

interface MainFormConfig {
  fields: FieldInfo[][];
  defaultValues?: Values;
  onRequestDone?: () => void;
}

export const MainForm: React.FC<MainFormConfig> = ({
  defaultValues,
  onRequestDone,
  ...props
}) => {
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState<Values>(defaultValues || {});
  const [loader, setLoader] = useState<boolean>(false);

  const fields: FieldInfo[][] = useMemo(
    () => [
      ...props.fields,
      [
        {
          name: "offer",
          type: FieldType.offer,
        },
      ],
    ],
    []
  );

  const onChangeValidation = useRef(false);

  const onChange = useCallback(
    (name: string) => (value: FieldValue) =>
      setValues({ ...values, [name]: value }),
    [values]
  );

  const { openAlert } = useContext(AlertWindowContext);

  const onSubmit = useCallback(() => {
    const { validation, hasErrors } = validateForm(fields, values);
    setErrors(validation);

    if (hasErrors) {
      onChangeValidation.current = true;
    } else {
      setLoader(true);

      request().then((res) => {
        setLoader(false);

        if (onRequestDone) {
          onRequestDone();
        }

        setTimeout(
          () =>
            openAlert(
              res
                ? {
                    type: "success",
                    ...content.alert.success,
                  }
                : {
                    type: "error",
                    ...content.alert.error,
                  }
            ),
          100
        );
      });
    }
  }, [values, onRequestDone]);

  useEffect(() => {
    if (onChangeValidation.current) {
      setErrors(validateForm(fields, values).validation);
    }
  }, [values]);

  return (
    <>
      <MainFormStyle />
      <Wrapper>
        <Loader show={loader} />
        <div className={clsx([["blured-form", loader]])}>
          <Form className="custom-form">
            {fields.map((row, i) => (
              <Row key={i}>
                {row.map((field, j) => {
                  const Component = fieldControls[field.type];
                  return (
                    <Col key={j}>
                      <Group>
                        {field.label && (
                          <Label className="custom-label">
                            {field.label}
                            {field.required ? (
                              <span className="text-danger"> *</span>
                            ) : null}
                          </Label>
                        )}
                        <Component
                          {...field}
                          value={values[field.name]}
                          error={errors[field.name]}
                          onChange={onChange(field.name)}
                        />
                        {errors[field.name] && (
                          <Form.Control.Feedback
                            type="invalid"
                            tooltip={false}
                            style={{ display: "block" }}
                          >
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
          <SubmitButton
            icon="Cart"
            onClick={onSubmit}
            gradient="primary-success"
          >
            Отправить
          </SubmitButton>
        </div>
      </Wrapper>
    </>
  );
};
