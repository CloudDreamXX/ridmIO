import React from "react";
import styles from "./styles.module.scss";
import bgImage from "shared/assets/img/plan.png";
import { Button, Title } from "shared/ui";
import Arrow from "shared/assets/icons/arrow-right";

export const Plan: React.FC = () => {
  return (
    <div
      className={styles.container}
      data-section={"dark"}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.text}>
        <Title>Plan the present. Build the future.</Title>
        <p>
          Ridm is an innovative fintech, focusing on web3 finance for businesses
          and individuals. With a host of products and solutions, we aim to make
          the finances of the future available for all.
        </p>
        <Button variant="secondary" className={styles.button} icon={<Arrow />}>
          About us
        </Button>
      </div>
    </div>
  );
};
