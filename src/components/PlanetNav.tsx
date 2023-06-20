import { Planet as PlanetType } from "../types";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

type PlanetNavProps = {
  planets: PlanetType[] | null;
  isMobileMenu: boolean;
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
};

export default function PlanetNav({
  planets,
  isMobileMenu,
  setShowMobileMenu,
}: PlanetNavProps) {
  const cssClass = isMobileMenu ? "mobile-menu" : "planet-nav";

  return (
    <>
      <nav className={cssClass}>
        {planets?.map((planet) => (
          <Link
            to={`/${planet.name.toLowerCase()}`}
            className={`${cssClass}__link`}
            onClick={() => (isMobileMenu ? setShowMobileMenu(false) : null)}
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
