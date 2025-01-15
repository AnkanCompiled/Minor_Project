import React from "react";
import { scaleValue } from "../utils/scaleValue.js";

export default function TraitComponent({ traits, value, description }) {
  const roundedValue = parseFloat(value.toFixed(1));

  const score = scaleValue(roundedValue);
  const gradeColor =
    score >= 4.2
      ? "text-green-500"
      : score >= 3.2
      ? "text-yellow-500"
      : score >= 2.2
      ? "text-orange-500"
      : "text-red-500";

  return (
    <div className="group flex flex-col text-center items-center py-4 gap-2 w-full bg-[#F7F7F7] rounded-md shadow-md relative">
      <p className="text-xl text-[#444444] font-semibold">{traits}</p>

      {/* Circular Score Display */}
      <div className="relative w-40 h-40">
        <svg
          className="rotate-[90deg] w-full h-full"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className="stroke-current text-gray-200"
            strokeWidth="1.5"
            strokeDasharray="100 100"
            strokeLinecap="round"
          ></circle>

          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className={`stroke-current ${gradeColor}`}
            strokeWidth="2"
            strokeDasharray={`${(score / 5) * 100} 100`}
            strokeLinecap="round"
          ></circle>
        </svg>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-4xl font-bold text-[#5A9BD6]">{score}/5</span>
          <span className="text-[#5A9BD6] block">Score</span>
        </div>
      </div>

      {/* Hover Details */}
      <div className="fixed bottom-16 left-1/2 -translate-x-1/2 bg-white text-gray-700 p-4 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
}
