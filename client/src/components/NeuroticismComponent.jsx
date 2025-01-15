import React from "react";
import { useData } from "../context/dataContext";
import { scaleValue } from "../utils/scaleValue";

export default function NeuroticismComponent() {
  const { userData } = useData();
  const value = scaleValue(userData.Neuroticism);

  const desc =
    value >= 4.5
      ? [
          "Empathic",
          "You are highly sensitive and emotionally reactive.",
          "Frequently experiences anxiety, sadness, or stress but may also feel joy intensely.",
        ]
      : value >= 4
      ? [
          "Sensitive",
          "You experience emotions deeply and are highly attuned to your own feelings.",
          "Often feels anxious or overwhelmed but can be emotionally expressive.",
        ]
      : value >= 3.5
      ? [
          "Composed",
          "You are moderately emotional, occasionally stressed or anxious but can regulate your feelings well.",
          "You have a balanced emotional response and can handle moderate stress.",
        ]
      : value >= 3
      ? [
          "Stable",
          "You experience some emotional fluctuations but manage them effectively.",
          "Stress or anxiety can affect you but you generally remain composed.",
        ]
      : value >= 2.5
      ? [
          "Stoic",
          "You remain calm and steady, rarely experiencing significant emotional fluctuations.",
          "You may appear emotionally distant but are effective at managing stress.",
        ]
      : value >= 2
      ? [
          "Untroubled",
          "You rarely experience significant emotional distress, but sometimes may appear indifferent to emotions.",
          "You're not easily swayed by external circumstances and maintain an even keel.",
        ]
      : value >= 1.5
      ? [
          "Resilient",
          "You are emotionally stable and unflappable.",
          "Handles stress exceptionally well, rarely feeling overwhelmed or reactive.",
        ]
      : [
          "Unyielding",
          "You rarely experience negative emotions and are very difficult to disturb.",
          "Stress rarely affects you, and you maintain a calm and composed demeanor in almost all situations.",
        ];

  return (
    <div className="flex justify-normal p-6 bg-red-400 bg-opacity-70">
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
