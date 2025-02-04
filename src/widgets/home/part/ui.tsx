import React from "react";
import styles from "./styles.module.scss";
import { Button, Title } from "shared/ui";
import Arrow from "shared/assets/icons/arrow";
import growthLottie from "shared/assets/lottie/growth.json";
import reduceLottie from "shared/assets/lottie/reduce.json";
import financialLottie from "shared/assets/lottie/financial.json";
import Lottie from "lottie-react";

export const Part: React.FC = () => {
  return (
    <div className={styles.container} data-section={"light"}>
      <div className={styles.info}>
        <Title className={styles.title}>Be part of the change</Title>
        <p>
          Financial systems are in a state of rapid progress and Web3 is
          reshaping how value is created. With opportunities to reduce costs,
          enable access to new tools for individuals and growth for small
          businesses.
        </p>
        <a href="#form">
          <Button
            variant="secondary"
            className={styles.button}
            icon={<Arrow />}
          >
            Get in touch
          </Button>
        </a>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Lottie animationData={reduceLottie} className={styles.cardImage} />
          <Title variant="h2" className={styles.cardTitle}>
            Reduce costs for consumers
          </Title>
          <p>
            Crypto transfers save an average of <span>8-10% annually</span> with
            reduced emittance costs compared to traditional systems.
          </p>
        </div>
        <div className={styles.card}>
          <Lottie
            animationData={financialLottie}
            className={styles.cardImage}
          />
          <Title variant="h2" className={styles.cardTitle}>
            Financial power for underbanked adults{" "}
          </Title>
          <p>
            2.5 billion adults lack access to banking services, but{" "}
            <span>30%</span> of them now use <span>crypto wallets.</span>
          </p>
        </div>
        <div className={styles.card}>
          <Lottie animationData={growthLottie} className={styles.cardImage} />
          <Title variant="h2" className={styles.cardTitle}>
            Small business growth
          </Title>
          <p>
            80% of crypto adopters are using it for small-scale trade and side
            hustles. With <span>web3 payment solutions</span>, small businesses
            stand to gain substantial growth through access to previously
            unavailable consumers.
          </p>
        </div>
      </div>
    </div>
  );
};
