import React from "react";
import styles from "./styles.module.scss";

import suppIcon from "shared/assets/img/icon-support.svg";
import { Link } from "react-router";
import classNames from "classnames";

export interface NavItem {
  name: string;
  link?: string;
  icon?: string;
  target?: string;
}

interface FooterItemProps {
  item: NavItem;
}

export const FooterItem: React.FC<FooterItemProps> = ({ item }) => {
  if (item.name === "Support") {
    return (
      <Link
        to={item.link || "/"}
        className={styles.item}
        target={item.target || "_self"}
      >
        <div className={styles.link}>{item.name}</div>
        <img src={suppIcon} alt="Support" className={styles.icon} />
      </Link>
    );
  }

  if (item.icon) {
    return (
      <Link
        to={item.link || "/"}
        className={styles.item}
        target={item.target || "_self"}
      >
        <div className={styles.link}>{item.name}</div>
        <img src={item.icon} alt={item.name} className={styles.icon} />
      </Link>
    );
  }

  if (item.name.length > 20) {
    return (
      <p>
        {item.name.split("\n").map((text, index) => (
          <React.Fragment key={index}>
            {index > 0 && <br />}
            {text}
          </React.Fragment>
        ))}
      </p>
    );
  }

  return (
    <Link
      to={item.link || "/"}
      className={classNames(styles.item, styles.link)}
      target={item.target || "_self"}
    >
      {item.name}
    </Link>
  );
};
