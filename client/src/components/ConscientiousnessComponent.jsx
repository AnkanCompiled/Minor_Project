import React from "react";
import { useData } from "../context/dataContext";
import { scaleValue } from "../utils/scaleValue";

export default function ConscientiousnessComponent() {
  const { userData } = useData();
  const value = scaleValue(userData.Conscientiousness);

  const desc =
    value >= 4.2
      ? [
          "Meticulous",
          "You are exceptionally organized, responsible, and disciplined.",
          "You plan ahead and take pride in meeting deadlines and achieving your goals.",
        ]
      : value >= 4
      ? [
          "Diligent",
          "You are highly dependable, and you excel at staying on top of tasks.",
          "You prefer to be well-prepared and follow through on commitments.",
        ]
      : value >= 3.2
      ? [
          "Balanced",
          "You are generally reliable and organized but allow for some flexibility.",
          "You can balance work and leisure effectively, maintaining a steady pace.",
        ]
      : value >= 3
      ? [
          "Pragmatic",
          "You are reliable and capable of getting things done, but sometimes you take a relaxed approach.",
          "You can work well under pressure but enjoy a flexible approach to deadlines.",
        ]
      : value >= 2.2
      ? [
          "Unstructured",
          "You tend to procrastinate and struggle with long-term planning.",
          "You prefer a spontaneous, less rigid lifestyle, which sometimes leads to disorganization.",
        ]
      : value >= 2
      ? [
          "Carefree",
          "You are often disorganized and prefer not to stick to rigid schedules.",
          "You find it difficult to commit to long-term plans, preferring to take life as it comes.",
        ]
      : value >= 1.5
      ? [
          "Heedless",
          "You are disorganized and carefree, often neglecting responsibilities.",
          "You may avoid planning ahead and struggle to follow through with commitments.",
        ]
      : [
          "Irresponsible",
          "You avoid responsibilities and lack structure in your approach to tasks.",
          "You find it difficult to focus on long-term goals and often neglect obligations.",
        ];

  return (
    <div className="flex justify-normal p-6 bg-blue-400 bg-opacity-70">
      <div className="bg-white rounded-md shadow-lg px-4 py-2 text-[#333333]">
        <h1 className="text-4xl font-bold">{desc[0]}</h1>
        {desc.slice(1).map((item, index) => (
          <p className="text-2xl text-[#444444] font-semibold" key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
