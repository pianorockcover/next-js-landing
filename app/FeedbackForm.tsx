import React, { useState } from "react";
import { ModalWindow } from "../app/ModalWindow";
import { content } from "../content";
import { MainForm, Values } from "../app/MainForm/MainForm";
import { SubmitButton } from "./Buttons/SubmitButton";

interface FeedbackFormProps {
  defaultValues?: Values;
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  defaultValues,
}) => {
  const [modal, setModal] = useState<boolean>();
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      <SubmitButton onClick={openModal} gradient="warning-success">
        {content.modalTitle}
      </SubmitButton>
      <ModalWindow
        visible={modal}
        title={content.modalTitle}
        onClose={closeModal}
      >
        <MainForm
          onRequestDone={closeModal}
          fields={content.feedbackForm.fields}
          defaultValues={{
            ...content.feedbackForm.defaultValues,
            ...(defaultValues ? defaultValues : {}),
          }}
        />
      </ModalWindow>
    </>
  );
};
