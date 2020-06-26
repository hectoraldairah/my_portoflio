import React, { useState } from "react";
import { Link } from "gatsby";
import resume from "../../utils/resume.pdf";
import getWindowSize from "./getWindowSize";
import styles from "./Icon.module.css";

interface Props {
  location: {
    pathname: string;
  };
}
interface NavItem {
  pageName: string;
  pathname: string;
  showMenu: boolean;
}

const Header: React.FC<Props> = ({ location }) => {
  const [showMenu, setMenu] = useState<boolean>(false);
  const windowSize = getWindowSize();
  const pathname = location.pathname.replace(/[/]/g, "");

  const isMobile = windowSize >= 768 ? "flex" : "flex-row";

  return (
    <div className="mx-auto px-10 py-5 z-50 bg-white fixed w-full shadow-sm header">
      <nav
        className={`${isMobile} flex-row md:flex justify-between items-center`}
      >
        <div className="flex flex-row justify-between items-baseline">
          <h5 className="font-extrabold mr-auto mt-0">
            <Link to="/work">Hector Aguilar</Link>
          </h5>
          <div
            onClick={() => setMenu(!showMenu)}
            className={`md:hidden cursor-pointer font-extrabold pointer ${
              styles.navIcon
            } ${showMenu ? styles.navOpen : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul
          className={`${
            showMenu && windowSize < 768
              ? "block h-screen flex-col items-center justify-center text-3xl"
              : "hidden"
          } ${
            showMenu && windowSize < 768 ? styles.openMenu : ""
          } flex md:flex md:flex-row`}
        >
          <NavbarItem showMenu={showMenu} pathname={pathname} pageName="work" />
          <NavbarItem showMenu={showMenu} pathname={pathname} pageName="blog" />
          <NavbarItem
            showMenu={showMenu}
            pathname={pathname}
            pageName="about"
          />
          <ResumeItem />
        </ul>
      </nav>
    </div>
  );
};

const NavbarItem: React.FC<NavItem> = ({ pageName, pathname, showMenu }) => {
  return (
    <li className={`${showMenu && "block"} md:inline-block px-6 m-0`}>
      <Link
        to={`/${pageName}`}
        className={`shadow-none ${pathname === pageName &&
          "font-extrabold"} ${pathname !== pageName &&
          "transition duration-200 text-black ease-in-out hover:text-gray-500"}`}
      >
        {pageName}
      </Link>
    </li>
  );
};

const ResumeItem: React.FC = () => (
  <li className="inline-block px-6 transition duration-200 ease-in-out hover:text-gray-500 m-0">
    <a href={resume} target="_blank" className="shadow-none">
      resume
    </a>
  </li>
);

export default Header;
