import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import styles from "./styles.module.scss";
import { Button } from "shared/ui";
import logo from "shared/assets/lottie/logo.json";
import classNames from "classnames";
import {
  usePageWidth,
  useScrollDirection,
  useSectionTheme,
} from "shared/lib/hooks";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Ridm from "shared/assets/icons/ridm";
import RidmArrow from "shared/assets/icons/ridm-arrow";
import { toggleScroll } from "shared/lib/utils";

export const Header: React.FC = () => {
  const width = usePageWidth();
  const scrollDirection = useScrollDirection();
  const { theme } = useSectionTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleMouseEnter = () => {
    if (lottieRef.current?.play) {
      lottieRef.current?.play();
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.location.href = "/";
    }
  };

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    toggleScroll(newIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    toggleScroll(false);
  };

  useEffect(() => {
    return () => {
      toggleScroll(false);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    toggleScroll(false);
  }, [location]);

  return (
    <header
      className={classNames(
        styles.header,
        styles[scrollDirection],
        styles[theme]
      )}
    >
      <div className={styles.nav}>
        {width > 768 ? (
          <Link
            to="/"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.logoContainer}
          >
            <Lottie
              animationData={logo}
              className={classNames(styles.logo, !isHovered && styles.hovered)}
              lottieRef={lottieRef}
            />
            <RidmArrow
              className={classNames(
                styles.logo,
                styles.small,
                isHovered && styles.hovered
              )}
            />
            <Ridm className={styles.ridm} />
          </Link>
        ) : (
          <Link to="/" onClick={handleClick} className={styles.logo__small}>
            <RidmArrow
              className={classNames(
                styles.logo,
                styles.small,
                isHovered && styles.hovered
              )}
              width={30}
              height={30}
            />
            <Ridm className={styles.ridm} />
          </Link>
        )}
        <nav>
          <Link to="/#individuals">
            <Button className={styles.button}>Individuals</Button>
          </Link>
          <Link to="/#business">
            <Button className={styles.button}>Business</Button>
          </Link>
          <Link to="/about">
            <Button className={styles.button}>About</Button>
          </Link>
        </nav>
        <nav>
          <Link to={"/#form"}>
            <Button variant="bordered" className={styles.bordered}>
              Contact
            </Button>
          </Link>
        </nav>
        <button
          className={classNames(styles.burger, isOpen && styles.open)}
          onClick={toggleMenu}
        ></button>
        <div className={classNames(styles.mobile, isOpen && styles.open)}>
          <nav>
            <a href="/#individuals" onClick={closeMenu}>
              <Button className={styles.button}>Individuals</Button>
            </a>
            <a href="/#business" onClick={closeMenu}>
              <Button className={styles.button}>Business</Button>
            </a>
            <Link to="/about" onClick={closeMenu}>
              <Button className={styles.button}>About</Button>
            </Link>
          </nav>
          <nav>
            <div className={styles.auth}>
              <Link to={"/#form"}>
                <Button variant="bordered" className={styles.bordered}>
                  Contact
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
