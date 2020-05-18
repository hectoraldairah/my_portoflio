import React from "react"
import { Link } from "gatsby"

interface Props {
  location: {
    pathname: string
  }
}

const Header: React.FC<Props> = ({ location }) => {
  const pathname = location.pathname.replace(/[/]/g, "")
  return (
    <header className="flex justify-end items-baseline px-10 py-6">
      <h5 className="font-extrabold mr-auto">Hector Aguilar</h5>
      <nav>
        <ul>
          <li className="inline-block px-6">
            <Link
              to="/work"
              className={`shadow-none ${pathname === "work" &&
                "font-extrabold"}`}
            >
              work
            </Link>
          </li>
          <li className="inline-block px-6">
            <Link to="/blog" className="shadow-none">blog</Link>
          </li>
          <li
            className={`inline-block px-6 ${pathname === "about" &&
              "font-extrabold"}`}
          >
            <Link to="/about" className="shadow-none">
              about me
            </Link>
          </li>
          <li className="inline-block px-6">
            <Link to="/resume" className="shadow-none">resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
