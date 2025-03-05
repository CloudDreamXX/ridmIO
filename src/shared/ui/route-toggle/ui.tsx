import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Button } from "../button";

interface ButtonProps {
  links: { name: string; path: string }[];
}

export const RouteToggle: React.FC<ButtonProps> = ({ links }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = links.findIndex(
    (link) => location.pathname === link.path
  );

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--translate-y", `${Math.abs(activeIndex) * 54}px`);

    const activeButton = buttonRefs.current[activeIndex];
    if (activeButton) {
      root.style.setProperty("--active-width", `${activeButton.offsetWidth}px`);
    }
  }, [activeIndex, location]);

  return (
    <div className={styles.toggle}>
      <div className={styles.toggleLinks}>
        {links.map((link, index) => (
          <Button
            key={index}
            ref={(el) => (buttonRefs.current[index] = el)}
            onClick={() => navigate(link.path)}
            className={classNames(styles.button, {
              [styles.active]: location.pathname === link.path,
            })}
          >
            {link.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
