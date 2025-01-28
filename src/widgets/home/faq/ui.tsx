import React from "react";
import { Title } from "shared/ui";
import { faqData } from "./mock";
import { Accordion } from "shared/ui/accordion/ui";
import styles from "./styles.module.scss";

export const Faq: React.FC = () => {
  return (
    <div className={styles.container} data-section={"light"}>
      <div className={styles.faqContent}>
        <Title variant="h2" className={styles.title}>
          FAQ
        </Title>
        <p>
          Frequently asked questions, can’t find your answer here?{" "}
          <a href="#">See all</a>
        </p>
      </div>
      <Accordion items={faqData} />
    </div>
  );
};
