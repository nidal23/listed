import React, { useEffect, useState, useCallback } from "react";
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
import { AiOutlineDown } from "react-icons/ai";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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

const LineChart = () => {
  const [data, setData] = useState(null);
  const [chartKey, setChartKey] = useState(Date.now());

  const fetchData = useCallback(async () => {
    try {
      const url = "https://dummyjson.com/products";
      const response = await fetch(url);
      const res = await response.json();

      if (res.products && res.products.length > 0) {
        const dataSet1 = [];
        const dataSet2 = [];
        const labels = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ];

        for (const val of res.products) {
          dataSet1.push(val.discountPercentage);
          dataSet2.push(val.id);
        }

        setData({
          labels,
          datasets: [
            {
              label: "Guest",
              data: dataSet1,
              borderColor: "rgba(233, 160, 160, 1)",
              backgroundColor: "rgba(233, 160, 160, 1)",
            },
            {
              label: "User",
              data: dataSet2,
              borderColor: "rgba(155, 221, 124, 1)",
              backgroundColor: "rgba(155, 221, 124, 1)",
            },
          ],
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleResize = useCallback(() => {
    setChartKey(Date.now());
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="w-full relative h-auto m-auto p-4 border rounded-lg bg-white">
      <div className="flex flex-col ">
        <div className="font-bold text-xl text-left">
          <h2>Activities</h2>
        </div>
        <div>
          <div className="text-gray-300 text-xs flex gap-1">
            May - June 2021{" "}
            <AiOutlineDown className="h-3 w-3 text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
      {data ? (
        <div style={{ position: "relative", height: "100%", width: "100%" }}>
          <Line key={chartKey} options={options} data={data} />
        </div>
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default LineChart;
