import React from "react";
import { Title } from "shared/ui";
import { faqData } from "./mock";
import { Accordion } from "shared/ui/accordion/ui";
import styles from "./styles.module.scss";

export const Faq: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.faqContent}>
        <Title variant="h2" style={{ fontSize: "70px" }}>
          Plan the present. Build the future.
        </Title>
        <p>
          Frequently asked questions, can’t find your answer here?{" "}
          <a href="#">Get in touch</a>
        </p>
      </div>
      <Accordion items={faqData} />
    </div>
  );
};
