import React from "react";
import { Link } from "gatsby";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header location={location} />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
