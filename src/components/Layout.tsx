import { Planet } from "../types";

import { Dispatch, SetStateAction } from "react";
import Header from "../components/Header";
import PlanetView from "../components/PlanetView";
import PlanetsNav from "../components/PlanetsNav";
import { Outlet } from "react-router-dom";

interface IHeaderProps {
  planets: Planet[] | null;
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}
export default function Layout({ planets, setShowMobileMenu }: IHeaderProps) {
  return (
    <>
      <Header setShowMobileMenu={setShowMobileMenu} />
      <PlanetView tabletSlider={false} />
      <PlanetsNav planets={planets} isMobileMenu={false} />
      <Outlet />
    </>
  );
}
