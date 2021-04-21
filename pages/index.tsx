import React, { useCallback, useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { ModalWindow } from "../app/ModalWindow";
import { GlobalStyles } from "../app/GlobalStyles";
import { content } from "../content";
import { MainForm } from "../app/MainForm/MainForm";
import { FieldType } from "../app/MainForm/interface";
import {
  AlertWindow,
  AlertWindowContext,
  AlertWindowProps,
} from "../app/AlertWindow";
import { useAlert } from "../app/utils/useAlert";

const Header = styled.div`
  height: 100vh;
  background: #f5f5f5;
`;

const Index: React.FC = () => {
  const { alert, openAlert } = useAlert();

  const [modal, setModal] = useState<boolean>();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <AlertWindowContext.Provider value={{ openAlert }}>
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
            onRequestDone={closeModal}
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
                  optionParams: {
                    "Тариф 1": {
                      price: 3000,
                      image: "1.jpg",
                    },
                    "Тариф 2": {
                      hit: true,
                      price: 2300,
                      image: "2.jpg",
                    },
                    "Тариф 3": {
                      price: 2300,
                      image: "3.jpg",
                    },
                  },
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
      <AlertWindow {...alert} />
    </AlertWindowContext.Provider>
  );
};

export default Index;
