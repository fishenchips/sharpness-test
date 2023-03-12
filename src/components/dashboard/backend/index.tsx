import { Game } from "@/queries/games/types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DashboardDiv } from "../styled";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  LoL: Array<Game>;
  minecraft: Array<Game>;
}

export const DashboardBackend: React.FC<Props> = ({ LoL, minecraft }) => {
  const dates = LoL.map(({ year, month }) => `${year}/${month}`);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "League of Legends",
        data: LoL.map(({ active_players }) => active_players),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Minecraft",
        data: minecraft.map(({ active_players }) => active_players),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right" as const,
        align: "start" as const,
      },
    },
  };

  return (
    <DashboardDiv>
      <h1>Dashboard - Data from backend</h1>
      <fieldset>
        <legend>Active Users</legend>
        <Line data={data} options={options} />
      </fieldset>
    </DashboardDiv>
  );
};
