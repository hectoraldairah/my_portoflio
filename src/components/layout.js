import React from 'react';
import Header from '../components/Header/Header.tsx';
import Footer from '../components/Footer/Footer.tsx';
import '../styles/layout.css';
import { motion } from 'framer-motion';

const Layout = ({ location, title, children }) => {
  return (
    <>
      <motion.div
        initial={{ height: '100vh' }}
        animate={{ height: '0px' }}
        transition={{ duration: 0.6, ease: [0.87, 0, 0.13, 1] }}
        className="bg-black w-full z-50 absolute"
      ></motion.div>
      <Header location={location} />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
