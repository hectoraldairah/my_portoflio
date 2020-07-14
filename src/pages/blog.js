import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import PostItem from "../components/PostItem/PostItem.tsx";
import SEO from "../components/seo";
import styles from "../styles/blog.module.css";

/*const Blog = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="Blog" />
      <div className="bg-gray-100 pb-10">
        <div className="px-10 pt-20 lg:px-24">
          <p className="text-lg font-thin">My Articles</p>
         
        </div>
      </div>
    </Layout>
  );
};*/

const Blog = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges || {};
  const siteTitle = data.site.siteMetadata.title || {};
  console.log(posts);
  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="Blog" />
      <div className="bg-white px-10">
        <div className="mt-16">
          <p className="font-light text-black text-lg">Blog</p>
          <h1 className="font-bold text-black text-6xl">Articles by me</h1>
        </div>

        <div className={`${styles.postContainer}`}>
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
        </div>
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
