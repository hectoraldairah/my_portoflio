import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import profileImage from "../images/me.png";
import "../styles/about.css";
import resume from "../utils/resume.pdf";

const About = ({ location }) => {
	return (
		<Layout location={location}>
			<div className="h-screen pb-20 bg-gray-100 flex aboutContainer">
				<div className="pl-10 pr-10  pt-20 lg:pr-1 lg:pl-48 lg:pt-32 description ">
					<p className="text-base md:text-xl font-light">about me</p>
					<h1 className="font-extrabold text-5xl lg:text-6xl lg:w-3/5">
						{"I'm a junior developer of life"}
					</h1>
					<div className="mt-20 lg:w-2/4">
						<p className="font-light text-base lg:text-xl leading-relaxed">
							{`I'm a front-end developer based on Mexico City, making user interfaces that combine user-centered design and visual aesthetics. I'm always in the process of learning something new and taking new challenges. I love everything related to design, art, science, programming, web culture and food`}
						</p>
					</div>
					<div className="mt-16">
						<p className="font-light text-lg lg:text-xl">
							You can see my{" "}
							<span className="font-extrabold underline--magical cursor-pointer">
								<a href={resume} download>
									resume here
								</a>
							</span>
						</p>
					</div>
					<div className="mt-8">
						<p className="font-light text-lg lg:text-xl">
							Contact me at{" "}
							<span className="font-extrabold underline--magical cursor-pointer">
								hectoraldairah@gmail.com
							</span>
						</p>
					</div>
				</div>
				<div className="image hidden md:block lg:ml-20 mt-12">
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
