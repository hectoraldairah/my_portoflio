import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styles from "../styles/blog-post.module.css";
import Img from "gatsby-image";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className={`${styles.postLayout}`}>
        <div className={`${styles.postImage}`}>
          <Img fluid={featuredImgFluid} />
        </div>
        <div className={`${styles.postDescription} p-10 mx-5`}>
          <h1 className="font-bold tracking-tight text-black text-3xl md:text-4xl lg:text-5xl">
            {post.frontmatter.title}
          </h1>
          <p className="mt-5 text-black text-base md:text-lg">
            {post.frontmatter.description}
          </p>
        </div>
        <section className={`${styles.postContent} px-6`}>
          <div
            className="blog-post"
            dangerouslySetInnerHTML={{ __html: post.html }}
          ></div>
          <hr />
        </section>
      </article>
      <PostsNavigations previous={previous} next={next} />
    </Layout>
  );
};

const PostsNavigations = ({ previous, next }) => {
  return (
    <nav className="px-5 lg:px-12 py-5 mt-20">
      <ul className="flex justify-between">
        <li className="font-bold  text-black text-base lg:text-2xl">
          {previous && (
            <div className="flex">
              <div className=" text-2xl mr-2 md:text-4xl md:mr-5">{`<-`}</div>
              <div>
                <p className="font-thin text-sm">Previous post</p>
                <Link
                  className="underline--magical pinter"
                  to={previous.fields.slug}
                  rel="prev"
                >
                  {`${previous.frontmatter.title}`}
                </Link>
              </div>
            </div>
          )}
        </li>
        <li className="font-bold text-black text-base lg:text-2xl">
          {next && (
            <div className="flex">
              <div>
                <p className="font-thin text-sm">Next post</p>{" "}
                <Link
                  className="underline--magical pointer"
                  to={next.fields.slug}
                  rel="next"
                >
                  {`${next.frontmatter.title}`}
                </Link>
              </div>
              <div className="text-2xl mr-2 md:text-4xl md:ml-5">{`->`}</div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.any,
  location: PropTypes.obj,
  pageContext: PropTypes.obj,
};

PostsNavigations.propTypes = {
  previous: PropTypes.obj,
  next: PropTypes.obj,
};
export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`;
