import { Link } from "react-router";
import styles from "./styles.module.scss";
import { Button } from "shared/ui";
import ArrowSmall from "shared/assets/icons/arrow-small";
import logo from "shared/assets/img/logo.png";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
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
    </header>
  );
};
