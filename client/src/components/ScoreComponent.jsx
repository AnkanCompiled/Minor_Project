import React, { useEffect } from "react";
import { useData } from "../context/dataContext";
import TraitComponent from "./TraitComponent";

export default function ScoreComponent() {
  const { userData } = useData();

  useEffect(() => {
    console.log("UserData", userData);
  }, [userData]);

  return (
    <div className="flex flex-col lg:flex-row mx-5 my-2 gap-2 ">
      {userData &&
        Object.entries(userData).map(([key, value], index) => (
          <TraitComponent key={index} traits={key} value={value} />
        ))}
    </div>
  );
}
