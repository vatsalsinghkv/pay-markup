import styles from "../styles/components/Logo.module.scss";

const Logo = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const classes = `${styles.logo} ${className ? className : ""}`;
  return <h1 className={classes}>{children}</h1>;
};

export default Logo;
