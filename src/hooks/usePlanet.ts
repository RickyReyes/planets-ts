// From React Router docs:
// If you're using TypeScript, we recommend the parent component provide a custom hook for accessing the context value. This makes it easier for consumers to get nice typings, control consumers, and know who's consuming the context value. Here's a more realistic example:

import { useOutletContext } from "react-router-dom";
import { Planet } from "../types";

type ContextType = { currentPlanet: Planet | null };

export function usePlanet() {
  return useOutletContext<ContextType>();
}
