import React from "react";
import styles from "./styles.module.scss";
import AboutBg from "shared/assets/img/about-bg.png";
import { Title } from "shared/ui";

export const AboutUs: React.FC = () => {
  return (
    <div className={styles.container}>
      <Title variant="h1" className={styles.title}>
        About Us
      </Title>
      <p className={styles.text}>
        Ridm is a cutting-edge crypto platform that combines over 30 years of
        expertise in payments, web3, and financial strategy. Our mission is to
        empower businesses with distinctive and impactful design solutions,
        tailored to stand out in competitive markets. From strategic brand
        development to precision in visual execution, Ridm delivers clarity,
        creativity, and differentiation.
      </p>
    </div>
  );
};
