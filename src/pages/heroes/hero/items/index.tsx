import React from 'react';
import { useParams } from 'react-router-dom';

import { findItemsInfo } from '../../../../static/items';
import { assetsUrl } from '../../../../helpers/assets';
import { useHeroItems } from '../../../../hooks/useHeroes';
import { GameItems } from '../../../../types/heroes';

import styles from '../../heroes.module.css';

function HeroItems() {
  const { heroId } = useParams();
  const { items } = useHeroItems(Number(heroId));
  return (
    <div className={styles.heroItemBuilds}>
      <div className={styles.heroItemBuild}>
        <div className={styles.heroBuildTitle}>Start game items</div>
        <div className={styles.heroBuildItems}>
          {items?.start_game_items && <HeroBuildItems gameItems={items?.start_game_items} />}
        </div>
      </div>
      <div className={styles.heroItemBuild}>
        <div className={styles.heroBuildTitle}>Early game items</div>
        <div className={styles.heroBuildItems}>
          {items?.early_game_items && <HeroBuildItems gameItems={items?.early_game_items} />}
        </div>
      </div>
      <div className={styles.heroItemBuild}>
        <div className={styles.heroBuildTitle}>Mid game items</div>
        <div className={styles.heroBuildItems}>
          {items?.mid_game_items && <HeroBuildItems gameItems={items?.mid_game_items} />}
        </div>
      </div>
      <div className={styles.heroItemBuild}>
        <div className={styles.heroBuildTitle}>Late game items</div>
        <div className={styles.heroBuildItems}>
          {items?.late_game_items && <HeroBuildItems gameItems={items?.late_game_items} />}
        </div>
      </div>
    </div>
  );
}

function HeroBuildItems({ gameItems }: { gameItems: GameItems }) {
  return (
    <>
      {gameItems &&
        Object.entries(gameItems)
          .filter(([key, amount]) => Number(amount) > 1)
          .map(([key, amount]) => (
            <HeroItem key={key} img={`${assetsUrl}${findItemsInfo(key).img}`} amount={amount} />
          ))}
    </>
  );
}

function HeroItem({ img, amount }: { img: string; amount: number }) {
  return (
    <div className={styles.item}>
      <img className={styles.itemImage} src={img} alt="Item" />
      <div className={styles.itemAmount}>x{amount}</div>
    </div>
  );
}

export { HeroItems };
