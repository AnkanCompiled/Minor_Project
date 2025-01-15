import React from "react";
import { useData } from "../context/dataContext";
import { scaleValue } from "../utils/scaleValue";

export default function AgreeablenessComponent() {
  const { userData } = useData();
  const value = scaleValue(userData.Agreeableness);

  const desc =
    value >= 4.5
      ? [
          "Compassionate",
          "You are exceptionally empathetic, cooperative, and altruistic.",
          "You value harmony and are quick to resolve conflicts, always prioritizing the well-being of others.",
        ]
      : value >= 4
      ? [
          "Kind-hearted",
          "You are warm, understanding, and patient with others.",
          "You seek to help and support those around you while maintaining healthy relationships.",
        ]
      : value >= 3.5
      ? [
          "Diplomatic",
          "You are kind and considerate but can assert boundaries when needed.",
          "You are open to compromise, balancing cooperation and self-respect.",
        ]
      : value >= 3
      ? [
          "Balanced",
          "You are empathetic but also stand your ground when necessary.",
          "You balance assertiveness with cooperation, but may sometimes focus on your own perspective.",
        ]
      : value >= 2.5
      ? [
          "Assertive",
          "You are occasionally skeptical and competitive, with strong personal boundaries.",
          "You can be blunt at times, preferring honesty over tact, but you are not dismissive of others.",
        ]
      : value >= 2
      ? [
          "Self-Interested",
          "You focus more on your own goals and ambitions than on others' needs.",
          "You may struggle with empathy but know how to assert yourself in social situations.",
        ]
      : value >= 1.5
      ? [
          "Egotistical",
          "You tend to be argumentative and self-centered.",
          "You struggle to empathize with others and often prioritize your own needs over relationships.",
        ]
      : [
          "Antagonistic",
          "You avoid cooperation and often challenge others' ideas.",
          "You may be dismissive of others' feelings and often prioritize your personal goals above all.",
        ];

  return (
    <div className="flex justify-normal p-6 bg-[#4CB8A4] bg-opacity-80">
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
