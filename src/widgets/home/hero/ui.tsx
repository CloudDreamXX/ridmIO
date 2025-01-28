import React from "react";
import styles from "./styles.module.scss";
import { Button, Title, Video } from "shared/ui";
import heroVideo from "shared/assets/video/hero.mp4";
import Lottie from "lottie-react";
import heroLottie from "shared/assets/lottie/hero.json";
import ArrowIcon from "shared/assets/icons/arrow";

export const Hero: React.FC = () => {
  return (
    <div className={styles.container} data-section={"light"}>
      <Video src={heroVideo} className={styles.bg} autoPlay muted loop />
      <div className={styles.hero}>
        <Lottie animationData={heroLottie} className={styles.lottie} />
        <div className={styles.info}>
          <Title>The pulse of web3 payments</Title>
          <Title variant="h2" className={styles.subtitle}>
            <span>Ridm for </span>
            <Button
              className={styles.button}
              variant="secondary"
              icon={<ArrowIcon />}
            >
              <a href="#individuals">individuals</a>
            </Button>
            <span>and</span>
            <Button
              className={styles.button}
              variant="secondary"
              icon={<ArrowIcon />}
            >
              <a href="#business">business</a>
            </Button>
          </Title>
        </div>
      </div>
    </div>
  );
};
