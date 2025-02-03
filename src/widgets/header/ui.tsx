import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import styles from "./styles.module.scss";
import { Button } from "shared/ui";
import ArrowSmall from "shared/assets/icons/arrow-small";
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
import smallLogo from "shared/assets/img/small-logo.png";

export const Header: React.FC = () => {
  const width = usePageWidth();
  const scrollDirection = useScrollDirection();
  const { theme, setTheme } = useSectionTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleMouseEnter = () => {
    setIsHovered(true);
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    lottieRef.current?.stop();
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.location.reload();
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    location.pathname.includes("term") || location.pathname.includes("privacy")
      ? setTheme("dark")
      : setTheme("light");
  }, [location.pathname]);

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
            <img src={smallLogo} alt="" />
          </Link>
        )}
        <nav>
          <a href="/#individuals">
            <Button className={styles.button}>Individuals</Button>
          </a>
          <a href="/#business">
            <Button className={styles.button}>Business</Button>
          </a>
          <Link to="/about">
            <Button className={styles.button}>About</Button>
          </Link>
        </nav>
        <nav>
          <div className={styles.lang}>
            <Button className={styles.button} icon={<ArrowSmall />}>
              En
            </Button>
          </div>
          <Button className={styles.button}>Log in</Button>
          <Button variant="bordered" className={styles.bordered}>
            Sign up
          </Button>
        </nav>
        <button
          className={classNames(styles.burger, isOpen && styles.open)}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></button>
        <div className={classNames(styles.mobile, isOpen && styles.open)}>
          <nav>
            <Link to="/onramp" onClick={closeMenu}>
              <Button className={styles.button}>Onramp</Button>
            </Link>
            <Link to="/checkout" onClick={closeMenu}>
              <Button className={styles.button}>Checkout</Button>
            </Link>
            <Link to="/about" onClick={closeMenu}>
              <Button className={styles.button}>About</Button>
            </Link>
            <Link to="/support" onClick={closeMenu}>
              <Button className={styles.button}>Support</Button>
            </Link>
          </nav>
          <nav>
            <div className={styles.auth}>
              <Button className={styles.button}>Log in</Button>
              <Button variant="bordered" className={styles.bordered}>
                Sign up
              </Button>
            </div>
            <div className={styles.lang}>
              <Button className={styles.button} icon={<ArrowSmall />}>
                English
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
