import React from "react";
import { Modal } from "react-bootstrap";
import { X as CloseIcon } from "react-bootstrap-icons";
import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div`
  padding-top: 25px;
  padding-bottom: 20px;
  position: relative;
  min-width: 300px;
`;

const Title = styled.h3`
  text-align: center;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 30px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 24px;
`;

const Close = styled.div`
  width: fit-content;
  font-size: 42px;
  line-height: 0;
  height: fit-content;
  color: #5b666f;
  position: absolute;
  right: 15px;
  top: 15px;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

export const ModalStyles = createGlobalStyle`
    .custom-modal-content {
        border: 0;
        border-radius: 5px;
        box-shadow: 5px 5px 10px 1px #46434369;
    }
    .custom-modal-backdrop.show {
        opacity: .7;
    }
`;

interface ModalWindowProps {
  visible?: boolean;
  title: string;
  onClose?: () => void;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({
  visible,
  title,
  children,
  onClose,
}) => {
  return (
    <>
      <ModalStyles />
      <Modal
        onHide={onClose}
        show={visible}
        centered={true}
        contentClassName="custom-modal-content"
        backdropClassName="custom-modal-backdrop"
        backdrop="static"
        keyboard={false}
      >
        <Wrapper>
          <Close onClick={onClose}>
            <CloseIcon />
          </Close>
          <Title>{title}</Title>
          {children}
        </Wrapper>
      </Modal>
    </>
  );
};
