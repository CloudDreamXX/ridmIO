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
            <Title className={styles.title}>
              Onramp & <br /> Personal Finance
            </Title>
            <div className={styles.info}>
              <Title variant="h2" className={styles.subtitle}>
                Digital assets, the convenient way
              </Title>
              <p>
                Ridm's onramp joins intuitive tools and an elegant interface,
                allowing a variety of usage and crontrol over your assets. Free
                from clutter and focused on the users needs.
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
      <div className={classNames(styles.container, styles.img__right)}>
        <div className={styles.image}>
          <img src={payWith} alt="payWith" />
        </div>
        <div className={styles.text__container}>
          <div className={styles.text}>
            <Title className={styles.title}>Control</Title>
            <div className={styles.info}>
              <Title variant="h2" className={styles.subtitle}>
                Payments
              </Title>
              <p>
                With full control over your assets, you can choose how you use
                your crypto, wether it is investments, or paying for goods and
                services to merchants within the platform.
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
                A thorough onboarding process and due diligence with
                verification through electronic ID or document.
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
