import React, { createContext, useEffect, useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { ModalStyles } from "./ModalWindow";
import styled from "styled-components";
import * as icons from "react-bootstrap-icons";
import { clsx } from "./utils/clsx";
import { SubmitButton } from "./Buttons/SubmitButton";
import { createGlobalStyle } from "styled-components";

const AlertStyles = createGlobalStyle`
    .custom-alert-modal-dialog {
        max-width: 400px;
    }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Content = styled.div`
  padding: 15px;
  padding-top: 60px;
  text-align: center;
  margin-bottom: 10px;
`;

const IconWrapper = styled.div`
  color: #fff;
  width: 60px;
  border-radius: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffffff;
  position: absolute;
  left: calc(50% - 30px);
  top: -30px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 23px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  color: #696969;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export interface AlertWindowProps {
  type: "error" | "success";
  onClose: () => void;
  visible?: boolean;
  title?: string;
  text?: string;
}

export interface AlertWindowContextProps {
  openAlert: (
    params: Pick<AlertWindowProps, "type" | "title" | "text">
  ) => void;
}

export const AlertWindowContext = createContext<AlertWindowContextProps>({
  openAlert: () => null,
});

export const AlertWindow: React.FC<AlertWindowProps> = ({
  onClose,
  visible,
  title,
  text,
  type,
}) => {
  const [key, setKey] = useState<number>(+new Date());

  useEffect(() => setKey(+new Date()), [visible]);

  const Icon = useMemo(() => (type === "error" ? icons["X"] : icons["Check"]), [
    type,
  ]);

  return (
    <>
      <AlertStyles />
      <ModalStyles />
      <Modal
        key={key}
        onHide={onClose}
        show={visible}
        centered={true}
        dialogClassName="custom-alert-modal-dialog"
        contentClassName="custom-modal-content"
        backdropClassName="custom-modal-backdrop"
        backdrop="static"
        keyboard={false}
      >
        <Wrapper>
          <IconWrapper
            className={clsx([
              ["bg-success", type === "success"],
              ["bg-danger", type === "error"],
            ])}
          >
            <Icon />
          </IconWrapper>
          <Content>
            <Title>{title}</Title>
            <Text>{text}</Text>
          </Content>
          <ButtonWrapper>
            <SubmitButton
              onClick={onClose}
              icon="HandThumbsUp"
              gradient={
                type === "success" ? "primary-success" : "danger-warning"
              }
            >
              Ок
            </SubmitButton>
          </ButtonWrapper>
        </Wrapper>
      </Modal>
    </>
  );
};
