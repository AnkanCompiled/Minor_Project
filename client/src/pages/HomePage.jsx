import React from "react";
import UploadHandwriting from "../components/UploadHandwriting";
import NavbarComponent from "../components/NavbarComponent";
import CardComponent from "../components/CardComponent";
import analyzeIcon from "../assets/analyze.png";
import uploadIcon from "../assets/upload.png";
import resultsIcon from "../assets/results.png";
import websiteVideo from "../assets/websiteVideo.gif";

export default function HomePage() {
  return (
    <div className="main-page">
      <NavbarComponent />
      <div className="py-4 flex flex-col gap-5 bg-[#5A9BD6]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hidden lg:flex flex-col gap-8 p-10">
            <h1 className="text-6xl text-white font-extrabold">
              Analyze Your Handwriting
            </h1>
            <p className="text-2xl text-gray-100 font-semibold">
              Understand your Personality by the click of a button!
            </p>
          </div>
          <div className="w-full flex justify-center">
            <UploadHandwriting />
          </div>
        </div>
      </div>

      <div className="py-4 flex flex-col sm:flex-row sm:justify-evenly">
        {[
          {
            image: uploadIcon,
            text: "Upload",
            desc: "Upload a clear handwriting image.",
          },
          {
            image: analyzeIcon,
            text: "Analyze",
            desc: "Our website will analyze your handwriting.",
          },
          {
            image: resultsIcon,
            text: "Result",
            desc: "You will be evaluated by your handwriting.",
          },
        ].map((value, index) => (
          <CardComponent
            key={index}
            image={value.image}
            text={value.text}
            desc={value.desc}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2 py-10 px-10 sm:px-32 text-[#333333] text-lg">
        <h1 className="text-5xl font-bold text-[#FF6F61] mb-4">
          What Are the Big 5 Personality Traits?
        </h1>
        <div className="flex gap-6">
          <img
            src={websiteVideo}
            className="h-72 hidden xl:block rounded-md shadow-lg"
            alt="gif"
          />
          <div className="flex flex-col gap-2 xl:border-b-2 border-gray-300 xl:p-4 rounded-md xl:shadow-md">
            <h3 className="text-2xl font-semibold">
              Agreeableness, Conscientiousness, Neuroticism, Extraversion, and
              Openness
            </h3>
            <p>
              Many contemporary personality psychologists believe that there are
              five basic dimensions of personality, often referred to as the
              "Big 5" personality traits.
            </p>

            <ul className="px-5 list-disc">
              {[
                "Agreeableness is kindness",
                "Conscientiousness is thoughtfulness",
                "Extraversion is sociability",
                "Neuroticism often involves sadness or emotional instability",
                "Openness is creativity and intrigue",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
