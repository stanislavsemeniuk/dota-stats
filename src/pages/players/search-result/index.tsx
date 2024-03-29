import React from 'react';
import { Link } from 'react-router-dom';

import { ISearchResult } from '../../../types/search';
import { formatDate } from '../../../helpers/calculations';

import styles from './search-result.module.css';

function SearchResult({
  account_id,
  avatarfull,
  personaname,
  last_match_time,
  similarity,
}: ISearchResult) {
  const formattedLastMatchDate = formatDate(last_match_time);
  return (
    <Link to={`/players/${account_id}`} className={styles.resultBlock}>
      <div className={styles.avatar}>
        <img src={avatarfull} alt={`Full ${personaname} avatar`} className={styles.img} />
      </div>
      <div className={styles.info}>
        <div className={styles.nickname}>{personaname}</div>
        <div className={styles.lastOnline}>
          <div className={styles.lastMatchTitle}>Last match:</div>
          <div className={styles.lastMatchDate}>
            {last_match_time ? formattedLastMatchDate : 'Never played dota'}
          </div>
        </div>
      </div>
    </Link>
  );
}

export { SearchResult };
