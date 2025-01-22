import React from "react";
import styles from "./styles.module.scss";
import { Hero } from "widgets/home/hero/ui";
import { Intro } from "widgets/home/intro";
import { Payment } from "widgets/home/payment";
import { ImageSections } from "widgets/home/image-sections";
import { Web3 } from "widgets/home/web3";
import { ImageSectionsWhite } from "widgets/home/image-sections-white";
import { Plan } from "widgets/home/plan";
import { Change } from "widgets/home/faq";
import { Form } from "widgets/home/form";
import { Footer } from "widgets/footer";

export const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Intro />
      <div className={styles.individuals}>
        <div className={styles.label__container}>
          <div className={styles.label}>for Individuals</div>
        </div>
        <Payment />
        <ImageSections />
      </div>
      <div className={styles.individuals}>
        <div className={styles.label__container}>
          <div className={styles.label}>For Businesses</div>
        </div>
        <Web3 />
        <ImageSectionsWhite />
      </div>
      <Plan />
      <Change />
      <Form />
      <Footer />
    </div>
  );
};
