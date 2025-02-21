import { FC } from "react";
import styles from "./styles.module.scss";
import { RouteToggle, Title } from "shared/ui";
import { DigitalTerms, XypherisTerms } from "widgets/legal-content";
import { Navigate, Route, Routes } from "react-router";

export const Terms: FC = () => {
  return (
    <div className={styles.container} data-section={"dark"}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <RouteToggle
            links={[
              { name: "Xypheris S.r.o (CZ)", path: "/terms-use/xypheris" },
              {
                name: "Digital Currency Services B.V. (NL)",
                path: "/terms-use/digital",
              },
            ]}
          />
        </div>
        <Routes>
          <Route path="xypheris" element={<XypherisTerms />} />
          <Route path="digital" element={<DigitalTerms />} />
          <Route path="/" element={<Navigate to="xypheris" />} />
        </Routes>
      </div>
    </div>
  );
};
