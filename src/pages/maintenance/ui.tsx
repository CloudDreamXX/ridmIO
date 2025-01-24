import React from "react";
import styles from "./styles.module.scss";
import video from "shared/assets/video/maintenanceVideo.mp4";
import heroLottie from "shared/assets/lottie/hero.json";
import { Button, Title, Video } from "shared/ui";
import Lottie from "lottie-react";
import { Form } from "widgets/home/form";

export const Maintenance: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <Video src={video} className={styles.bg} autoPlay muted loop />
        <div className={styles.hero}>
          <Lottie animationData={heroLottie} className={styles.lottie} />
          <div className={styles.info}>
            <Title>Ridm is coming soon</Title>
          </div>
          <a href="#form">
            <Button variant="bordered" className={styles.contact}>
              Contact us
            </Button>
          </a>
        </div>
      </div>
      <Form />
    </>
  );
};
