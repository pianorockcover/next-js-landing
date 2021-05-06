import React, { useCallback, useMemo, useState } from "react";
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
import fs from "fs";
import { parseScssVariables } from "../app/utils/parseScssVariables";
import { ThemeProvider } from "styled-components";
import { ThemeManager } from "../app/ThemeManager";
import { ContentSection } from "../app/ContentSection/ContentSection";
import { TestimonialsSection } from "../app/Testimonials/TestimonialsSection";

interface IndexProps {
  themeVariables: Record<string, string>;
}

const Index: React.FC<IndexProps> = ({ themeVariables }) => {
  const { alert, openAlert } = useAlert();
  const [feedback, setFeedback] = useState<FeedbackFormProps>();
  const toggleFeedback = useCallback(
    (props: FeedbackFormProps) =>
      setFeedback({ ...props, onClose: () => setFeedback({}) }),
    []
  );

  const theme = useMemo(() => new ThemeManager(themeVariables), []);

  return (
    <ThemeProvider theme={theme}>
      <AlertWindowContext.Provider value={{ openAlert }}>
        <GlobalStyles />
        <FeedbackFormContext.Provider value={{ toggleFeedback }}>
          <Navbar />
          <Header />
          <FeedbackForm {...feedback} />
          <Explanation />
          <OpportunitiesSection />
          <ProductsSection />
          <ContentSection />
          <TestimonialsSection />
          <AlertWindow {...alert} />
        </FeedbackFormContext.Provider>
      </AlertWindowContext.Provider>
    </ThemeProvider>
  );
};

export default Index;

export async function getStaticProps() {
  const scssThemeFile = fs.readFileSync("./theme.scss", "utf-8");

  return { props: { themeVariables: parseScssVariables(scssThemeFile) } };
}
