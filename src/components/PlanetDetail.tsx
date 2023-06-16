import { Planet } from "../types";
type PlanetDetailProps = {
  currentPlanet: Planet | null;
  view: string;
};

export default function PlanetDetail({
  currentPlanet,
  view,
}: PlanetDetailProps) {
  console.log(currentPlanet);

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
      <img className="planet-detail__img" src={`.${imageUrl}`} />
      <h1 className="planet-detail__name">{currentPlanet?.name}</h1>
      <p className="planet-detail__content">{textObj?.content}</p>
      <small className="planet-detail__source">
        Source:{" "}
        <a className="planet-detail__source--link" href={textObj?.source}>
          Wikipedia
        </a>
      </small>
    </section>
  );
}
