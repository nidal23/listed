import React from "react";
import { useEffect, useState } from "react";
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
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const LineChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
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
            dataSet1.push(val.price);
            dataSet2.push(val.stock);
          }

          setData({
            labels,
            datasets: [
              {
                label: "Dataset 1",
                data: dataSet1,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                label: "Dataset 2",
                data: dataSet2,
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          });
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <Line options={options} data={data} />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  );
};

export default LineChart;
