import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div>
    <NavLink>Home</NavLink>
    <NavLink>Movies</NavLink>
    <NavLink>Directors</NavLink>
    <NavLink>Actors</NavLink>
  </div>;
}

export default NavBar;
