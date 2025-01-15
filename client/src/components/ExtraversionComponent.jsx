import React from "react";
import { useData } from "../context/dataContext";
import { scaleValue } from "../utils/scaleValue";

export default function ExtraversionComponent() {
  const { userData } = useData();
  const value = scaleValue(userData.Extraversion);

  const desc =
    value >= 4.5
      ? [
          "Extroverted",
          "You are extremely outgoing, energetic, and sociable.",
          "You thrive in social settings, love being the center of attention, and enjoy meeting new people.",
        ]
      : value >= 4
      ? [
          "Energetic",
          "You are highly sociable and enjoy engaging with others in various activities.",
          "You tend to bring energy to social events and feel energized by group interactions.",
        ]
      : value >= 3
      ? [
          "Ambiverted",
          "You are moderately sociable, enjoy group settings but also value alone time.",
          "You are comfortable initiating conversations but may prefer quieter moments to recharge.",
        ]
      : value >= 2.5
      ? [
          "Introverted",
          "You prefer quiet environments and smaller, more intimate social gatherings.",
          "You engage in social activities occasionally but find them draining and need time alone to recharge.",
        ]
      : value >= 2
      ? [
          "Reserved",
          "You tend to avoid large social gatherings and may feel uncomfortable in unfamiliar group settings.",
          "While you enjoy close-knit interactions, you often prefer solitude over socializing.",
        ]
      : value >= 1.5
      ? [
          "Reclusive",
          "You are deeply introverted, avoid social situations, and find solitude more fulfilling.",
          "You are reluctant to engage in conversations or group activities, feeling drained by social interactions.",
        ]
      : [
          "Socially Detached",
          "You actively avoid social situations and often seek complete isolation.",
          "You find solitude deeply comforting and rarely engage with others outside of necessity.",
        ];

  return (
    <div className="flex justify-normal p-6 bg-[#FF8C42] bg-opacity-70">
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
