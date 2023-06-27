import { NavLink, useParams } from "react-router-dom";

import { getPlanetColor } from "../utils";

type PlanetSliderProps = {
  tabletSlider: boolean;
};

export default function PlanetView({ tabletSlider }: PlanetSliderProps) {
  let { planet } = useParams();
  if (!planet) planet = "mercury";

  const activeStyles = {
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
        {cssClass == "tablet-slider" && "01 "}Overview
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        className={`${cssClass}__link`}
        to={`/${planet}/structure`}
      >
        {cssClass == "tablet-slider" && "02 "}Structure
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
        className={`${cssClass}__link`}
        to={`/${planet}/surface`}
      >
        {cssClass == "tablet-slider" && "03 "}Surface
      </NavLink>
    </nav>
  );
}
