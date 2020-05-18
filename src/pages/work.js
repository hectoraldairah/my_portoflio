import React from "react"
import Layout from "../components/layout"

const Work = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="h-screen bg-gray-100">
        <div className="pl-48 pt-32">
          <p className="text-xl font-light">Hello Friend. I'm</p>
          <h1 className="font-extrabold text-6xl w-2/3">
            Hector - UI Developer based on Mexico City
          </h1>
        </div>
        <div className="pt-24 pr-56 items-end flex flex-col">
          <p className="text-xl w-1/2 font-light">
            Currently working as a web UI developer on Globant. I love to create
            clean and useful user interfaces for great products. Very interested
            on UX and data visualization
          </p>
          <p className="mt-20 ml-40 cursor-pointer font-extrabold underline self-center text-xl">
            Know me better
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Work
