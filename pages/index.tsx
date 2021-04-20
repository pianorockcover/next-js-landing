import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { ModalWindow } from "../app/ModalWindow";
import { GlobalStyles } from "../app/GlobalStyles";
import { content } from "../content";
import { MainForm } from "../app/MainForm/MainForm";
import { FieldType } from "../app/MainForm/interface";

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
          <MainForm
            fields={[
              [
                {
                  type: FieldType.text,
                  label: "Ваше имя",
                  required: true,
                  name: "name",
                },
              ],
              [
                {
                  type: FieldType.email,
                  label: "Email",
                  required: true,
                  name: "email",
                },
              ],
              [
                {
                  type: FieldType.select,
                  label: "Тариф",
                  name: "tariff",
                  required: true,
                  options: ["Тариф 1", "Тариф 2", "Тариф 3"],
                },
              ],
              [
                {
                  type: FieldType.phone,
                  label: "Телефон",
                  required: true,
                  name: "phone",
                },
              ],
            ]}
            defaultValues={{
              tariff: "Тариф 1",
              phone: "+7",
            }}
          />
        </ModalWindow>
      </Header>
    </>
  );
};

export default Index;
