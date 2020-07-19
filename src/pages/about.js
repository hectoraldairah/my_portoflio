import React, { useEffect } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import profileImage from "../images/me.png";
import styles from "../styles/about.module.css";
import resume from "../utils/resume.pdf";
import Anime from "animejs";
import SEO from "../components/seo";

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;
  let played = false;
  useEffect(() => {
    let anime = Anime.timeline({
      easing: "easeOutCirc",
      duration: 1000,
    });

    anime.add({
      targets: ["#about", "#description"],
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      delay: 500,
      easing: "easeOutCirc",
    });

    anime.add({
      targets: "#profile",
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 500,
      delay: 500,
      easing: "easeOutCirc",
    });

    anime.add({
      targets: "#txt1",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 500,
      delay: 300,
      easing: "easeOutCirc",
    });
    anime.add({
      targets: "#txt2",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 500,
      delay: 300,
      easing: "easeOutCirc",
    });
    anime.add({
      targets: "#txt3",
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 500,
      delay: 300,
      easing: "easeOutCirc",
    });
  }, []);

  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="About me" />
      <div className="bg-white h-full py-10 lg:pt-1 lg:pb-20">
        <div
          className={`bg-white py-5 px-5 lg:px-10 lg:mx-10 lg:py-10 lg:mt-16 ${styles.aboutContainer}`}
        >
          <div className={`${styles.titleContainer} relative`}>
            <p
              id="about"
              className="absolute -mt-8 z-10 ml-3 bg-white border-2 border-black p-2  font-normal text-base text-black opacity-0 tracking-wider"
            >
              About me
            </p>
            <h1
              id="description"
              className="bg-black font-extrabold text-white text-4xl p-2 lg:text-6xl opacity-0"
            >{`I'm a junior developer of life`}</h1>
          </div>
          <div className={`${styles.descriptionContainer}`}>
            <div>
              <p id="txt1" className="text-lg font-normal text-black opacity-0">
                Hi there! I'm Hector- a front-end developer based on Mexico City
                that makes user interfaces that combine user-centered design and
                visual aesthetics. I'm always in the process of learning
                something new and taking new challenges.
              </p>
              <p id="txt2" className="text-lg font-normal text-black mt-10">
                In my free time, I like to learn about languages (Esperanto is a
                funny language) and write about my learning process. Also, I
                love everything related to art, science, gastronomy, and web
                culture.
              </p>

              <p id="txt3" className="text-lg font-normal text-black mt-10">
                Find me on{" "}
                <span className="underline--magical font-bold text-black">
                  Instragram
                </span>
                ,{` `}
                <span className="underline--magical font-bold text-black">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/hectoraldairaguilar/"
                  >
                    LinkedIn
                  </a>
                </span>
                , or{` `}
                <span className="underline--magical font-bold text-black">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/bitbyte_"
                  >
                    Twitter
                  </a>
                </span>
                . You can also send me an old-fashioned{" "}
                <span className="text-black underline--magical font-bold">
                  <a href="mailto:hectoraldairah@gmail.com">email</a>
                </span>
                .
              </p>
            </div>
          </div>
          <div className={`${styles.imageContainer}`}>
            <div className="flex justify-end">
              <img src={profileImage}></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

About.propTypes = {
  location: PropTypes.object,
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
