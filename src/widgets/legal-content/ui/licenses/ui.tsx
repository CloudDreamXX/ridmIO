import React, { createRef, useEffect } from "react";
import styles from "../styles.module.scss";
import { Title } from "shared/ui";

export const LicensesContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <Title variant="h1">Licenses</Title>
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
