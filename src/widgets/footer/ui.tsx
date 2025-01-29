import React from "react";
import styles from "./styles.module.scss";
import footerImg from "shared/assets/img/Ridm.png";
import { nav } from "./utils";
import { FooterNav } from "feature/footer-nav";
import { useLocation } from "react-router";
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
          <span>©Ridm 2025</span>{" "}
          {width > 768
            ? "a trademark of Climar Limited"
            : "Part of Climar Ltd."}
        </p>
      </div>
    </div>
  );
};
