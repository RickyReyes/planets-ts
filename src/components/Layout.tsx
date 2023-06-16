import { Dispatch, SetStateAction } from "react";
import Header from "../components/Header";
import PlanetSlider from "../components/PlanetSlider";
import { Outlet } from "react-router-dom";

interface IHeaderProps {
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}
export default function Layout({ setShowMobileMenu }: IHeaderProps) {
  return (
    <>
      <Header setShowMobileMenu={setShowMobileMenu} />
      <PlanetSlider />
      <Outlet />
    </>
  );
}
