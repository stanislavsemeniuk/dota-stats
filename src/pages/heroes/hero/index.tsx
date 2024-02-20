import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { findHeroInfo } from '../../../static/heroes';
import { findItemsInfo } from '../../../static/items';
import { assetsUrl } from '../../../helpers/assets';
import { useHeroItems, useHeroMatchup } from '../../../hooks/useHeroes';

import styles from '../heroes.module.css';

function Hero() {
  const { heroId } = useParams();
  const { items } = useHeroItems(Number(heroId));
  const { matchups } = useHeroMatchup(Number(heroId));
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
    </div>
  );
}

export { Hero };
