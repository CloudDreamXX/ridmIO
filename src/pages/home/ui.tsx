import React from "react";
import styles from "./styles.module.scss";
import {
  Faq,
  Form,
  Hero,
  ImageSections,
  ImageSectionsWhite,
  Intro,
  Payment,
  Plan,
  Web3,
} from "widgets/home";

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Intro />
      <div
        id="individuals"
        data-section={"light"}
        className={styles.individuals}
      >
        <div className={styles.label__container}>
          <div className={styles.label}>for Individuals</div>
        </div>
        <Payment />
        <ImageSections />
      </div>
      <div id="business" className={styles.individuals}>
        <div className={styles.label__container}>
          <div className={styles.label}>For Businesses</div>
        </div>
        <Web3 />
        <ImageSectionsWhite />
      </div>
      <Plan />
      <Faq />
      <Form />
    </div>
  );
};
