import { NavLink, useParams } from "react-router-dom";

export default function PlanetSlider() {
  let { planet } = useParams();
  if (!planet) planet = "mercury";
  return (
    <nav className="planet-slider">
      <NavLink
        className={({ isActive }) =>
          isActive ? "slider-link__active" : "slider-link"
        }
        to={`/${planet}`}
        end
      >
        Overview
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "slider-link__active" : "slider-link"
        }
        to={`/${planet}/structure`}
      >
        Structure
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "slider-link__active" : "slider-link"
        }
        to={`/${planet}/surface`}
      >
        Surface
      </NavLink>
    </nav>
  );
}
