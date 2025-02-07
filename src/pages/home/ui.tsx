import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import {
  Faq,
  Form,
  Hero,
  ImageSections,
  ImageSectionsWhite,
  Intro,
  Payment,
  Plan,
  Web3,
  Part,
} from "widgets/home";

export const Home: React.FC = () => {
  useEffect(() => {
    const isIOSSafari =
      /iPhone|iPod|iPad/i.test(navigator.userAgent) &&
      /WebKit/i.test(navigator.userAgent) &&
      !/(CriOS|FxiOS|OPiOS|mercury)/i.test(navigator.userAgent);

    if (isIOSSafari) {
      document.documentElement.style.setProperty("scroll-behavior", "auto");

      const smoothScroll = (e: Event) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute(
          "href"
        );
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: "smooth",
          });
        }
      };

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", smoothScroll);
      });

      return () => {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
          anchor.removeEventListener("click", smoothScroll);
        });
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <Hero />
      <Intro />
      <div
        id="individuals"
        data-section={"light"}
        className={styles.individuals}
      >
        <div className={styles.label__container}>
          <div className={styles.label}>for Individuals</div>
        </div>
        <Payment />
        <ImageSections />
      </div>
      <div id="business" className={styles.individuals}>
        <div className={styles.label__container}>
          <div className={styles.label}>For Businesses</div>
        </div>
        <Web3 />
        <ImageSectionsWhite />
      </div>
      <Part />
      <Plan />
      <Faq />
      <Form />
    </div>
  );
};
