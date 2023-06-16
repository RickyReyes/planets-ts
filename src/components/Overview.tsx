import { usePlanet } from "../hooks/usePlanet";
import PlanetDetail from "./PlanetDetail";
export default function Overview() {
  const { currentPlanet } = usePlanet();
  return <PlanetDetail currentPlanet={currentPlanet} view="overview" />;
}
