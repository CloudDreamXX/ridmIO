import React from "react";
import styles from "./styles.module.scss";
import footerImg from "shared/assets/img/Ridm.png";
import { nav } from "./lib";
import { FooterNav } from "feature/footer-nav";
import classNames from "classnames";
import { useDarkBg, usePageWidth } from "shared/lib/hooks";

export const Footer: React.FC = () => {
  const isDarkBg = useDarkBg();
  const width = usePageWidth();

  return (
    <div
      data-section={isDarkBg ? "light" : "dark"}
      className={classNames(styles.container, isDarkBg && styles["dark"])}
    >
      <div className={styles.footer__nav}>
        {Object.entries(nav).map(([section, items]) => (
          <FooterNav key={section} section={section} items={items} />
        ))}
      </div>

      <img src={footerImg} alt="Ridm" className={styles.company} />

      <div className={styles.additional}>
        <p>
          <span>©Ridm 2025</span>Part of Xypheris s.r.o.
        </p>
      </div>
    </div>
  );
};
