import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button, Title } from "shared/ui";
import { Link } from "react-router";
import ArrowRight from "shared/assets/icons/arrow-right";
import styles from "./styles.module.scss";
import { usePageWidth } from "shared/lib/hooks";

const desktopText = [
  "Designed with simplicity in mind, Ridm",
  "allows users to manage their digital assets",
  "with comfort and clarity. With a variety of",
  "products, we're here to help individuals and ",
  "businesses leap into the future of finance.",
];

const mobileText =
  "Designed with simplicity in mind, Ridm allows users to manage their digital " +
  "assets with ease and clarity. With a variety of products, we're here to help " +
  "individuals and businesses leap into the future of finance.";

export const Intro: React.FC = () => {
  const width = usePageWidth();
  const isMobile = width < 768;
  const text = isMobile ? mobileText.split("") : desktopText;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: isMobile
      ? ["start end", "start start"]
      : ["start start", "end center"],
  });

  return (
    <div className={styles.container} data-section={"light"}>
      <div ref={containerRef} className={styles.scroll__container}></div>
      <div className={styles.label__container}>
        <div className={styles.label}>INTRO</div>
      </div>

      <div className={styles.info}>
        <Title className={styles.title}>
          {text.map((line, lineIndex) => {
            const lineProgress = useTransform(
              scrollYProgress,
              [0, 0.4, 0.8],
              [0, (5 - lineIndex) / 5, 1]
            );

            if (isMobile) {
              const letter = line;
              const i = lineIndex;
              const totalChars = mobileText.length;

              const start = Math.max(0, i / totalChars - 0.05);
              const end = Math.min((i + 1) / totalChars + 0.05, 1);

              const color = useTransform(
                scrollYProgress,
                [start, (start + end) / 2, end],
                ["#614130", "#FEA372", "#FEA372"]
              );

              return (
                <motion.span
                  key={i}
                  style={{
                    color,
                    display: "inline-block",
                    willChange: "color",
                    transition: "color 0.2s ease",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            }

            return (
              <div key={lineIndex} className={styles.line}>
                {line.split("").map((letter, i) => {
                  const N = line.length;
                  const charProgress = Math.min(i / N, 1);

                  const color = useTransform(
                    lineProgress,
                    [charProgress, charProgress + 0.02, 1],
                    ["#614130", "#FEA372", "#FEA372"]
                  );

                  return (
                    <motion.span key={i} style={{ color }}>
                      {letter}
                    </motion.span>
                  );
                })}
              </div>
            );
          })}
        </Title>
        <Link to="/about">
          <Button
            className={styles.button}
            icon={<ArrowRight />}
            horizontal={true}
          >
            About Ridm
          </Button>
        </Link>
      </div>
    </div>
  );
};
