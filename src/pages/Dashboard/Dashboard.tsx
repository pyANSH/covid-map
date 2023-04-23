import { useQuery } from "react-query";
import fetchCases from "../../Store/API/FetchCases";
import { Line } from "react-chartjs-2";
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function Dashboard() {
  const { data } = useQuery("cases", fetchCases);
  console.log(data);
  const chartData = {
    labels: Object.keys(data?.["cases"] || {}),

    datasets: [
      {
        label: "Cases",
        data: Object.values(data?.["cases"] || {}),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#480355",
        borderWidth: 1,
      },
      {
        label: "Deaths",
        data: Object.values(data?.["deaths"] || {}),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#63B4D1",
        borderWidth: 1,
      },
      {
        label: "Recovered",
        data: Object.values(data?.["recovered"] || {}),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "#90FCF9",
        borderWidth: 1,
      },
    ],
  };

  return (
    <Line
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Covid cases",
          },
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
      }}
    />
  );
}

export default Dashboard;
