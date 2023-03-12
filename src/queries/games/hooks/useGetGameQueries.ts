import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { getGameUsage } from "../game-queries";
import { GameData } from "../types";

const gameQueriesKey = "game-queries-key";

export const useGetGameQueries = (
  options?: UseQueryOptions<unknown, unknown, GameData>
) =>
  useQuery({
    queryKey: [gameQueriesKey],
    queryFn: () => getGameUsage(),
    ...options,
  });
