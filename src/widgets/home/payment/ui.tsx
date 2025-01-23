import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import { Title } from "shared/ui";
import paymentsVideo from "shared/assets/video/payments.mp4";
import { usePageWidth } from "shared/lib/hooks";

export const Payment: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const width = usePageWidth();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  const responsiveScale = width <= 1600 ? [1, 2] : [0.8, 1.18];
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
          Purchase and sell a variety of crypto currencies using card or open
          banking. Safely send currency to other verified users.
        </p>
      </div>
    </div>
  );
};
