import { usePlanet } from "../hooks/usePlanet";

export default function Overview() {
  const { currentPlanet } = usePlanet();
  return (
    <section className="overview">
      <img className="overview__img" src={`.${currentPlanet?.images.planet}`} />
      <h1 className="overview__name">{currentPlanet?.name}</h1>
      <p className="overview__content">{currentPlanet?.overview.content}</p>
      <small className="overview__source">
        Source:{" "}
        <a
          className="overview__source--link"
          href={currentPlanet?.overview.source}
        >
          Wikipedia
        </a>
      </small>
    </section>
  );
}
