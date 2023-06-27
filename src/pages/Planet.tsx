import { useParams, Outlet } from "react-router-dom";
import { Planet as PlanetType } from "../types";
import { useState, useEffect } from "react";
import PlanetStats from "../components/PlanetStats";

export default function Planet() {
  const [currentPlanet, setCurrentPlanet] = useState<PlanetType | null>(null);

  const { planet } = useParams();

  useEffect(() => {
    // Use Mercury as default planet shown (root path)
    const planetString = planet || "mercury";
    fetch("../data.json")
      .then((res) => res.json())
      .then((data) => {
        setCurrentPlanet(
          data.find((p: PlanetType) => p.name.toLowerCase() === planetString)
        );
      });
  }, [planet]);

  if (!currentPlanet) return <h1>Loading...</h1>;
  return (
    <section className="planet">
      <Outlet context={{ currentPlanet }} />
      <PlanetStats currentPlanet={currentPlanet} />
    </section>
  );
}
