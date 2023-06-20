import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Planet as PlanetType } from "./types";
import Layout from "./components/Layout";
import MobileMenu from "./components/MobileMenu";
import Planet from "./pages/Planet";
import Overview from "./components/Overview";
import Structure from "./components/Structure";
import Surface from "./components/Surface";

export default function App() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [planets, setPlanets] = useState<PlanetType[] | null>(null);

  useEffect(() => {
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        setPlanets(data);
      });
  }, []);

  return (
    <div className="App">
      {showMobileMenu && (
        <MobileMenu setShowMobileMenu={setShowMobileMenu} planets={planets} />
      )}
      <Routes>
        <Route
          element={
            <Layout planets={planets} setShowMobileMenu={setShowMobileMenu} />
          }
        >
          <Route path="/" element={<Planet />}>
            <Route index element={<Overview />} />
          </Route>
          <Route path=":planet" element={<Planet />}>
            <Route index element={<Overview />} />
            <Route path="structure" element={<Structure />} />
            <Route path="surface" element={<Surface />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
