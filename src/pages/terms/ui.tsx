import { FC } from "react";
import { Outlet } from "react-router";
import styles from "./styles.module.scss";
import { RouteToggle } from "shared/ui/routeToggle";

export const Terms: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <RouteToggle
            title="Terms of use"
            links={[
              { name: "Crypto Ridm", path: "/terms-use/crypto" },
              { name: "NFT Checkout", path: "/terms-use/checkout" },
            ]}
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};
