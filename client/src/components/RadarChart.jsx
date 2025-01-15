import React from "react";
import { Radar } from "react-chartjs-2"; // Import the Radar chart from react-chartjs-2
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"; // Import necessary Chart.js components
import { useData } from "../context/dataContext";
import { scaleValue } from "../utils/scaleValue";

// Register components with Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RadarChart = () => {
  const { userData } = useData();
  const data = {
    labels: [
      "Agreeableness",
      "Conscientiousness",
      "Extraversion",
      "Neuroticism",
      "Openness",
    ],
    datasets: [
      {
        label: "",
        data: [
          scaleValue(userData.Agreeableness),
          scaleValue(userData.Conscientiousness),
          scaleValue(userData.Extraversion),
          scaleValue(userData.Neuroticism),
          scaleValue(userData.Openness),
        ],
        backgroundColor: "rgba(54, 162, 235, 1)",
        borderColor: "rgba(54, 162, 235, 1)",
        pointBackgroundColor: "rgba(54, 162, 235, 1)",
        borderWidth: 5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hides the legend completely
      },
    },
    scales: {
      r: {
        angleLines: {
          display: true, // Show lines from the center to the perimeter
        },
        pointLabels: {
          font: {
            size: 18, // Increase the font size for the point labels
          },
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
  };

  return (
    <div className="w-max h-max rounded-xl shadow-lg">
      <Radar data={data} options={options} width={500} height={500} />
    </div>
  );
};

export default RadarChart;
