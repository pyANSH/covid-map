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
import WorldwideCases from "../../Store/API/WorldwideCases";
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
  const { data: dataAll } = useQuery("casesAll", WorldwideCases);

  const chartData_cases = {
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
    ],
  };
  const chartData_deaths = {
    labels: Object.keys(data?.["cases"] || {}),

    datasets: [
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
    ],
  };

  const chartData_Recovered = {
    labels: Object.keys(data?.["cases"] || {}),

    datasets: [
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
  console.warn(dataAll);
  return (
    <>
      <div className="flex justify-center gap-4 items-center flex-wrap">
        <div className="rounded-xl w-32 h-28 flex flex-col justify-center items-center p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className="text-xs font-bold text-gray-500">World Wide Cases</h1>
          <h1 className="text-2xl font-bold text-blue-500">{dataAll?.cases}</h1>
        </div>
        <div className="rounded-xl w-32 h-28 flex flex-col justify-center items-center p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className="text-xs font-bold text-gray-500">Deaths</h1>
          <h1 className="text-2xl font-bold text-red-500">{dataAll?.deaths}</h1>
        </div>
        <div className="rounded-xl w-32 h-28 flex flex-col justify-center items-center p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className="text-xs font-bold text-gray-500">Recovery</h1>
          <h1 className="text-2xl font-bold text-green-500">
            {dataAll?.recovered}
          </h1>
        </div>
        <div className="rounded-xl w-32 h-28 flex flex-col justify-center items-center p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className="text-xs font-bold text-gray-500">Cases Today</h1>
          <h1 className="text-2xl font-bold text-blue-500">
            {dataAll?.todayCases}
          </h1>
        </div>
        <div className="rounded-xl w-32 h-28 flex flex-col justify-center items-center p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className="text-xs font-bold text-gray-500">Deaths Today</h1>
          <h1 className="text-2xl font-bold text-red-600">
            {dataAll?.todayDeaths}
          </h1>
        </div>
        <div className="rounded-xl w-32 h-28 flex flex-col justify-center items-center p-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <h1 className="text-xs font-bold text-gray-500">Recovered Today</h1>
          <h1 className="text-2xl font-bold text-green-600">
            {dataAll?.todayRecovered}
          </h1>
        </div>
      </div>
      <div className="w-full h-1/2 gap-4 my-3 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl">
        <Line
          data={chartData_cases}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Covid cases in the world",
              },

              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
      <div className="grid h-2/5 md:grid-cols-2 w-full gap-5 mt-5 ">
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full rounded-xl">
          <Line
            data={chartData_deaths}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Covid Deaths",
                },
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
        <div className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-full rounded-xl">
          <Line
            data={chartData_Recovered}
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "Covid Recovered",
                },
                legend: {
                  display: false,
                },
              },
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
