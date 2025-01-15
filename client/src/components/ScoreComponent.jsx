import React, { useEffect } from "react";
import { useData } from "../context/dataContext";
import TraitComponent from "./TraitComponent";

export default function ScoreComponent() {
  const { userData } = useData();

  const details = {
    Openness: "Your level of creativity, curiosity, and openness to new ideas.",
    Conscientiousness:
      "Your level of organization, responsibility, and dependability.",
    Extraversion: "Your level of sociability, energy, and assertiveness.",
    Agreeableness: "Your level of kindness, empathy, and cooperativeness.",
    Neuroticism:
      "Your level of emotional stability and tendency to experience negative emotions.",
  };

  useEffect(() => {
    console.log("UserData", userData);
  }, [userData]);

  return (
    <div className="flex flex-col lg:flex-row mx-5 my-2 gap-2 ">
      {userData &&
        Object.entries(userData).map(([key, value], index) => (
          <TraitComponent
            key={index}
            traits={key}
            value={value}
            description={details[key]}
          />
        ))}
    </div>
  );
}
