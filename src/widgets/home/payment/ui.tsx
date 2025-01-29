import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import { Title } from "shared/ui";
import paymentsVideo from "shared/assets/video/payments.mp4";
import { usePageWidth } from "shared/lib/hooks";

const getScale = (width: number) => {
  if (width <= 768) {
    return [5, 10];
  }
  if (width <= 1600) {
    return [1, 2];
  }
  return [0.8, 1.2];
};

export const Payment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const width = usePageWidth();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const responsiveScale = getScale(width);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], responsiveScale);

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
          Purchase and sell crypto and safely interact with other verified users
          on our platform.
        </p>
      </div>
    </div>
  );
};
