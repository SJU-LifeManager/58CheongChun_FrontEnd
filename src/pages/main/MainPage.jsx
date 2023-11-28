import React from "react";
import { MainTotalComponent } from "./style";
import { Header } from "../../layouts/header/Header";
import { Footer } from "../../layouts/footer/Footer";

const MainPage = () => {
  return (
    <MainTotalComponent>
      <Header />
      <Footer />
    </MainTotalComponent>
  );
};

export default MainPage;
