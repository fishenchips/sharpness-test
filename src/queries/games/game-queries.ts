import { GameData } from "./types";

export const getGameUsage = async (): Promise<GameData> => {
  const response = await fetch("/api/get-game-usage");

  return response.json();
};
