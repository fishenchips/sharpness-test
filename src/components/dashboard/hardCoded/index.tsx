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
  const LoL = gameData.filter((g) => g.game === "League of Legends");
  const minecraft = gameData.filter((g) => g.game === "Minecraft");

  const data = {
    labels: LoL.map((m) => m.date),
    datasets: [
      {
        label: "League of Legends",
        data: LoL.map((m) => m.activeUsers),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Minecreaft",
        data: minecraft.map((m) => m.activeUsers),
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
    <div>
      <h1>Dashboard</h1>
      <fieldset>
        <legend>Active Users</legend>
        <Line data={data} options={options} />
      </fieldset>
    </div>
  );
};