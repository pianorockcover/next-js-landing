import React, { useCallback, useEffect, useMemo, useState } from "react";
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
import { breakpoints, ThemeManager, THEME_FILE } from "../app/ThemeManager";
import { TestimonialsSection } from "../app/Testimonials/TestimonialsSection";
import { StepsSection } from "../app/StepsSection/StepsSection";
import { AboutSection } from "../app/AboutSection/AboutSection";
import { ApplySection } from "../app/ApplySection/ApplySection";
import { Footer } from "../app/Footer";
import { Loader } from "../app/Loader";
import "animate.css/animate.min.css";

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

  const [theme, setTheme] = useState<ThemeManager>();

  useEffect(() => {
    setTheme(
      new ThemeManager(
        { isMobile: window.innerWidth <= breakpoints.mobile },
        themeVariables
      )
    );
  }, []);

  return !theme ? (
    <Loader show={true} />
  ) : (
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
          <StepsSection />
          <AboutSection />
          <TestimonialsSection />
          <ApplySection />
          <Footer />
          <AlertWindow {...alert} />
        </FeedbackFormContext.Provider>
      </AlertWindowContext.Provider>
    </ThemeProvider>
  );
};

export default Index;

export async function getStaticProps() {
  const scssThemeFile = fs.readFileSync(THEME_FILE, "utf-8");

  return { props: { themeVariables: parseScssVariables(scssThemeFile) } };
}
