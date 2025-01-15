import React from "react";
import { useData } from "../context/dataContext";
import { scaleValue } from "../utils/scaleValue";

export default function OpennessComponent() {
  const { userData } = useData();
  const value = scaleValue(userData.Openness);

  const desc =
    value >= 4.5
      ? [
          "Innovative",
          "You are highly imaginative, curious, and open to new experiences.",
          "You thrive in abstract thinking, enjoy artistic pursuits, and constantly seek novelty.",
          "You embrace unconventional ideas and love exploring the unknown.",
        ]
      : value >= 4
      ? [
          "Creative",
          "You enjoy exploring new ideas and take pride in your creativity.",
          "You are passionate about intellectual challenges and enjoy abstract thinking.",
        ]
      : value >= 3.5
      ? [
          "Curious",
          "You have a strong interest in new ideas and enjoy learning about diverse topics.",
          "You balance curiosity with a practical approach and like to explore the world around you.",
        ]
      : value >= 3
      ? [
          "Balanced",
          "You appreciate new ideas but often take a pragmatic approach.",
          "You strike a balance between being open-minded and grounded in practicality.",
        ]
      : value >= 2.5
      ? [
          "Practical",
          "You prefer routine and familiar environments but are open to new ideas occasionally.",
          "You find comfort in practicality and tend to avoid drastic changes.",
        ]
      : value >= 2
      ? [
          "Traditional",
          "You prefer conventional ideas and tend to avoid novelty and change.",
          "You value stability and routine, preferring things to stay as they are.",
        ]
      : value >= 1.5
      ? [
          "Conventional",
          "You dislike change and feel uncomfortable with abstract or unconventional ideas.",
          "You stick to traditional ways of thinking and prefer stability over novelty.",
        ]
      : [
          "Resistant to Change",
          "You strongly avoid new experiences and ideas, preferring consistency and predictability.",
          "You find comfort in what is familiar and feel anxious about abstract or novel concepts.",
        ];

  return (
    <div className="flex justify-normal p-6 bg-[#FFC857] bg-opacity-70">
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
