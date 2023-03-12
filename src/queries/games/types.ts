export type GameData = { data: Array<Game> };

export type Game = {
  id: number;
  game: string;
  year: number;
  month: number;
  active_players: number;
};
