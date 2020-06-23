import React, { useEffect } from "react";
import Layout from "../components/layout";
import Anime from "animejs";
import { Waypoint } from "react-waypoint";

const Projects = [
  {
    url:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    postTitle: "Awesome Post title",
    postDescription: "Awesome long project description with very long words",
  },
  {
    url:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80",
    postTitle: "Awesome Post title",
    postDescription: "Awesome long project description with very long words",
  },
];

const Work = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="bg-gray-100 pb-10">
        <div className="pl-10 pt-20 md:pl-20 md:pt-24 lg:pl-48 lg:pt-24">
          <p className="text-base md:text-xl font-light">{`Hello friend. I'm `}</p>
          <h1 className="font-extrabold text-5xl md:text-6xl md:w-4/5 lg:w-2/3">
            Hector - UI Developer based on Mexico City
          </h1>
        </div>
        <div className="pt-16 px-10 md:px-1 lg:pt-24 lg:pr-56 items-end flex flex-col">
          <p className="text-lg md:text-xl md:w-4/5 lg:w-1/2 font-light">
            I am currently working as a web UI developer on Globant. I love to
            create clean and useful user interfaces for great products. Very
            interested in UX and data visualization
          </p>
          <p className="underline--magical mt-10 md:mt-20 lg:ml-40 cursor-pointer font-extrabold  self-center text-xl">
            My projects
          </p>
        </div>
      </div>
      <section className="mt-20 px-3 md:px-10">
        {Projects.map((props, index) => {
          return <WorkProjects index={index} {...props} />;
        })}
      </section>
    </Layout>
  );
};

const WorkProjects = ({ url, postTitle, postDescription, index }) => {
  function showProjects() {
    let timeline = Anime.timeline({
      targets: `#project-${index}`,
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      delay: 100,
      easing: "easeInQuad",
    }).add({
      targets: `#project-description-${index}`,
      opacity: [0, 1],
      translateY: [100, 0],
      delay: 100,
      easing: "easeInQuad",
    });
  }

  return (
    <article
      className={`flex flex-col py-5 lg:py-20 ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <Waypoint onEnter={() => showProjects()}>
        <div
          id={`project-${index}`}
          className="relative w-full bg-red-500 pb-1/2 md:pb-1/3 lg:pb-5/11"
        >
          <img className="absolute h-full w-full object-cover" src={url} />
        </div>
      </Waypoint>
      <div
        id={`project-description-${index}`}
        className="p-3 md:p-10"
        style={{ overflowWrap: "break-word" }}
      >
        <h1 className="text-xl md:text-2xl font-extrabold">{postTitle}</h1>
        <p className="text-base mt-3 font-thin mb-10">{postDescription}</p>
        <a className="underline--magical font-extrabold mt-10 text-sm">
          See case study
        </a>
      </div>
    </article>
  );
};
export default Work;
