import React, { useCallback, useState } from "react";
import { GlobalStyles } from "../app/GlobalStyles";
import { AlertWindow, AlertWindowContext } from "../app/AlertWindow";
import { useAlert } from "../app/utils/useAlert";
import { Header } from "../app/Header";
import { Navbar } from "../app/Navbar/Navbar";
import { Explanation } from "../app/Explanation";
import { ProductsSection } from "../app/Product/ProductsSection";
import {
  FeedbackForm,
  FeedbackFormContext,
  FeedbackFormProps,
} from "../app/FeedbackForm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OpportunitiesSection } from "../app/Opportunity/OpportunitiesSection";
import "react-awesome-lightbox/build/style.css";

const Index: React.FC = () => {
  const { alert, openAlert } = useAlert();
  const [feedback, setFeedback] = useState<FeedbackFormProps>();
  const toggleFeedback = useCallback(
    (props: FeedbackFormProps) =>
      setFeedback({ ...props, onClose: () => setFeedback({}) }),
    []
  );

  return (
    <AlertWindowContext.Provider value={{ openAlert }}>
      <GlobalStyles />
      <FeedbackFormContext.Provider value={{ toggleFeedback }}>
        <Navbar />
        <Header />
        <FeedbackForm {...feedback} />
        <Explanation />
        <OpportunitiesSection />
        <ProductsSection />
        <AlertWindow {...alert} />
      </FeedbackFormContext.Provider>
    </AlertWindowContext.Provider>
  );
};

export default Index;
