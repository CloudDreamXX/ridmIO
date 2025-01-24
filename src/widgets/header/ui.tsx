import { Link } from "react-router";
import styles from "./styles.module.scss";
import { Button } from "shared/ui";
import logo from "shared/assets/img/logo.png";
import logoWhite from "shared/assets/img/logo-white.png";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useScrollDirection, useSectionTheme } from "shared/lib/hooks";
import { Menu } from "./menu";
import { NavigationLinks } from "./nav";

interface HeaderProps {
  maintenanceMode: boolean;
}

export const Header: React.FC<HeaderProps> = ({ maintenanceMode }) => {
  const scrollDirection = useScrollDirection();
  const theme = useSectionTheme();

  return (
    <header
      className={classNames(
        styles.header,
        styles[scrollDirection],
        styles[theme]
      )}
    >
      <Link to="/">
        <img src={maintenanceMode ? logoWhite : logo} alt="Logo" />
      </Link>
      {maintenanceMode ? (
        <a href="#form">
          <Button variant="bordered" className={styles.bordered}>
            Contact us
          </Button>
        </a>
      ) : (
        <NavigationLinks />
      )}
      {!maintenanceMode && <Menu />}
    </header>
  );
};
