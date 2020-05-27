import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import profileImage from "../images/me.png";
import "../styles/about.css";
import resume from "../utils/resume.pdf";

const About = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="h-screen bg-gray-100 flex aboutContainer">
        <div className="pl-48 pt-32 description ">
          <p className="text-xl font-light">about me</p>
          <h1 className="font-extrabold text-6xl w-3/5">
            {"I'm a junior developer of life"}
          </h1>
          <div className="mt-20 w-2/4">
            <p className="font-light text-xl leading-relaxed">
              I’m a front-end developer based on Mexico City making user
              interfaces that combines user centered design and visual
              aesthetics. I’m always in the process of learning something new
              and taking new challenges. I love everything related with design,
              art, science, programming, web culture and food
            </p>
          </div>
          <div className="mt-16">
            <p className="font-light text-xl">
              You can see my{" "}
              <span className="font-extrabold underline--magical cursor-pointer">
                <a href={resume} download>
                  resume here
                </a>
              </span>
            </p>
          </div>
          <div className="mt-8">
            <p className="font-light text-xl">
              Contact me at{" "}
              <span className="font-extrabold underline--magical cursor-pointer">
                hectoraldairah@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="image ml-20 mt-12">
          <div className="">
            <img id="me" src={profileImage} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

About.propTypes = {
  location: PropTypes.object
};

export default About;
