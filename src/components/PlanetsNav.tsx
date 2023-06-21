/* The PlanetNav component is used in the mobile menu, and also in the tablet design as the planet navigation under the header. 

The two instances of the component look different but have the same functionality. The mobile menu uses the CSS class "mobile-menu" while the other uses "planet-nav".
*/

import { Planet as PlanetType } from "../types";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

type PlanetsNavProps = {
  planets: PlanetType[] | null;
  isMobileMenu: boolean;
  setShowMobileMenu?: Dispatch<SetStateAction<boolean>>;
};

export default function PlanetsNav({
  planets,
  isMobileMenu,
  setShowMobileMenu,
}: PlanetsNavProps) {
  const cssClass = isMobileMenu ? "mobile-menu" : "planets-nav";

  return (
    <>
      <nav className={cssClass}>
        {planets?.map((planet) => (
          <Link
            to={`/${planet.name.toLowerCase()}`}
            className={`${cssClass}__link`}
            onClick={() =>
              isMobileMenu && setShowMobileMenu
                ? setShowMobileMenu(false)
                : null
            }
            key={planet.name}
            state={{ planet }}
          >
            <div className={`${cssClass}__item-container`}>
              <div className={`${cssClass}__item`}>
                <div
                  className={`${cssClass}__item__bullet ${planet.name.toLowerCase()} `}
                ></div>
                <div className={`${cssClass}__item__name`}>{planet.name}</div>
                {cssClass === "mobile-menu" && (
                  <img
                    src="/assets/icon-chevron.svg"
                    className={`${cssClass}__item__chevron`}
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </nav>
      <hr className={`${cssClass}__hr`} />
    </>
  );
}
