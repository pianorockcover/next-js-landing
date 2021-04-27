import React, { useCallback, useContext, useMemo, useState } from "react";
import { FeedbackFormContext } from "../FeedbackForm";
import { Product, ProductProps } from "./Product";
import { ProductWindow } from "./ProductWindow";

export const ProductElement: React.FC<ProductProps> = (props) => {
  const [modal, setModal] = useState<boolean>();
  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  const { toggleFeedback } = useContext(FeedbackFormContext);

  const openFeedback = useCallback(
    (id: number) => () => {
      closeModal();
      toggleFeedback({
        defaultValues: {
          product: id,
        },
        visible: true,
      });
    },
    []
  );

  const onProductClick = useCallback(
    (id: number) => () => (props.images ? openModal() : openFeedback(id)()),
    [props.images]
  );

  return (
    <>
      <Product {...props} onClick={onProductClick} />
      <ProductWindow
        {...props}
        visible={modal}
        onClose={closeModal}
        onFeedback={openFeedback}
      />
    </>
  );
};
