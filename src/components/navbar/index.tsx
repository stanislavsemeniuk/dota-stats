import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navbar.module.css';

interface LinkProps {
  href: string;
  text: string;
}

function NavBar({ links }: { links: LinkProps[] }) {
  return (
    <div className={styles.navbar}>
      {links.map(({ href, text }, index) => (
        <NavLink
          key={index}
          className={({ isActive }) => (isActive ? styles.active : '')}
          to={href}
          end>
          {text}
        </NavLink>
      ))}
    </div>
  );
}

export { NavBar };
