import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import PostItem from '../components/PostItem/PostItem.tsx';
import SEO from '../components/seo';
import styles from '../styles/blog.module.css';
import { motion } from 'framer-motion';

const Blog = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges || {};
  const siteTitle = data.site.siteMetadata.title || {};

  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="Blog" />
      <div className="bg-white px-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 ml-2 relative"
        >
          <p className="bg-white font-normal text-base text-black absolute -mt-5 ml-2 border-2 border-black p-2 text-lg">
            Blog
          </p>
          <h1 className="bg-black p-3 font-bold tracking-tight text-white text-6xl w-full md:w-2/5 ">
            Articles by me
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className={`${styles.postContainer}`}
        >
          {posts.map((props, index) => {
            return (
              <PostItem
                index={index}
                key={props.node.frontmatter.title}
                title={props.node.frontmatter.title}
                date={props.node.frontmatter.date}
                timeToRead={props.node.timeToRead}
                description={props.node.frontmatter.description}
                slug={props.node.fields.slug}
                image={
                  props.node.frontmatter.featuredImage.childImageSharp.fluid
                }
              />
            );
          })}
        </motion.div>
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object,
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`;
