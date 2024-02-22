import React from 'react';

import styles from './main.module.css';

function Main() {
  return (
    <div className={styles.description}>
      <h2 className={styles.title}>Dota Stats - Unveiling the Depths of Player Performance</h2>
      <p className={styles.paragraph}>
        Dive into the intricate world of Dota 2 with Dota Stats, your gateway to comprehensive{' '}
        <a href="/players" className={styles.link}>
          players
        </a>{' '}
        and{' '}
        <a href="/heroes" className={styles.link}>
          heroes
        </a>{' '}
        analytics. Gain unprecedented insights into player performance, match histories, and hero
        preferences. Whether you're a seasoned veteran or a curious newcomer, Dota Stats empowers
        you with the tools to understand the strategies, triumphs, and challenges of the game's most
        skilled players.
      </p>
      <p className={styles.paragraph}>
        Explore the mettle of Dota 2 players by delving into their alliances, formidable hero
        selections, and match outcomes. Uncover the dynamics of teamwork through detailed profiles
        showcasing synergies and triumphs. Dota Stats isn't just a platform; it's a portal to
        understanding the nuanced strategies and individual prowess that make each Dota 2 player's
        journey unique. Elevate your Dota 2 experience with Dota Stats – where player stats become
        stories.
      </p>
      <p className={styles.author}>
        Created as a pet project by{' '}
        <a href="https://github.com/stanislavsemeniuk" className={styles.link}>
          Stanislav Semeniuk
        </a>
      </p>
    </div>
  );
}

export { Main };
