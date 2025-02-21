import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import styles from "./styles.module.scss";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { useScrollToView } from "shared/lib/hooks";

const Home = React.lazy(() =>
  import("pages/home").then((module) => ({ default: module.Home }))
);
const About = React.lazy(() =>
  import("pages/about").then((module) => ({ default: module.About }))
);
const Terms = React.lazy(() =>
  import("pages/terms").then((module) => ({ default: module.Terms }))
);
const Policy = React.lazy(() =>
  import("pages/policy").then((module) => ({ default: module.Policy }))
);
const Licences = React.lazy(() =>
  import("pages/licenses").then((module) => ({ default: module.Licenses }))
);

const PageLoader = () => (
  <div className={styles.spinner}>
    <div className={styles.circle}></div>
  </div>
);

export const App: React.FC = () => {
  useScrollToView();

  return (
    <div className={styles.wrapper}>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms-use/*" element={<Terms />} />
          <Route path="/privacy/*" element={<Policy />} />
          <Route path="/licenses" element={<Licences />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};
