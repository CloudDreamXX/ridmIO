import { Home } from "pages/home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Header } from "widgets/header";
import styles from "./styles.module.scss";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
