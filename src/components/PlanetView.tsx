import { NavLink, useParams } from "react-router-dom";

import { getPlanetColor } from "../utils";

type PlanetSliderProps = {
  tabletSlider: boolean;
};

export default function PlanetView({ tabletSlider }: PlanetSliderProps) {
  let { planet } = useParams();
  if (!planet) planet = "mercury";

  const activeStyles = tabletSlider
    ? {
        backgroundColor: `${getPlanetColor(planet)}`,
        color: "white",
      }
    : {
        color: "white",
        borderBottom: `4px solid ${getPlanetColor(planet)}`,
      };
  const inactiveStyles = { color: "white", opacity: 0.5 };

  const cssClass = tabletSlider ? "tablet-slider" : "mobile-slider";
  return (
    <nav className={cssClass}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        className={`${cssClass}__link`}
        to={`/${planet}`}
        end
      >
        {cssClass == "tablet-slider" && (
          <span className="tablet-slider__num">01</span>
        )}
        Overview
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        className={`${cssClass}__link`}
        to={`/${planet}/structure`}
      >
        {cssClass == "tablet-slider" && (
          <span className="tablet-slider__num">02</span>
        )}
        Structure
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        className={`${cssClass}__link`}
        to={`/${planet}/surface`}
      >
        {cssClass == "tablet-slider" && (
          <span className="tablet-slider__num">03</span>
        )}
        Surface
      </NavLink>
    </nav>
  );
}
