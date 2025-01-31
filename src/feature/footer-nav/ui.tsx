import React from "react";
import styles from "./styles.module.scss";
import { FooterItem, NavItem } from "shared/ui/footer-item";
import VisaIcon from "shared/assets/icons/visa";
import MasterCardIcon from "shared/assets/icons/mastercard";
import { useDarkBg } from "shared/lib/hooks";
import classNames from "classnames";

interface FooterNavProps {
  section: string;
  items: NavItem[];
}

export const FooterNav: React.FC<FooterNavProps> = ({ section, items }) => {
  const isDarkBg = useDarkBg();

  const normalItems = items.filter(
    (item) => item.name !== "Visa" && item.name !== "MasterCard"
  );

  const paymentItems = items.filter(
    (item) => item.name === "Visa" || item.name === "MasterCard"
  );

  return (
    <div
      className={classNames(
        styles.section,
        isDarkBg && styles.dark,
        section === "Company info" && styles.companySection
      )}
    >
      <h3 className={styles.sectionTitle}>{section}</h3>
      <ul className={styles.sectionList}>
        {normalItems.map((item, idx) => (
          <li key={idx} className={styles.sectionItem}>
            <FooterItem item={item} />
          </li>
        ))}

        {paymentItems.length > 0 && (
          <li className={styles.cards}>
            {paymentItems.map((item, idx) =>
              item.name === "Visa" ? (
                <VisaIcon key={idx} />
              ) : (
                <MasterCardIcon key={idx} />
              )
            )}
          </li>
        )}
      </ul>
    </div>
  );
};
