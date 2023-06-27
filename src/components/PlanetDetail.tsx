import { Planet } from "../types";
import PlanetView from "./PlanetView";

type PlanetDetailProps = {
  currentPlanet: Planet | null;
  view: string;
};

export default function PlanetDetail({
  currentPlanet,
  view,
}: PlanetDetailProps) {
  const imageUrl =
    view === "overview"
      ? currentPlanet?.images.planet
      : view === "structure"
      ? currentPlanet?.images.internal
      : currentPlanet?.images.geology;

  const textObj =
    view === "overview"
      ? currentPlanet?.overview
      : view === "structure"
      ? currentPlanet?.structure
      : currentPlanet?.geology;

  return (
    <section className="planet-detail">
      <div className="planet-detail__img-container">
        <img className="planet-detail__img" src={`.${imageUrl}`} />
      </div>
      <div className="planet-detail__flex">
        <div className="planet-detail__flex--left">
          <h1 className="planet-detail__name">{currentPlanet?.name}</h1>
          <p className="planet-detail__text">{textObj?.content}</p>
          <small className="planet-detail__source">
            Source:{" "}
            <a className="planet-detail__source--link" href={textObj?.source}>
              Wikipedia
            </a>
          </small>
        </div>
        <div className="planet-detail__flex--right">
          <PlanetView tabletSlider={true} />
        </div>
      </div>
    </section>
  );
}
