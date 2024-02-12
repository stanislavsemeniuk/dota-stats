export interface Hero {
  id: string;
  name: string;
  localized_name: string;
  primary_attr: 'agi' | 'str' | 'int' | 'all';
  attack_type: 'Melee' | 'Ranged';
  roles: string[];
}

export interface HeroStats {
  id: string;
  name: string;
  localized_name: string;
  pro_pick: number;
  pro_win: number;
  pub_pick: number;
  pub_win: number;
  pub_pick_trend: number[];
  pub_win_trend: number[];
}

export interface HeroMatchup {
  hero_id: number;
  games_played: number;
  wins: number;
}
