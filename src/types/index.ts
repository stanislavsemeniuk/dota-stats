export interface SearchResult {
  account_id: number;
  avatarfull: string;
  personaname: string;
  last_match_time: string;
  similarity: number;
}

export interface Hero {
  id: string;
  name: string;
  localized_name: string;
  primary_attr: 'agi' | 'str' | 'int' | 'all';
  attack_type: 'Melee' | 'Ranged';
  roles: string[];
}

export interface PlayerInfo {
  rank_tier: number | null;
  leaderboard_rank: number | null;
  profile: {
    account_id: number;
    personaname: string;
    avatarfull: string;
  };
}

export interface Winrate {
  win: number;
  lose: number;
}

export interface Match {
  match_id: number;
  player_slot: number;
  radiant_win: boolean;
  hero_id: number;
  start_time: number;
  duration: number;
  game_mode: number;
  lobby_type: number;
  kills: number;
  deaths: number;
  assists: number;
  average_rank: number;
  xp_per_min: number;
  gold_per_min: number;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  last_hits: number;
  lane: number | null;
  lane_role: number | null;
  party_size: number | null;
}

export interface Teammate {
  account_id: string;
  with_games: number;
  with_win: number;
  personaname: string;
  avatar: string;
}

export interface Total {
  field:
    | 'kills'
    | 'deaths'
    | 'assists'
    | 'courier_kills'
    | 'purchase_ward_observer'
    | 'purchase_ward_sentry'
    | 'purchase_gem'
    | 'purchase_rapier';
  n: number;
  summ: number;
}

export interface PlayersHeroes {
  hero_id: number;
  last_played: number;
  games: number;
  win: number;
}
