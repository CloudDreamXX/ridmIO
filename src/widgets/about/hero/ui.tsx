import React from "react";
import styles from "./styles.module.scss";
import AboutBg from "shared/assets/img/about-bg.png";
import { Title } from "shared/ui";

export const Hero: React.FC = () => {
  return (
    <div className={styles.container} data-section="light">
      <div className={styles.bg}>
        <img src={AboutBg} alt="About" />
      </div>
      <Title variant="h1" className={styles.title}>
        A nordic approach to payments
      </Title>
    </div>
  );
};
