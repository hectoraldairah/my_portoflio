import React from "react";
import Layout from "../components/layout";
import Anime from "react-anime";

let animeProps = {
  opacity: [0,1],
  //translateY: [-100,0],
  duration: 2500,
  delay: (el,i) => i * 1500,
}


const Work = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="h-screen bg-gray-100">
        <Anime {...animeProps} >
          <div className="pl-10 pt-20 md:pl-20 md:pt-24 lg:pl-48 lg:pt-32">
            <p className="text-base md:text-xl font-light">Hello Friend. I'm</p>
            <h1 className="font-extrabold text-5xl md:text-6xl md:w-4/5 lg:w-2/3">
              Hector - UI Developer based on Mexico City
            </h1>
          </div>
        </Anime>
        <div className="pt-16 px-10 md:px-1 lg:pt-24 lg:pr-56 items-end flex flex-col">
          <p className="text-lg md:text-xl md:w-4/5 lg:w-1/2 font-light">
            Currently working as a web UI developer on Globant. I love to create
            clean and useful user interfaces for great products. Very interested
            on UX and data visualization
          </p>
          <p className="underline--magical mt-10 md:mt-20 lg:ml-40 cursor-pointer font-extrabold  self-center text-xl">
            Know me better
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
