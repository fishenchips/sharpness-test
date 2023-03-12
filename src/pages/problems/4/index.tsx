import { DashboardBackend } from "@/components/dashboard/backend";
import { useGetGameQueries } from "@/queries/games/hooks/useGetGameQueries";
import { Game } from "@/queries/games/types";

const Problem4 = () => {
  const { data: gameData, isLoading } = useGetGameQueries();

  const LoL = gameData?.data
    .filter(({ game }) => game === "League of Legends")
    .reverse();

  const minecraft = gameData?.data
    .filter(({ game }) => game === "Minecraft")
    .reverse();

  if (isLoading) {
    return <p>Loading..</p>;
  }

  if (!gameData) {
    return <p>Please try again</p>;
  }

  return (
    <DashboardBackend
      LoL={LoL as Array<Game>}
      minecraft={minecraft as Array<Game>}
    />
  );
};

export default Problem4;
