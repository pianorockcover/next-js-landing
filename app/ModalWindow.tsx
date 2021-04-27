import React, { CSSProperties } from "react";
import { Modal } from "react-bootstrap";
import { X as CloseIcon } from "react-bootstrap-icons";
import styled, { createGlobalStyle } from "styled-components";

const Wrapper = styled.div`
  padding-bottom: 20px;
  position: relative;
  min-width: 300px;
  background: #ffffff;
  box-shadow: 5px 5px 10px 1px #46434369;
`;

const Title = styled.h3`
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 10px;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 24px;
  padding-top: 25px;
  padding-bottom: 25px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Close = styled.div`
  width: fit-content;
  font-size: 42px;
  line-height: 0;
  height: fit-content;
  color: #dadada;
  position: absolute;
  right: -45px;
  top: 5px;
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
        overflow: initial;
        background: transparent;
    }
    .custom-modal-backdrop.show {
        opacity: .7;
    }
`;

interface ModalWindowProps {
  visible?: boolean;
  title?: string;
  onClose?: () => void;
  size?: "sm" | "xl" | "lg";
  style?: CSSProperties;
}

export const ModalWindow: React.FC<ModalWindowProps> = ({
  visible,
  title,
  children,
  style,
  size,
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
        size={size}
      >
        <Wrapper style={style}>
          <Close onClick={onClose}>
            <CloseIcon />
          </Close>
          {title && <Title>{title}</Title>}
          {children}
        </Wrapper>
      </Modal>
    </>
  );
};
