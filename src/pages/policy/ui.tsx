import { FC } from "react";
import { Outlet } from "react-router";
import styles from "./styles.module.scss";
import { RouteToggle } from "shared/ui/route-toggle";

export const Policy: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <RouteToggle
            title="Privacy policy"
            links={[
              { name: "Onramp", path: "/privacy/onramp" },
              { name: "Checkout", path: "/privacy/checkout" },
            ]}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
