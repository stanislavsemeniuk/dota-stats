export interface IPlayerInfo {
  rank_tier: number | null;
  leaderboard_rank: number | null;
  profile: {
    account_id: number;
    personaname: string;
    avatarfull: string;
  };
}

export interface IPlayerWinrate {
  win: number;
  lose: number;
}

export interface IPlayerMatch {
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

export interface IPlayerTeammate {
  account_id: string;
  with_games: number;
  with_win: number;
  personaname: string;
  avatar: string;
}

export interface IPlayerTotal {
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

export interface IPlayerHero {
  hero_id: number;
  last_played: number;
  games: number;
  win: number;
}
