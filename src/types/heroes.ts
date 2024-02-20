export interface IHero {
  id: string;
  name: string;
  localized_name: string;
  img: string;
  icon: string;
  pro_pick: number;
  pro_win: number;
  pub_pick: number;
  pub_win: number;
  pub_pick_trend: number[];
  pub_win_trend: number[];
}

export interface IHeroMatchup {
  hero_id: number;
  games_played: number;
  wins: number;
}

interface GameItems {
  [itemId: string]: number;
}

export interface IHeroItems {
  start_game_items: GameItems;
  early_game_items: GameItems;
  mid_game_items: GameItems;
  late_game_items: GameItems;
}
