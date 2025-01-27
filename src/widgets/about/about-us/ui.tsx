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
        With a combined expertise in payments, web3, and design, our mission is
        to empower businesses with distinctive and impactful solutions, tailored
        to stand out in competitive markets.
        <br />
        <br />
        We are user-centric and believe in addressing human needs through our
        products. In a rapidly evolving financial environment, we want to help
        shape the economy of the future.
      </p>
    </div>
  );
};
