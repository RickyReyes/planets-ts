import { Dispatch, SetStateAction } from "react";

interface IHeaderProps {
    setShowMobileMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setShowMobileMenu }: IHeaderProps) {
    return (
        <header className="header">
            <strong className="header__logo">The Planets</strong>
            <img
                src="/assets/icon-hamburger.svg"
                className="header__hamburger"
                onClick={() => setShowMobileMenu((prev) => !prev)}
            />
        </header>
    );
}
