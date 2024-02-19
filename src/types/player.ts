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
  duration: number;
  game_mode: number;
  kills: number;
  deaths: number;
  assists: number;
}

export interface IPlayerTeammate {
  account_id: string;
  with_games: number;
  with_win: number;
  personaname: string;
  avatarfull: string;
}

export interface IPlayerHero {
  hero_id: number;
  games: number;
  win: number;
}
