import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface ButtonProps {
  title: string;
  links: { name: string; path: string }[];
}

export const RouteToggle: React.FC<ButtonProps> = ({ title, links }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeIndex = links.findIndex(
    (link) => location.pathname === link.path
  );

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--translate-x", `${activeIndex * 125}px`);
  }, [activeIndex]);

  return (
    <div className={styles.toggle}>
      <h1>{title}</h1>
      <div className={styles.toggleLinks}>
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => navigate(link.path)}
            className={classNames({
              [styles.active]: location.pathname === link.path,
            })}
          >
            {link.name}
          </button>
        ))}
      </div>
    </div>
  );
};
