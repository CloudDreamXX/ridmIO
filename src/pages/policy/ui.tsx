import { FC } from "react";
import styles from "./styles.module.scss";
import { RouteToggle } from "shared/ui";
import { DigitalPolicy, XypherisPolicy } from "widgets/legal-content";
import { Navigate, Route, Routes } from "react-router";

export const Policy: FC = () => {
  return (
    <div className={styles.container} data-section={"dark"}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <RouteToggle
            links={[
              { name: "Xypheris S.r.o (CZ)", path: "/privacy/xypheris" },
              {
                name: "Digital Currency Services B.V. (NL)",
                path: "/privacy/digital",
              },
            ]}
          />
        </div>
        <Routes>
          <Route path="xypheris" element={<XypherisPolicy />} />
          <Route path="digital" element={<DigitalPolicy />} />
          <Route path="/" element={<Navigate to="xypheris" />} />
        </Routes>
      </div>
    </div>
  );
};
