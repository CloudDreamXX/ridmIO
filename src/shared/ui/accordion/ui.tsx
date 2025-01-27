import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index}>
          <div
            onClick={() => toggleAccordion(index)}
            className={classNames(
              styles.question,
              openIndex === index ? styles.active : ""
            )}
          >
            {item.question}
            <svg
              className={styles.icon}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {openIndex === index ? (
                <path d="M18 12.998H6v-2h12v2z" fill="currentColor" />
              ) : (
                <path
                  d="M12 18.998c-.552 0-1-.448-1-1v-5H6c-.552 0-1-.448-1-1s.448-1 1-1h5v-5c0-.552.448-1 1-1s1 .448 1 1v5h5c.552 0 1 .448 1 1s-.448 1-1 1h-5v5c0 .552-.448 1-1 1z"
                  fill="currentColor"
                />
              )}
            </svg>
          </div>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.answer}
              >
                <div
                  className={`${styles.answerContent} ${openIndex === index ? styles.active : ""}`}
                >
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
