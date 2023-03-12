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
import gameData from "../../../data/frontend-data-set.json";
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

export const DashboardHardCoded = () => {
  const LoL = gameData.filter(({ game }) => game === "League of Legends");
  const minecraft = gameData.filter(({ game }) => game === "Minecraft");

  const data = {
    labels: LoL.map(({ date }) => date),
    datasets: [
      {
        label: "League of Legends",
        data: LoL.map(({ activeUsers }) => activeUsers),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Minecreaft",
        data: minecraft.map(({ activeUsers }) => activeUsers),
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
      <h1>Dashboard</h1>
      <fieldset>
        <legend>Active Users</legend>
        <Line data={data} options={options} />
      </fieldset>
    </DashboardDiv>
  );
};
