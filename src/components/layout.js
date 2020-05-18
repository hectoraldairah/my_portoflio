import React from "react"
import { Link } from "gatsby"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
const Layout = ({ location, title, children }) => {
  return (
    <>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
