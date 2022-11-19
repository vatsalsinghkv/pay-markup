import * as React from 'react';
import { useState } from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import Image from 'next/image';
import { getId } from '../../utils/helper';
import styles from './index.module.scss';

const NavLink = ({ name, href }) => {
  return (
    <li className={styles['nav__item']}>
      <a href={href} className={styles['nav__link']}>
        {name}
      </a>
    </li>
  );
};

function Nav() {
  const [collapsed, setCollapsed] = useState(false);

  const links = ['products', 'about', 'contact'];

  return (
    <nav className={`${styles.navbar} ${collapsed ? styles['active'] : ''}`} role="navigation">
      <Logo className={`${styles['navbar__logo']}`}>PayMarkup</Logo>

      <button className={styles['navbar__toggler']} onClick={() => setCollapsed((prev) => !prev)}>
        <Image width={20} height={20} src={`/images/${collapsed ? 'icon-close.svg' : 'icon-hamburger.svg'}`} className={styles['navbar__icon']} alt="hamburger-icon" />
      </button>

      <div className={styles['navbar__background']}>
        <ul className={styles['navbar__nav']}>
          {links.map((link) => (
            <NavLink key={getId()} href="/" name={link} />
          ))}
        </ul>
        <Button btnType="wallet" />
      </div>
    </nav>
  );
}

export default Nav;
