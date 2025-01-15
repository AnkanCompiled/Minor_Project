import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import ScoreComponent from "../components/ScoreComponent";
import { useData } from "../context/dataContext";
import OpennessComponent from "../components/OpennessComponent";
import AgreeablenessComponent from "../components/AgreeablenessComponent";
import ConscientiousnessComponent from "../components/ConscientiousnessComponent";
import ExtraversionComponent from "../components/ExtraversionComponent";
import NeuroticismComponent from "../components/NeuroticismComponent";
import RadarChart from "../components/RadarChart";

export default function AnalysisPage() {
  const { userImage } = useData();

  return (
    <div className="main-page">
      <NavbarComponent />

      <div className="py-8 bg-[#5A9BD6] grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-12 gap-8">
        <div className="hidden lg:flex justify-center">
          <img
            className="rounded-lg border-4 border-white shadow-lg w-[80vw] lg:w-[30vw] max-h-[80vh] object-contain"
            src={URL.createObjectURL(userImage)}
            alt="Uploaded or Captured"
          />
        </div>

        <div className="flex flex-col gap-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl text-white font-extrabold leading-snug">
            We have analyzed your Handwriting
          </h1>
          <p className="text-lg lg:text-xl text-white">
            Discover detailed insights and explore how your handwriting reflects
            unique aspects of your personality.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-end my-6 px-6">
        <ScoreComponent />
      </div>

      <NeuroticismComponent />
      <ExtraversionComponent />
      <OpennessComponent />
      <AgreeablenessComponent />
      <ConscientiousnessComponent />
    </div>
  );
}
