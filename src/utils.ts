/* getPlanetColor takes a planet name and returns a hex code */

export function getPlanetColor(planet: string | undefined) {
  switch (planet) {
    case "mercury":
      return "#def4fc";
      break;
    case "venus":
      return "#f7cc7f";
      break;
    case "earth":
      return "#545bfe";
      break;
    case "mars":
      return "#ff6a45";
      break;
    case "jupiter":
      return "#ecad7a";
      break;
    case "saturn":
      return "#fccb6b";
      break;
    case "uranus":
      return "#65f0d5";
      break;
    case "neptune":
      return "#497efa";
      break;
    default:
      return "white";
  }
}
