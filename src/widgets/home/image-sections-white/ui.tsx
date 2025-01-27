import React from "react";
import styles from "./styles.module.scss";
import phone from "shared/assets/img/phone.png";
import payWith from "shared/assets/img/pay-with.png";
import lock from "shared/assets/img/lock.png";
import { Button, Title } from "shared/ui";
import Arrow from "shared/assets/icons/arrow-right";
import classNames from "classnames";

export const ImageSectionsWhite: React.FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={phone} alt="phone" />
        </div>
        <div className={styles.text__container}>
          <div className={styles.text}>
            <Title className={styles.title}>Onramp widget</Title>
            <div className={styles.info}>
              <Title variant="h2" className={styles.subtitle}>
                User-centric
              </Title>
              <p>
                Our onramp widget is designed with the individual in mind,
                putting simplicity and security at the center. Customize and
                brand it to your liking, integrating directly into your website
                for a tailor-made and user-friendly experience.
              </p>
            </div>
            <Button
              variant="secondary"
              className={styles.button}
              icon={<Arrow />}
            >
              Get in touch
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
            <Title className={styles.title}>Checkout widget</Title>
            <div className={styles.info}>
              <Title variant="h2" className={styles.subtitle}>
                At your pace
              </Title>
              <p>
                Ridm’s checkout widget is a swift plug-and-play solution for
                merchants. With the option to either customize the widget to
                your brand, or utilize Ridm’s checkout as a payment solution.
                With our merchant back-office, businesses can monitor user
                activity and transactions and easily generate transaction
                reports.
              </p>
            </div>
            <Button
              variant="secondary"
              className={styles.button}
              icon={<Arrow />}
            >
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
