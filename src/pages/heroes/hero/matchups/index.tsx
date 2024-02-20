import React from 'react';
import { useParams } from 'react-router-dom';

import { useHeroMatchup } from '../../../../hooks/useHeroes';

import styles from '../../heroes.module.css';

function HeroMatchups() {
  const { heroId } = useParams();
  const { matchups } = useHeroMatchup(Number(heroId));
  return <div>HaroMatchups</div>;
}

export { HeroMatchups };
