import { Dispatch, SetStateAction } from "react";
import { Planet as PlanetType } from "../types";
import { Link } from "react-router-dom";

interface IMobileMenuProps {
  planets: PlanetType[] | null;
  setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({
  planets,
  setShowMobileMenu,
}: IMobileMenuProps) {
  return (
    <nav className="mobile-menu">
      {planets?.map((planet) => (
        <Link
          to={`/${planet.name.toLowerCase()}`}
          onClick={() => setShowMobileMenu(false)}
          className="mobile-menu__link"
          key={planet.name}
          state={{ planet }}
        >
          <div className="mobile-menu__item-container">
            <div className="mobile-menu__item">
              <div
                className={`mobile-menu__item__bullet ${planet.name.toLowerCase()}`}
              ></div>
              <div className="mobile-menu__item__name">{planet.name}</div>
              <img
                src="/assets/icon-chevron.svg"
                className="mobile-menu__item__arrow"
              />
            </div>
          </div>
        </Link>
      ))}
    </nav>
  );
}
