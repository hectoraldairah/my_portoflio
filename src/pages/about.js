import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import profileImage from '../images/me.png';
import styles from '../styles/about.module.css';
import resume from '../utils/resume.pdf';
import SEO from '../components/seo';
import { motion } from 'framer-motion';

const About = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="About me" />
      <div className="bg-white h-full py-10 lg:pt-1 lg:pb-20">
        <div
          className={`bg-white py-5 px-5 lg:px-10 lg:mx-10 lg:py-10 lg:mt-16 ${styles.aboutContainer}`}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className={`${styles.titleContainer} relative`}
          >
            <p className="absolute -mt-8 z-10 ml-3 bg-white border-2 border-black p-2  font-normal text-base text-black  tracking-wider">
              About me
            </p>
            <h1 className="bg-black font-extrabold text-white text-4xl p-3 lg:text-6xl ">{`I'm a junior developer of life`}</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className={`${styles.descriptionContainer}`}
          >
            <div>
              <p id="txt1" className="text-lg font-normal text-black ">
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
                Find me on{' '}
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
                . You can also send me an old-fashioned{' '}
                <span className="text-black underline--magical font-bold">
                  <a href="mailto:hectoraldairah@gmail.com">email</a>
                </span>
                .
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className={`${styles.imageContainer}`}
          >
            <div className="flex justify-end">
              <img src={profileImage}></img>
            </div>
          </motion.div>
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
