import React from "react";
import styles from "./styles.module.scss";

import suppIcon from "shared/assets/img/icon-support.svg";

export interface NavItem {
  name: string;
  link?: string;
  icon?: string;
}

interface FooterItemProps {
  item: NavItem;
}

export const FooterItem: React.FC<FooterItemProps> = ({ item }) => {
  if (item.name === "Support") {
    return (
      <div className={styles.item}>
        <a href={item.link}>{item.name}</a>
        <img src={suppIcon} alt="Support" className={styles.icon} />
      </div>
    );
  }

  if (item.icon) {
    return (
      <div className={styles.item}>
        <a href={item.link}>{item.name}</a>
        <img src={item.icon} alt={item.name} className={styles.icon} />
      </div>
    );
  }

  return (
    <a className={styles.item} href={item.link}>
      {item.name}
    </a>
  );
};
