import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import NewPost from "../components/NewPost/newPost.tsx";
import PostItem from "../components/PostItem/PostItem.tsx";

const Blog = ({ location, data }) => {
  const posts = data.allMarkdownRemark.edges;
  const latestPost = posts[0];
  console.log(latestPost);
  return (
    <Layout location={location}>
      <div className="bg-gray-100 pb-10 md:pb-0 ">
        <div className="flex flex-col lg:flex-row lg:content-around w-full lg:pl-32 pt-20 px-10">
          <div className="lg:pt-16 lg:pl-8">
            <p className="text-base md:text-xl font-light">my blog</p>
            <h1 className="font-extrabold text-5xl lg:text-6xl md:w-1/2 lg:w-5/6">
              I was thinking about...
            </h1>
          </div>
          <div className="pt-16 md:mt-20 md:p-20 lg:mt-0 lg:pr-10">
            <NewPost
              title={latestPost.node.frontmatter.title}
              date={latestPost.node.frontmatter.date}
              timeToRead={latestPost.node.timeToRead}
              description={latestPost.node.frontmatter.description}
              slug={latestPost.node.fields.slug}
            />
          </div>
        </div>
      </div>
      <div className="bg-white lg:pb-10">
        <section className="px-10 py-10 lg:px-40 lg:py-24 ">
          {posts.map(({ node }) => {
            return (
              <PostItem
                key={node.fields.slug}
                slug={node.fields.slug}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                timeToRead={node.timeToRead}
                description={node.frontmatter.description}
              />
            );
          })}
        </section>
      </div>
      <hr className="p-1 bg-gray-100" />
    </Layout>
  );
};

Blog.propTypes = {
  location: PropTypes.object,
  data: PropTypes.object
};

export default Blog;

export const pageQuery = graphql`
  query {
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
          }
          timeToRead
        }
      }
    }
  }
`;
