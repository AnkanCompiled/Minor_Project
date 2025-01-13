import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home.png";

export default function NavbarComponent() {
  return (
    <header className="flex gap-1 w-screen py-4 px-2 font-bold text-2xl text-[#5A9BD6] shadow-lg">
      <NavLink to="/">
        <img src={homeIcon} className="h-8 w-8" alt="Home" />
      </NavLink>
      <p>Personality by Handwriting</p>
    </header>
  );
}
