import React from "react";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/home.png";

export default function NavbarComponent() {
  return (
    <header className="grid grid-cols-2 w-screen px-2 font-bold text-2xl text-[#5A9BD6] shadow-lg">
      <NavLink className={"flex"} to="/">
        <img src={homeIcon} className="h-8 w-8" alt="Home" />
        Home
      </NavLink>
    </header>
  );
}
