import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MenuIcon } from "shared/assets/icons/menu-icon";
import { motion } from "framer-motion";

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className={styles.menu} onClick={toggleMenu}>
        <MenuIcon isOpen={isOpen} />
      </button>
      {isOpen && (
        <motion.div
          className={styles.menuContent}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.3 }}
        >
          Menu content
        </motion.div>
      )}
    </>
  );
};
