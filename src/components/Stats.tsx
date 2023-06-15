import { Planet } from "../types";

interface IStatsProps {
  currentPlanet: Planet | null;
}

export default function Stats({ currentPlanet }: IStatsProps) {
  return (
    <ul className="stats">
      <li className="stat">
        <h2 className="stat--name">Rotation Time</h2>
        <div className="stat--number">{currentPlanet?.rotation}</div>
      </li>
      <li className="stat">
        <h2 className="stat--name">Revolution Time</h2>
        <div className="stat--number">{currentPlanet?.revolution}</div>
      </li>
      <li className="stat">
        <h2 className="stat--name">Radius</h2>
        <div className="stat--number">{currentPlanet?.radius}</div>
      </li>
      <li className="stat">
        <h2 className="stat--name">Average Temp.</h2>
        <div className="stat--number">{currentPlanet?.temperature}</div>
      </li>
    </ul>
  );
}
