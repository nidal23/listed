import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { AiOutlineDown } from "react-icons/ai";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Basic Tees", "Custom Pants", "Super Hoodies"],
  datasets: [
    {
      label: "# of Sales",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
};

const PieChart = () => {
  return (
    <div className="flex flex-col h-90  md:ml-7 relative m-auto p-6 border rounded-xl bg-white lg:w-[45%] md:w-[50%]">
      <div className="flex justify-center items-center py-2">
        <div className="flex-1 font-bold text-xl text-left">
          <h2>Top Products</h2>
        </div>
        <div>
          <div className="text-gray-300 text-xs flex gap-1">
            May - June 2021{" "}
            <AiOutlineDown className="h-3 w-3 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default PieChart;
