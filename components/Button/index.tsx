import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.FormEvent) => void;
  variant?: 'solid' | 'outlined';
  btnType?: 'wallet';
  centered?: boolean;
  fullWidth?: boolean;
}

const Button = ({ type = 'button', children, onClick, fullWidth, className, variant = 'solid', btnType, ...props }: Props) => {
  const classes = `${styles.button} ${className}   ${fullWidth ? styles['full-width'] : ''} ${variant ? styles[variant] : ''}`;

  if (btnType === 'wallet') return <WalletMultiButton className={classes} />;

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
