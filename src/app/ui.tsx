import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import styles from "./styles.module.scss";

import { Home } from "pages/home";
import { About } from "pages/about";
import { Terms } from "pages/terms";
import { NftContentTerms } from "pages/terms/content/nft";
import { CryptoContentTerms } from "pages/terms/content/crypto";
import { Policy } from "pages/policy";
import { NftContentPolicy } from "pages/policy/content/nft";
import { CryptoContentPolicy } from "pages/policy/content/crypto";

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
        <Route path="/terms-use" element={<Terms />}>
          <Route index element={<Navigate to="/terms-use/crypto" />} />
          <Route path="crypto" element={<CryptoContentTerms />} />
          <Route path="checkout" element={<NftContentTerms />} />
        </Route>
        <Route path="/privacy" element={<Policy />}>
          <Route index element={<Navigate to="/privacy/crypto" />} />
          <Route path="crypto" element={<CryptoContentPolicy />} />
          <Route path="checkout" element={<NftContentPolicy />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
