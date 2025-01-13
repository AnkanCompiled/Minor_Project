import React from "react";

export default function CardComponent({ image, text, desc }) {
  return (
    <div className="grid grid-rows-[2fr_0.5fr_0.5fr] gap-1 sm:w-[25vw] px-5 py-2 rounded-lg shadow-md">
      <div
        className="w-full flex justify-center bg-[#4CB8A4] py-3"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 120%, 0 70%)",
        }}
      >
        <img src={image} alt={text} className="w-24 h-24" />
      </div>
      <h3 className="text-xl text-center font-bold text-[#5A9BD6]">{text}</h3>
      <p className="text-center text-gray-500">{desc}</p>
    </div>
  );
}
