import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { findHeroInfo } from '../../../static/heroes';
import { assetsUrl, attributes } from '../../../helpers/assets';

import styles from '../heroes.module.css';
import { NavBar } from '../../../components';

function Hero() {
  const { heroId } = useParams();
  const hero = findHeroInfo(Number(heroId));

  if (!hero) {
    return null;
  }

  return (
    <div>
      <div className={styles.heroHeader}>
        <div className={styles.heroAvatar}>
          <img src={`${assetsUrl}${hero?.img}`} alt="Main hero" />
        </div>
        <div className={styles.heroMain}>
          <div className={styles.heroLocalName}>{hero?.localized_name}</div>
          <div className={styles.heroIcon}>
            {hero?.name}{' '}
            <img width="16px" height="16px" src={`${assetsUrl}${hero?.icon}`} alt="Small hero" />
          </div>
          <div className={styles.attribute}>
            <img src={attributes[hero?.primary_attr]} alt="attribute" />
          </div>
        </div>
        <div className={styles.heroAdditional}>
          <div className={styles.heroAdditionalElement}>
            <div className={styles.heroAdditionalTitle}>Attack type:</div>
            <div className={styles.heroAdditionalContent}>{hero?.attack_type}</div>
          </div>
          <div className={styles.heroAdditionalElement}>
            <div className={styles.heroAdditionalTitle}>Roles:</div>
            <div className={styles.heroAdditionalContent}>{hero?.roles.join(' , ')}</div>
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
