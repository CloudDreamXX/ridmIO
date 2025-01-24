import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import styles from "./styles.module.scss";

// import { Home } from "pages/home";
// import { About } from "pages/about";
import { Maintenance } from "pages/maintenance";

import { Header } from "widgets/header";
import { Footer } from "widgets/footer";

export const App: React.FC = () => {
  const isMaintenanceMode = true;

  return (
    <BrowserRouter>
      <div className={styles.wrapper}>
        <Header maintenanceMode={isMaintenanceMode} />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Maintenance />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {!isMaintenanceMode && <Footer />}
      </div>
    </BrowserRouter>
  );
};
