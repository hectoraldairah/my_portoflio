import React, { useEffect } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import PostItem from "../components/PostItem/PostItem.tsx";
import SEO from "../components/seo";
import styles from "../styles/blog.module.css";
import Anime from "animejs";

const Blog = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges || {};
  const siteTitle = data.site.siteMetadata.title || {};

  useEffect(() => {
    let anime = Anime.timeline({
      easing: "easeOutCirc",
      duration: 1000,
    });

    anime.add({
      targets: ["#blog", "#title"],
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      easing: "easeOutCirc",
      delay: 450,
    });
  }, []);

  return (
    <Layout site={siteTitle} location={location}>
      <SEO title="Blog" />
      <div className="bg-white px-10">
        <div className="mt-16 ml-2">
          <p id="blog" className="font-light text-black text-lg opacity-0">
            Blog
          </p>
          <h1
            id="title"
            className="font-bold tracking-tight text-black text-6xl opacity-0"
          >
            Articles by me
          </h1>
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
