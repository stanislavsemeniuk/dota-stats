import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { findHeroInfo } from '../../../static/heroes';
import { assetsUrl } from '../../../helpers/assets';

import styles from '../heroes.module.css';
import { NavBar } from '../../../components';

function Hero() {
  const { heroId } = useParams();
  const hero = findHeroInfo(Number(heroId));
  return (
    <div>
      <div className={styles.heroHeader}>
        <div className={styles.heroAvatar}>
          <img src={`${assetsUrl}${hero?.img}`} alt="Main hero" />
        </div>
        <div className={styles.heroMain}>
          <div className={styles.heroLocalName}>{hero?.localized_name}</div>
          <div>
            {hero?.name} <img src={`${assetsUrl}${hero?.icon}`} alt="Small hero" />
          </div>
          <div>{hero?.primary_attr}</div>
        </div>
        <div className={styles.heroAdditional}>
          <div>{hero?.attack_type}</div>
          <div>
            {hero?.roles.map((role, index) => (
              <div key={index}>{role}</div>
            ))}
          </div>
        </div>
      </div>
      <NavBar
        links={[
          { href: '', text: 'Best players' },
          { href: 'items', text: 'Items' },
          { href: 'matchups', text: 'Matchups' },
        ]}
      />
      <Outlet />
    </div>
  );
}

export { Hero };
