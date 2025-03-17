import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Button, Title } from "shared/ui";
import { Link } from "react-router";
import { useSectionTheme } from "shared/lib/hooks";
import classNames from "classnames";

const COOKIE_CONSENT_KEY = "ridmio_cookie_consent";

export const Cookie: React.FC = () => {
  const { theme } = useSectionTheme("cookie");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (cookieConsent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={classNames(styles.container, styles[theme])}>
      <div className={styles.info}>
        <Title variant="h2" className={styles.title}>
          This site uses cookies
        </Title>
        <p>
          Our site uses performance cookies to enhance functionality and track
          usage for better service.
        </p>
      </div>
      <div className={styles.buttons}>
        <Button
          variant="bordered"
          className={styles.accept}
          onClick={handleAccept}
        >
          Accept
        </Button>
        <Button
          variant="bordered-secondary"
          onClick={handleReject}
          className={styles.reject}
        >
          Reject all
        </Button>
        <Button>
          <Link to="/cookie-policy">See policy</Link>
        </Button>
      </div>
    </div>
  );
};
