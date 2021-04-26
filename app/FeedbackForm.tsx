import React, { createContext, useState } from "react";
import { ModalWindow } from "../app/ModalWindow";
import { content } from "../content";
import { MainForm, Values } from "../app/MainForm/MainForm";

export interface FeedbackFormProps {
  defaultValues?: Values;
  visible?: boolean;
  onClose?: () => void;
}

export interface FeedbackContextProps {
  toggleFeedback: (props: FeedbackFormProps) => void;
}

export const FeedbackFormContext = createContext<FeedbackContextProps>({
  toggleFeedback: () => null,
});

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
  defaultValues,
  visible,
  onClose,
}) => {
  return (
    <ModalWindow visible={visible} title={content.modalTitle} onClose={onClose}>
      <MainForm
        onRequestDone={onClose}
        fields={content.feedbackForm.fields}
        defaultValues={{
          ...content.feedbackForm.defaultValues,
          ...(defaultValues ? defaultValues : {}),
        }}
      />
    </ModalWindow>
  );
};
