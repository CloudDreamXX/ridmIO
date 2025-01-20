import classNames from "classnames";
import styles from "./styles.module.scss";

interface TitleProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  style?: React.CSSProperties;
}

export const Title: React.FC<TitleProps> = ({
  variant = "h1",
  children,
  className,
  style,
}) => {
  const Tag = variant;
  return (
    <Tag
      style={style}
      className={classNames(styles.title, className, styles[variant])}
    >
      {children}
    </Tag>
  );
};
