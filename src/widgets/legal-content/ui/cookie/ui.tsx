import React, { createRef, useEffect } from "react";
import styles from "../styles.module.scss";
import { Title } from "shared/ui";

export const CookiePolicyContent: React.FC = () => {
  return (
    <div className={styles.content}>
      <p className={styles.updates}>Last updated: March 2025</p>
      <Title variant="h1">Cookie Policy</Title>
      <h2>Introduction</h2>
      <div className={styles.divider}></div>
      <p>
        This website, <a href="https://ridm.io">ridm.io</a> uses cookies to
        enhance user experience and analyze website traffic. This policy
        explains what cookies are, how we use them, and how you can manage your
        preferences.
      </p>
      <div className={styles.divider}></div>
      <h2>What are cookies?</h2>
      <div className={styles.divider}></div>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help websites function properly, analyze traffic, and
        remember user preferences.
      </p>
      <div className={styles.divider}></div>
      <h2>What types of cookies do we use?</h2>
      <div className={styles.divider}></div>
      <p>
        We use the following types of cookies:
        <br />
        <br />
        <ul>
          <li>
            Necessary cookies – Essential for the website’s functionality and
            cannot be disabled.
          </li>
          <br />
          <li>
            Analytics cookies – Help us understand how visitors use our site
            through anonymous data (e.g., Google Analytics).
          </li>
          <br />
          <li>
            Marketing cookies – Used to track visitors across websites to
            display relevant ads.
          </li>
        </ul>
      </p>
      <div className={styles.divider}></div>
      <h2>How to manage cookies?</h2>
      <div className={styles.divider}></div>
      <p>
        You can control and disable cookies in your browser settings. You can
        also update your cookie preferences through our cookie banner.
      </p>
      <br />
      <p>
        For more details on how we handle your data, please refer to our{" "}
        <a href="/privacy/xypheris">Privacy Policy</a>.
      </p>
    </div>
  );
};
