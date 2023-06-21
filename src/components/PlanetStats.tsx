import { Planet } from "../types";

type PlanetStatsProps = {
  currentPlanet: Planet | null;
};

export default function PlanetStats({ currentPlanet }: PlanetStatsProps) {
  return (
    <ul className="planet-stats">
      <li className="planet-stat">
        <h2 className="planet-stat--name">Rotation Time</h2>
        <div className="planet-stat--number">{currentPlanet?.rotation}</div>
      </li>
      <li className="planet-stat">
        <h2 className="planet-stat--name">Revolution Time</h2>
        <div className="planet-stat--number">{currentPlanet?.revolution}</div>
      </li>
      <li className="planet-stat">
        <h2 className="planet-stat--name">Radius</h2>
        <div className="planet-stat--number">{currentPlanet?.radius}</div>
      </li>
      <li className="planet-stat">
        <h2 className="planet-stat--name">Average Temp.</h2>
        <div className="planet-stat--number">{currentPlanet?.temperature}</div>
      </li>
    </ul>
  );
}
