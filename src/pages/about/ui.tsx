import React from "react";
import styles from "./styles.module.scss";
import { Hero, AboutUs, Hq, Team } from "widgets/about";

export const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <div data-section={"dark"} className={styles.light}>
        <AboutUs />
        <Team />
        <Hq />
      </div>
    </div>
  );
};
