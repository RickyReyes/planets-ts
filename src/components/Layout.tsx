import { Planet } from "../types";

import { Dispatch, SetStateAction } from "react";
import Header from "../components/Header";
import PlanetSlider from "../components/PlanetSlider";
import PlanetNav from "../components/PlanetNav";
import { Outlet } from "react-router-dom";

interface IHeaderProps {
  planets: Planet[] | null;
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}
export default function Layout({ planets, setShowMobileMenu }: IHeaderProps) {
  return (
    <>
      <Header setShowMobileMenu={setShowMobileMenu} />
      <PlanetSlider />
      <PlanetNav planets={planets} isMobileMenu={false} />
      <Outlet />
    </>
  );
}
