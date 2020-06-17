import React from "react";
import Header from "../components/Header/Header.tsx";
import Footer from "../components/Footer/Footer.tsx";
import "../styles/layout.css";

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
