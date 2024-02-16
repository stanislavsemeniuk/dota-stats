import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.title}>
        Dota Stats
      </Link>
      <div className={styles.navbar}>
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/players">
          Players
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/heroes">
          Heroes
        </NavLink>
      </div>
      <a href="https://docs.opendota.com/" rel="noreferrer" target="_blank" className={styles.info}>
        ⓘ
      </a>
    </header>
  );
}

export { Header };
