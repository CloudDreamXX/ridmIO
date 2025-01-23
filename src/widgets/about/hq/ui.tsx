import React from "react";
import styles from "./styles.module.scss";
import hqImage from "shared/assets/img/hq.png";
import { Button, Title } from "shared/ui";
import ArrowRight from "shared/assets/icons/arrow-right";

export const Hq: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title variant="h1" className={styles.title}>
          Ridm HQ
        </Title>
        <p className={styles.text}>
          Hamngatan 11
          <br />
          111 47 Stockholm
          <br />
          Sweden
        </p>
        <div className={styles.buttons}>
          <Button
            icon={<ArrowRight />}
            className={styles.button}
            variant="primary"
          >
            Get in touch
          </Button>
          <Button
            icon={<ArrowRight />}
            className={styles.button}
            variant="primary"
          >
            Join the team
          </Button>
        </div>
      </div>
      <div className={styles.image}>
        <img src={hqImage} alt="Ridm HQ" />
      </div>
    </div>
  );
};
