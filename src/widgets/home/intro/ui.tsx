import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./styles.module.scss";
import { Button, Title } from "shared/ui";
import ArrowRight from "shared/assets/icons/arrow-right";

const speedFactor = 6;

const text =
  "Designed with simplicity in mind, Ridm allows users to manage their digital " +
  "assets with ease and clarity. With a variety of products, we're here to help " +
  "individuals and businesses leap into the future of finance.";

const letters = text.split("");

export const Intro: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.container}>
      <div className={styles.label__container}>
        <div className={styles.label}>INTRO</div>
      </div>

      <div className={styles.info}>
        <Title className={styles.title}>
          {letters.map((letter, i) => {
            const N = letters.length;

            const start = Math.min(i / N / speedFactor, 1);
            const end = Math.min((i + 1) / N / speedFactor, 1);

            const color = useTransform(
              scrollYProgress,
              [0, start, end, 1],
              ["#614130", "#614130", "#FEA372", "#FEA372"]
            );

            return (
              <motion.span key={i} style={{ color }}>
                {letter}
              </motion.span>
            );
          })}
        </Title>

        <Button
          className={styles.button}
          icon={<ArrowRight />}
          horizontal={true}
        >
          About Ridm
        </Button>
      </div>
    </div>
  );
};
