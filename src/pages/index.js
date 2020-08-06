import React, { useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { motion } from 'framer-motion';
import styles from '../styles/work.module.css';

const Projects = [
  {
    url:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    postTitle: "Arc'teryx",
    postDescription: 'Awesome long project description with very long words',
    jobs: 'Front end, Visual Design',
  },
  {
    url:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
    postTitle: 'Awesome Post title',
    postDescription:
      'Awesome long project description with very long words. Maybe more words that this',
    jobs: 'Front end, Visual Design',
  },
];

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="Work" />
      <div className="bg-white h-full py-10 lg:pt-0 lg:pb-20">
        <motion.div
          layout
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-black mx-1 mt-1 px-3 py-3 lg:mx-10 lg:mt-10 lg:px-4 lg:py-10 "
        >
          <motion.h1
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl font-extrabold text-white p-3 md:text-5xl lg:text-7xl lg:tracking-tight"
          >
            {`I'm a front-end developer that loves design clean and useful interfaces for great products`}
            <span className="text-xs lg:text-base">{`■`}</span>
          </motion.h1>
          <motion.nav
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bg-white flex justify-center items-end p-4 mt-1  border-4 border-black  lg:mt-0"
          >
            <span className="font-bold text-lg text-black underline--magical mr-1">
              Check my work
            </span>
            <span>or</span>
            <span className="font-bold text-lg text-black underline--magical ml-1">
              <Link to="about">Read about me</Link>
            </span>
          </motion.nav>
        </motion.div>
      </div>
      <section className="mt-48 px-2 lg:px-10  ">
        {Projects.map((props, index) => {
          return <WorkProjects key={index} index={index} {...props} />;
        })}
      </section>
    </Layout>
  );
};

const imageMotion = {
  rest: {
    scale: 1,
    opacity: 0.1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeOut',
    },
  },
};

const arrowMotion = {
  rest: {
    opacity: 0,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const WorkProjects = ({ url, index, postTitle, postDescription, jobs }) => {
  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={styles.postContainer}
    >
      <div className={styles.postDescription}>
        <div className="flex flex-row-reverse justify-between">
          <p className="text-gray-600">{`0${index + 1}`}</p>
          <p className="text-gray-600">{jobs}</p>
        </div>
        <div className="mt-5 lg:mt-10 lg:w-11/12">
          <p className="text-3xl lg:text-6xl font-bold">{postTitle}</p>
          <motion.p
            variants={arrowMotion}
            className="text-9xl mt-20"
          >{`->`}</motion.p>
        </div>
      </div>
      <div className={styles.postImageContainer}>
        <motion.img
          variants={imageMotion}
          className={styles.postImage}
          src={url}
        ></motion.img>
      </div>
    </motion.article>
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
