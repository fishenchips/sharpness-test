import { useGetGameQueries } from "@/queries/games/hooks/useGetGameQueries";

const Problem4 = () => {
  const { data: gameData, isLoading } = useGetGameQueries();

  const LoL = gameData?.data.filter(({ game }) => game === "League of Legends");

  const minecraft = gameData?.data.filter(({ game }) => game === "Minecraft");

  console.log({ minecraft });

  if (isLoading) {
    return <p>Loading..</p>;
  }

  if (!gameData) {
    return <p>Please try again</p>;
  }

  console.log({ LoL });

  return <></>;
};

export default Problem4;
