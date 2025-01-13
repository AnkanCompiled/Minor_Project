import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import ScoreComponent from "../components/ScoreComponent";

export default function AnalysisPage() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#F7F7F7]">
      <NavbarComponent />

      <div className="py-4 bg-[#5A9BD6]">
        <div className="flex justify-end mx-4"></div>
        <ScoreComponent />
      </div>
    </div>
  );
}
