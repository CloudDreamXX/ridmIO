import React from "react";
import styles from "./styles.module.scss";
import footerImg from "shared/assets/img/Ridm.png";
import { nav } from "./mock";

export const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__nav}>
        {Object.entries(nav).map(([section, items]) => (
          <div key={section} className={styles.section}>
            <h3 className={styles.sectionTitle}>{section}</h3>
            <ul className={styles.sectionList}>
              {items.map((item, index) =>
                item.name === "Visa" || item.name === "MasterCard" ? null : (
                  <li key={index} className={styles.sectionItem}>
                    {item.icon ? (
                      <>
                        <a href={item.link}>{item.name}</a>
                        <img
                          src={item.icon}
                          alt={item.name}
                          className={styles.icon}
                        />
                      </>
                    ) : (
                      <a href={item.link}>{item.name}</a>
                    )}
                  </li>
                )
              )}
              <li className={styles.cards}>
                {items
                  .filter(
                    (item) => item.name === "Visa" || item.name === "MasterCard"
                  )
                  .map((item, index) => (
                    <img
                      key={index}
                      src={item.icon}
                      alt={item.name}
                      className={styles.icon}
                    />
                  ))}
              </li>
            </ul>
          </div>
        ))}
      </div>
      <img src={footerImg} alt="Ridm" className={styles.company} />
      <div className={styles.additional}>
        <p>
          <span>©Ridm 2025</span> Part of Climar Ltd.
        </p>
      </div>
    </div>
  );
};
