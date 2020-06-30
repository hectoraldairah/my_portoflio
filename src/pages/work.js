import React, { useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Waypoint } from "react-waypoint";
import SEO from "../components/seo";
import Anime from "animejs";

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

const Work = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="Work" />
      <div className="bg-gray-100 pb-10">
        <div className="py-10 px-5 md:py-20 md:px-10 lg:py-24 lg:px-20">
          <p className="text-base text-black md:text-xl font-light">{`Hello friend. I'm Hector`}</p>
          <h1 className="font-extrabold text-black text-2xl md:text-6xl">
            I'm a front-end developer that loves design clean and useful
            interfaces for great products
          </h1>
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
  let played = false;

  function showProjects() {
    if (!played) {
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
    played = true;
    return;
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

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
