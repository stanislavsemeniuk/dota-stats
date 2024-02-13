import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Dota Stats</div>
      <div className={styles.navbar}>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/heroes">Heroes</NavLink>
      </div>
    </header>
  );
}
