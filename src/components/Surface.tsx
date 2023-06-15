import { Planet as PlanetType } from "../types";

interface ISurfaceProps {
  currentPlanet: PlanetType | null;
}

export default function Surface({ currentPlanet }: ISurfaceProps) {
  return <div>{currentPlanet?.name}</div>;
}
