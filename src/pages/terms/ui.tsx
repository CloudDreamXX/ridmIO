import { FC } from "react";
import styles from "./styles.module.scss";
import { Title } from "shared/ui";
import { OnrampTerms } from "widgets/legal-content";

export const Terms: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Title className={styles.title}>Terms of use</Title>
        </div>
        <OnrampTerms />
      </div>
    </div>
  );
};
