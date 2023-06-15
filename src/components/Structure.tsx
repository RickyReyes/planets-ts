import { Planet as PlanetType } from "../types";

interface IStructureProps {
  currentPlanet: PlanetType | null;
}

export default function Structure({ currentPlanet }: IStructureProps) {
  return <div>{currentPlanet?.name}</div>;
}
