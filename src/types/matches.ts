export interface IMatchFullInfo {
  match_id: number;
  players: IMatchPlayer[];
  radiant_win: boolean;
  duration: number;
  radiant_score: number;
  dire_score: number;
}

export interface IMatchPlayer {
  account_id: number | undefined;
  personaname: string;
  player_slot: number;
  team_number: number;
  team_slot: number;
  hero_id: number;
  item_0: number;
  item_1: number;
  item_2: number;
  item_3: number;
  item_4: number;
  item_5: number;
  backpack_0: number;
  backpack_1: number;
  backpack_2: number;
  item_neutral: number;
  kills: number;
  deaths: number;
  assists: number;
  last_hits: number;
  denies: number;
  gold_per_min: number;
  xp_per_min: number;
  level: number;
  net_worth: number;
  aghanims_scepter: boolean;
  aghanims_shard: boolean;
  moonshard: boolean;
  hero_damage: number;
  tower_damage: number;
  hero_healing: number;
  isRadiant: true;
}
