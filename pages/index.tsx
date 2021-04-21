import React from "react";
import { GlobalStyles } from "../app/GlobalStyles";
import { AlertWindow, AlertWindowContext } from "../app/AlertWindow";
import { useAlert } from "../app/utils/useAlert";
import { Header } from "../app/Header";
import { Navbar } from "../app/Navbar/Navbar";

const Index: React.FC = () => {
  const { alert, openAlert } = useAlert();

  return (
    <AlertWindowContext.Provider value={{ openAlert }}>
      <GlobalStyles />
      <Navbar />
      <Header />
      <AlertWindow {...alert} />
    </AlertWindowContext.Provider>
  );
};

export default Index;
