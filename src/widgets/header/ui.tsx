import { Link } from "react-router";
import styles from "./styles.module.scss";
import { Button } from "shared/ui";
import ArrowSmall from "shared/assets/icons/arrow-small";
import logo from "shared/assets/lottie/logo.json";
import { useRef, useState } from "react";
import classNames from "classnames";
import { useScrollDirection, useSectionTheme } from "shared/lib/hooks";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import Ridm from "shared/assets/icons/ridm";

export const Header: React.FC = () => {
  const scrollDirection = useScrollDirection();
  const theme = useSectionTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    lottieRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    lottieRef.current?.stop();
  };
  return (
    <header
      className={classNames(
        styles.header,
        styles[scrollDirection],
        styles[theme]
      )}
    >
      <div className={styles.nav}>
        <Link
          to="/"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.logoContainer}
        >
          <Lottie
            lottieRef={lottieRef}
            animationData={logo}
            className={styles.logo}
            autoplay={false}
            loop={true}
            height={70}
            width={70}
          />
          <Ridm className={styles.ridm} />
        </Link>
        <nav>
          <a href="#individuals">
            <Button className={styles.button}>Individuals</Button>
          </a>
          <a href="#business">
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
            console.log("clicked");
            setIsOpen(!isOpen);
          }}
        ></button>
        <div className={classNames(styles.mobile, isOpen && styles.open)}>
          <nav>
            <Link to="/onramp">
              <Button className={styles.button}>Onramp</Button>
            </Link>
            <Link to="/checkout">
              <Button className={styles.button}>Checkout</Button>
            </Link>
            <Link to="/about">
              <Button className={styles.button}>About</Button>
            </Link>
            <Link to="/support">
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
