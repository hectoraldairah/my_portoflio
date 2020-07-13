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
    postDescription:
      "Awesome long project description with very long words. Maybe more words that this",
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
      translateY: [20, 0],
      duration: 250,
      delay: 500,
      easing: "easeInQuad",
    });

    anime.add({
      targets: ["#im"],
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 250,
      delay: 250,
      easing: "easeInQuad",
    });

    anime.add({
      targets: ["#cta"],
      opacity: [0, 1],
      translateY: [20, 0],
      duration: 250,
      delay: 250,
      easing: "easeInQuad",
    });
  }, []);
  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="Work" />
      <div className="bg-white h-full py-10  lg:pt-1 lg:pb-20">
        <div className="bg-white mx-1 mt-1 px-3 py-3 lg:mx-10  lg:mt-16 lg:px-4 lg:py-10">
          <p
            id="hello"
            className="font-light tracking-wider  text-lg opacity-0"
          >{`Hello friend. I'm Hector`}</p>
          <h1
            id="im"
            className="text-4xl font-extrabold text-black opacity-0 md:text-5xl lg:text-6xl lg:tracking-wide"
          >
            {`I'm a front-end developer that loves design clean and useful interfaces for great products`}
            <span className="text-xs lg:text-base">{`■`}</span>
          </h1>
          <nav id="cta" className="flex items-end py-2 mt-5 opacity-0">
            <h4 className="text-bold text-lg text-black underline--magical mr-1">
              Check my work
            </h4>
            <span>or</span>
            <h4 className="text-bold text-lg text-black underline--magical ml-1">
              <Link to="about">Read about me</Link>
            </h4>
          </nav>
        </div>
      </div>
      <section className="mt-20 px-4 md:px-16">
        <div className="py-10 md:py-5">
          <p className="text-base uppercase tracking-widest text-lead font-normal">
            Selected Projects
          </p>
          <p className="font-extrabold text-5xl lg:text-6xl text-black">
            Case Studies ─
          </p>
        </div>
        {Projects.map((props, index) => {
          return <WorkProjects key={index} index={index} {...props} />;
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
        duration: 500,
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

  const isPair = index % 2 == 0;

  return (
    <Waypoint onEnter={() => showProjects()}>
      <article
        className={`flex flex-col py-5 md:py-10 ${
          isPair ? "md:flex-row" : "md:flex-row-reverse"
        } lg:py-20`}
      >
        <div
          id={`project-${index}`}
          className={`relative w-full pb-1/2 md:pb-1/3 lg:pb-5/12`}
        >
          <p className="font-extrabold text-2xl text-black pb-2">{`0${index +
            1}`}</p>
          <img className="absolute h-full w-full object-cover" src={url} />
        </div>
        <div
          id={`project-description-${index}`}
          className={`flex flex-col pt-10 mt-5 md:mt-1 md:px-10 lg:px-0  ${
            isPair ? "md:w-1/2 md:items-end" : "md:w-3/5 md:items-start"
          }`}
          style={{ overflowWrap: "break-word" }}
        >
          <div className={`${isPair ? "text-right" : "text-left"} px-2`}>
            <h1 className="text-xl text-black font-extrabold md:text-2xl lg:text-4xl">
              {postTitle}
            </h1>
            <p className="text-lead text-base mt-5">{postDescription}</p>
            <div className="block mt-10 font-extrabold text-lg">
              <Link className=" underline--magical">View Case Study</Link>
            </div>
          </div>
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
