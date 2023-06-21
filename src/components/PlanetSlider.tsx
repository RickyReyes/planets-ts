import { NavLink, useParams } from "react-router-dom";

import { getPlanetColor } from "../utils";

export default function PlanetSlider() {
  let { planet } = useParams();
  if (!planet) planet = "mercury";

  const activeStyles = {
    color: "white",
    borderBottom: `4px solid ${getPlanetColor(planet)}`,
  };
  const inactiveStyles = { color: "white", opacity: 0.5 };
  return (
    <nav className="slider">
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        className="slider__link"
        to={`/${planet}`}
        end
      >
        Overview
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        className="slider__link"
        to={`/${planet}/structure`}
      >
        Structure
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        className="slider__link"
        to={`/${planet}/surface`}
      >
        Surface
      </NavLink>
    </nav>
  );
}
