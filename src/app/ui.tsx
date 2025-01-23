import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import styles from "./styles.module.scss";

import { Home } from "pages/home";
import { About } from "pages/about";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
