import React from "react";
import styles from "./styles.module.scss";
import hqImage from "shared/assets/img/hq.png";
import { Button, Title } from "shared/ui";
import ArrowRight from "shared/assets/icons/arrow-right";
import { Link } from "react-router";

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
          <Link to="/#form">
            <Button
              icon={<ArrowRight />}
              className={styles.button}
              variant="primary"
            >
              Get in touch
            </Button>
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <img src={hqImage} alt="Ridm HQ" />
      </div>
      <Title variant="h1" className={styles.mobile__title}>
        Ridm HQ
      </Title>
    </div>
  );
};
