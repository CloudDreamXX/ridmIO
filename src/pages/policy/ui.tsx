import { FC } from "react";
import styles from "./styles.module.scss";
import { Title } from "shared/ui";
import { OnrampPolicy } from "widgets/legal-content";

export const Policy: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <Title className={styles.title}>Privacy policy</Title>
        </div>
        <OnrampPolicy />
      </div>
    </div>
  );
};
