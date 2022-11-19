import React from 'react';
import styles from './index.module.scss';

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <div className={`${styles['card']} ${className ? className : ''}`}>{children}</div>;
};

export default Card;
