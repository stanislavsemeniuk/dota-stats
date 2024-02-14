import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Dota Stats</h1>
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
