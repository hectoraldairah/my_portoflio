import React, { useState } from 'react';
import { Link } from 'gatsby';
import resume from '../../utils/resume.pdf';
import getWindowSize from './getWindowSize';
import styles from './Icon.module.css';
import { motion } from 'framer-motion';

interface Props {
  location: {
    pathname: string;
  };
}
interface NavItem {
  pageName?: string;
  pathname: string;
  showMenu: boolean;
}

const container = {
  hidden: {
    opacity: 0,
    trasition: {
      delay: 2,
    },
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'circIn',
      staggerChildren: 0.2,
      delay: 0.8,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    trasition: {
      delay: 1,
    },
  },
};

const Header: React.FC<Props> = ({ location }) => {
  const [showMenu, setMenu] = useState<boolean>(false);
  const windowSize = getWindowSize();
  const pathname = location.pathname.replace(/[/]/g, '');

  const isMobile = windowSize >= 768 ? 'flex' : 'flex-row';

  return (
    <div className="mx-auto px-10 py-5 z-40 bg-white fixed w-full header">
      <nav
        className={`${isMobile} flex-row md:flex justify-between items-center`}
      >
        <div className="flex flex-row justify-between items-baseline">
          <h5 className="font-extrabold text-black text-base tracking-tight mr-auto mt-0">
            <Link to="/" className="lg:ml-3">
              HECTOR <span className="font-normal">AGUILAR</span>
            </Link>
          </h5>
          <div
            onClick={() => setMenu(!showMenu)}
            className={`md:hidden cursor-pointer font-extrabold pointer ${
              styles.navIcon
            } ${showMenu ? styles.navOpen : ''}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className={`${
            showMenu && windowSize < 768
              ? 'block h-screen  flex-col items-center justify-center text-3xl'
              : 'hidden'
          } ${
            showMenu && windowSize < 768 ? styles.openMenu : ''
          } flex md:flex md:flex-row`}
        >
          <NavbarItem showMenu={showMenu} pathname={pathname} />
          <NavbarItem showMenu={showMenu} pathname={pathname} pageName="blog" />
          <NavbarItem
            showMenu={showMenu}
            pathname={pathname}
            pageName="about"
          />
          <ResumeItem showMenu={showMenu} />
        </motion.ul>
      </nav>
    </div>
  );
};

const NavbarItem: React.FC<NavItem> = ({
  pageName = 'home',
  pathname,
  showMenu,
}) => {
  return (
    <motion.li
      variants={item}
      className={`${showMenu &&
        'block text-4xl mt-5'} text-sm md:inline-block px-6 m-0`}
    >
      <Link
        to={`/${pageName === 'home' ? '' : pageName}`}
        className={`shadow-none ${pathname === pageName &&
          'font-extrabold text-black'} ${pathname !== pageName &&
          'transition duration-200 ease-in-out hover:text-black'} ${pathname ===
          '' &&
          pageName === 'home' &&
          'font-extrabold'} text-gray-700 uppercase tracking-wider `}
      >
        {pageName}
      </Link>
    </motion.li>
  );
};

const ResumeItem: React.FC<{ showMenu: boolean }> = ({ showMenu }) => (
  <motion.li
    variants={item}
    className={`${showMenu &&
      'text-4xl mt-5'} text-sm inline-block px-6 transition duration-200 ease-in-out hover:text-gray-500 m-0`}
  >
    <a
      href={resume}
      target="_blank"
      className="shadow-none uppercase text-gray-700 tracking-wider "
    >
      resume
    </a>
  </motion.li>
);

export default Header;
