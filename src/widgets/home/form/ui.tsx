import React from "react";
import { Button, Title } from "shared/ui";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Arrow from "shared/assets/icons/arrow-right";

export const Form: React.FC = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={styles.left__container}>
        <div className={styles.content}>
          <Title variant="h2">Get in touch!</Title>
          <p>
            Reach out to our team and subscribe to our email list to gain access
            to the lastest updates about our work.
          </p>
        </div>
      </div>
      <div className={styles.form__container}>
        <form action="POST">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Surname" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Company" />
          <input type="text" placeholder="Message" />
        </form>
        <Button
          variant="secondary"
          className={styles.button}
          icon={<Arrow />}
          horizontal={true}
        >
          Send message
        </Button>
      </div>
    </div>
  );
};
