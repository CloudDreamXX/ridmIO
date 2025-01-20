import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import { Title } from "shared/ui";
import paymentsVideo from "shared/assets/video/payments.mp4";

export const Payment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const scaleVideo = useTransform(scrollYProgress, [0, 1], [0.8, 1.18]);

  return (
    <div ref={containerRef} className={styles.container}>
      <motion.video
        src={paymentsVideo}
        className={styles.bg}
        autoPlay
        muted
        loop
        style={{ scale: scaleVideo }}
      />
      <div className={styles.text}>
        <Title className={styles.title}>Payments at your pace</Title>
        <p>
          Purchase and sell a variety of crypto currencies using card or open
          banking. Safely send currency to other verified users.
        </p>
      </div>
    </div>
  );
};
