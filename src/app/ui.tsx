import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import styles from "./styles.module.scss";

import { Home } from "pages/home";
import { About } from "pages/about";
import { Terms } from "pages/terms";
import { Policy } from "pages/policy";
import { OnrampPolicy } from "pages/policy/content/onramp";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { useScrollToTop } from "shared/lib/hooks";
import { OnrampTerms } from "pages/terms/content/onramp";
import { CheckoutTerms } from "pages/terms/content/checkout";

export const App: React.FC = () => {
  useScrollToTop();

  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-use" element={<Terms />}>
          <Route index element={<Navigate to="/terms-use/onramp" />} />
          <Route path="onramp" element={<OnrampTerms />} />
          <Route path="checkout" element={<OnrampTerms />} />
        </Route>
        <Route path="/privacy" element={<Policy />}>
          <Route index element={<Navigate to="/privacy/onramp" />} />
          <Route path="onramp" element={<OnrampPolicy />} />
          <Route path="checkout" element={<OnrampPolicy />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
