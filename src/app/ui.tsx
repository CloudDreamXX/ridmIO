import React from "react";
import { Route, Routes } from "react-router";
import styles from "./styles.module.scss";

import { Home } from "pages/home";
import { About } from "pages/about";
import { Terms } from "pages/terms";
import { Policy } from "pages/policy";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { useScrollToTop } from "shared/lib/hooks";

export const App: React.FC = () => {
  useScrollToTop();

  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-use" element={<Terms />} />
        <Route path="/privacy" element={<Policy />} />
      </Routes>
      <Footer />
    </div>
  );
};
