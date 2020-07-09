import React, { useEffect } from "react";
import { graphql, Link } from "gatsby";
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

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  useEffect(() => {
    let anime = Anime.timeline({
      easing: "easeOutExpo",
      duration: 1000,
    });

    anime.add({
      targets: ["#hello"],
      opacity: [0, 1],
      duration: 250,
      delay: 500,
      easing: "easeInQuad",
    });

    anime.add({
      targets: ["#im"],
      opacity: [0, 1],
      duration: 250,
      delay: 250,
      easing: "easeInQuad",
    });
  }, []);
  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="Work" />
      <div className="bg-gray-100 h-full py-10 px-4 lg:pt-1 lg:pb-20 ">
        <div className="bg-white mx-1 mt-1 px-3 py-3 lg:mx-10  lg:mt-16 lg:px-10 lg:py-10">
          <p
            id="hello"
            className="font-regular text-lead text-lg opacity-0"
          >{`Hello friend. I'm Hector`}</p>
          <h1
            id="im"
            className="text-4xl font-extrabold text-black opacity-0 md:text-5xl lg:text-6xl"
          >{`I'm a front-end developer that loves design clean and useful interfaces for great products`}</h1>
          <nav className="flex">
            <h4 className="text-bold text-xl text-black underline--magical">
              Check my work
            </h4>
            <span>or</span>
            <h4 className="text-bold text-xl text-black underline--magical">
              <Link to="about">Read about me</Link>
            </h4>
          </nav>
        </div>
      </div>
      <section className="mt-20 px-4 md:px-12">
        <div className="py-10 md:py-3">
          <p className="text-base uppercase tracking-widest text-lead font-normal">
            Selected Projects
          </p>
          <p className="font-extrabold text-5xl lg:text-6xl text-black">
            Case Studies ─
          </p>
        </div>
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
    <Waypoint onEnter={() => showProjects()}>
      <article
        className={`flex flex-col py-5 lg:py-20 ${
          index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        }`}
      >
        <div
          id={`project-${index}`}
          className="relative w-full bg-red-500 pb-1/2 md:pb-1/3 lg:pb-5/11"
        >
          <img className="absolute h-full w-full object-cover" src={url} />
        </div>
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
    </Waypoint>
  );
};
export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
