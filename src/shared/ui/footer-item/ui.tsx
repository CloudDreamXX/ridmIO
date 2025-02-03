import React from "react";
import styles from "./styles.module.scss";

import suppIcon from "shared/assets/img/icon-support.svg";
import { Link } from "react-router";
import classNames from "classnames";

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
        <Link to={item.link || "/"}>{item.name}</Link>
        <img src={suppIcon} alt="Support" className={styles.icon} />
      </div>
    );
  }

  if (item.icon) {
    return (
      <div className={styles.item}>
        <Link to={item.link || "/"}>{item.name}</Link>
        <img src={item.icon} alt={item.name} className={styles.icon} />
      </div>
    );
  }

  return (
    <Link
      to={item.link || "/"}
      className={classNames(
        styles.item,
        item.name === "Company info" ? styles.companyInfo : ""
      )}
    >
      {item.name}
    </Link>
  );
};
