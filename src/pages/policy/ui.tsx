import { FC } from "react";
import { Outlet } from "react-router";
import styles from "./styles.module.scss";
import { RouteToggle } from "shared/ui/routeToggle";

export const Policy: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <RouteToggle
            title="Privacy policy"
            links={[
              { name: "Crypto Ridm", path: "/privacy/crypto" },
              { name: "NFT Checkout", path: "/privacy/checkout" },
            ]}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
