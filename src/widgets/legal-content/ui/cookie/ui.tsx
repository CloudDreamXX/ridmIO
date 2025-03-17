import React, { createRef, useEffect } from "react";
import styles from "../styles.module.scss";
import { Title } from "shared/ui";

export const CookiePolicyContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <p className={styles.updates}>Last updated: March 2025</p>
      <Title variant="h1">Cookie Policy</Title>
      <h2>Introduction</h2>
      <div className={styles.divider}></div>
      <p>
        This website, ridm.io uses cookies to enhance user experience and
        analyze website traffic. This policy explains what cookies are, how we
        use them, and how you can manage your preferences.
      </p>
      <div className={styles.divider}></div>
      <h2>What are cookies?</h2>
      <div className={styles.divider}></div>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help websites function properly, analyze traffic, and
        remember user preferences.
      </p>
      <div className={styles.divider}></div>
      <h2>What types of cookies do we use?</h2>
      <div className={styles.divider}></div>
      <p>
        Ridm is a platform providing virtual asset services operated by Digital
        Currency Services B.V. and Xypheris S.r.o.
        <br />
        <br />
        <ul>
          <li>
            Digital Currency Services B.V. is a company registered in
            Netherlands under the company number 5855697 and registered as a
            Virtual Asset Service Provider with the Dutch National Bank (DNB).
          </li>
          <li>
            Xypheris s.r.o. is a company registered in Czech Republic under the
            company number 22400737 and registered as a Virtual Asset Service
            Provider with the Financial Analytical Office of Czech Republic
            (FAÚ).
          </li>
        </ul>
      </p>
    </div>
  );
};
