import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import { Title } from "shared/ui";
import web3Video from "shared/assets/video/web3.mp4";
import { usePageWidth } from "shared/lib/hooks";

const getScale = (width: number) => {
  if (width <= 768) {
    return [1, 8];
  }
  if (width <= 1600) {
    return [1, 1.6];
  }
  return [0.8, 1.2];
};

export const Web3: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });
  const width = usePageWidth();

  const responsiveScale = getScale(width);
  const scaleVideo = useTransform(scrollYProgress, [0, 1], responsiveScale);

  return (
    <div ref={containerRef} className={styles.container} data-section={"light"}>
      <motion.video
        src={web3Video}
        className={styles.bg}
        autoPlay
        muted
        loop
        style={{ scale: scaleVideo }}
      />
      <div className={styles.text}>
        <Title className={styles.title}>Web3 Payments for Businesses</Title>
        <p>Onramp and checkout tailored for your platform.</p>
      </div>
    </div>
  );
};
