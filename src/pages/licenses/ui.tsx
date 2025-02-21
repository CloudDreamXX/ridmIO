import { FC } from "react";
import styles from "./styles.module.scss";
import { LicensesContent } from "widgets/legal-content";

export const Licenses: FC = () => {
  return (
    <div className={styles.container} data-section={"dark"}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar} />
        <LicensesContent />
      </div>
    </div>
  );
};
