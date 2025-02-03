import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface AccordionProps {
  items: { question: string; answer: string[] }[];
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
            <>
              {item.question}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className={classNames(
                  styles.icon,
                  openIndex === index ? styles.active : ""
                )}
              >
                <>
                  <path
                    d="M20.0005 0V40.0005"
                    stroke="#EFEFEF"
                    stroke-width="3"
                  />
                  <path
                    d="M-0.000244141 20L40.0002 20"
                    stroke="#EFEFEF"
                    stroke-width="3"
                  />
                </>
              </svg>
            </>
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
                  className={classNames(styles.answerContent, {
                    [styles.active]: openIndex === index,
                  })}
                >
                  {item.answer.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
