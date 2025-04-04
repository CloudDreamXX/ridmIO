import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  iconClassName?: string;
  variant?: "primary" | "secondary" | "bordered" | "bordered-secondary";
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  horizontal?: boolean;
  ref?: (el: any) => any;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  fullWidth = false,
  className,
  icon,
  onClick,
  iconClassName,
  horizontal = false,
  ref,
  ...props
}) => {
  return (
    <button
      className={classNames(styles.button, className, styles[variant], {
        [styles.horizontal]: horizontal,
      })}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      <span className={styles.buttonContent}>
        <span className={styles.buttonText}>{children}</span>
        <span className={styles.buttonTextFlipped}>{children}</span>
      </span>
      {icon && (
        <span className={classNames(styles.icon, iconClassName)}>{icon}</span>
      )}
    </button>
  );
};
