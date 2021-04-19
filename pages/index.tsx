import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { ModalWindow } from "../app/ModalWindow";
import { GlobalStyles } from "../app/GlobalStyles";
import { content } from "../content";

const Header = styled.div`
  height: 100vh;
  background: #f5f5f5;
`;

const Index: React.FC = () => {
  const [modal, setModal] = useState<boolean>();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      <GlobalStyles />
      <Header>
        <Button variant="primary" onClick={openModal}>
          {content.modalTitle}
        </Button>
        <ModalWindow
          visible={modal}
          title={content.modalTitle}
          onClose={closeModal}
        >
          Тут всякий контент
        </ModalWindow>
      </Header>
    </>
  );
};

export default Index;
