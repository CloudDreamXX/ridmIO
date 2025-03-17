import { FC } from "react";
import styles from "./styles.module.scss";
import { CookiePolicyContent } from "widgets/legal-content/ui/cookie";

export const CookiePolicy: FC = () => {
  return (
    <div className={styles.container} data-section={"dark"}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}></div>
        <div className={styles.policy}>
          <CookiePolicyContent />
        </div>
      </div>
    </div>
  );
};
