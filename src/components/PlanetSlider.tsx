import { NavLink, useParams } from "react-router-dom";

import { getPlanetColor } from "../utils";

export default function PlanetSlider() {
  let { planet } = useParams();
  if (!planet) planet = "mercury";

  return (
    <nav className="slider">
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderBottom: `4px solid ${getPlanetColor(planet)}`,
              }
            : { color: "white", opacity: 0.5 }
        }
        className="slider__link"
        to={`/${planet}`}
        end
      >
        Overview
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderBottom: `4px solid ${getPlanetColor(planet)}`,
              }
            : { color: "white", opacity: 0.5 }
        }
        className="slider__link"
        to={`/${planet}/structure`}
      >
        Structure
      </NavLink>
      <NavLink
        style={({ isActive }) =>
          isActive
            ? {
                color: "white",
                borderBottom: `4px solid ${getPlanetColor(planet)}`,
              }
            : { color: "white", opacity: 0.5 }
        }
        className="slider__link"
        to={`/${planet}/surface`}
      >
        Surface
      </NavLink>
    </nav>
  );
}
