import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import styles from "./styles.module.scss";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";
import { useScrollToView } from "shared/lib/hooks";
import { Cookie } from "widgets/cookie";

// Lazy-loaded components
const Home = React.lazy(() =>
  import("pages/home").then(({ Home }) => ({ default: Home }))
);
const About = React.lazy(() =>
  import("pages/about").then(({ About }) => ({ default: About }))
);
const Terms = React.lazy(() =>
  import("pages/terms").then(({ Terms }) => ({ default: Terms }))
);
const Policy = React.lazy(() =>
  import("pages/policy").then(({ Policy }) => ({ default: Policy }))
);
const Licenses = React.lazy(() =>
  import("pages/licenses").then(({ Licenses }) => ({ default: Licenses }))
);
const CookiePolicy = React.lazy(() =>
  import("pages/cookie-policy").then(({ CookiePolicy }) => ({
    default: CookiePolicy,
  }))
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
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Legal pages */}
          <Route path="/terms-use/*" element={<Terms />} />
          <Route path="/privacy/*" element={<Policy />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </Suspense>
      <Cookie />
      <Footer />
    </div>
  );
};
