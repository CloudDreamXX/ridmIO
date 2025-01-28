import React from "react";
import styles from "./styles.module.scss";
import phone from "shared/assets/img/phone.png";
import payWith from "shared/assets/img/pay-with.png";
import lock from "shared/assets/img/lock.png";
import { Button, Title } from "shared/ui";
import Arrow from "shared/assets/icons/arrow-right";
import classNames from "classnames";

export const ImageSections: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={phone} alt="phone" />
        </div>
        <div className={styles.text__container}>
          <div className={styles.text}>
            <Title className={styles.title}>Onramp & personal finance</Title>
            <div className={styles.info}>
              <Title variant="h2" className={styles.subtitle}>
                Digital assets, the convenient way
              </Title>
              <p>
                Ridm's onramp delivers a set of intuitive tools through a
                refined interface, offering versatility and control over your
                assets. Free from clutter and focused on your needs.
              </p>
            </div>
            <a href="#form">
              <Button
                variant="secondary"
                className={styles.button}
                icon={<Arrow />}
                horizontal={true}
              >
                Try Ridm
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className={classNames(styles.container, styles.img__right)}>
        <div className={styles.image}>
          <img src={payWith} alt="payWith" />
        </div>
        <div className={styles.text__container}>
          <div className={styles.text}>
            <Title className={styles.title}>More than investments</Title>
            <div className={styles.info}>
              <Title variant="h2" className={styles.subtitle}>
                Goods and services through verfied merchants
              </Title>
              <p>
                With full control over your assets, you can decide how to use
                your crypto. Whether for investments or paying for goods and
                services to merchants within the platform.
              </p>
            </div>
            <a href="#form">
              <Button
                variant="secondary"
                className={styles.button}
                icon={<Arrow />}
                horizontal={true}
              >
                Try Ridm
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className={classNames(styles.container)}>
        <div className={styles.image}>
          <img src={lock} alt="payWith" />
        </div>
        <div className={styles.text__container}>
          <div className={styles.text}>
            <Title className={styles.title}>Safety</Title>
            <div className={styles.info}>
              <Title variant="h2" className={styles.subtitle}>
                Verification and onboarding
              </Title>
              <p>
                A swift and secure onboarding flow and due diligence including
                verification through electronic ID, national ID or passport.
              </p>
            </div>
            <Button
              variant="secondary"
              className={styles.button}
              icon={<Arrow />}
              horizontal={true}
            >
              Try Ridm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
