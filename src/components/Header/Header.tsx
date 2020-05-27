import React, { useState } from "react";
import { Link } from "gatsby";
import resume from "../../utils/resume.pdf";

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
  const pathname = location.pathname.replace(/[/]/g, "");

  console.log(showMenu);

  return (
    <div className="mx-auto px-10 py-6 z-50 bg-white fixed w-full">
      <nav className="flex-row md:justify-between">
        <div className="flex flex-row justify-between items-baseline">
          <h5 className="font-extrabold mr-auto">Hector Aguilar</h5>
          <p
            onClick={() => setMenu(!showMenu)}
            className="md:hidden font-extrabold pointer"
          >
            menu
          </p>
        </div>
        <ul
          className={`${showMenu ? "block h-screen" : "hidden"} ${showMenu &&
            "flex-col items-center  justify-center text-3xl"}  flex md:flex md:flex-row`}
        >
          <NavbarItem showMenu={showMenu} pathname={pathname} pageName="blog" />
          <NavbarItem showMenu={showMenu} pathname={pathname} pageName="work" />
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
    <li className={`${showMenu && "block"} md:inline-block px-6`}>
      <Link
        to={`/${pageName}`}
        className={`shadow-none ${pathname === pageName &&
          "font-extrabold"} ${pathname !== pageName &&
          "transition duration-200 ease-in-out hover:text-gray-500"}`}
      >
        {pageName}
      </Link>
    </li>
  );
};

const ResumeItem: React.FC = () => (
  <li className="inline-block px-6 transition duration-200 ease-in-out hover:text-gray-500">
    <a href={resume} target="_blank" className="shadow-none">
      resume
    </a>
  </li>
);

export default Header;
