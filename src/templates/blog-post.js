import React from "react";
import { Link, graphql } from "gatsby";
import PropTypes from "prop-types";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="p-3 mt-5 md:p-10 lg:px-64">
        <header className="pb-5 md:mt-10 md:mb-20 lg:mt-5">
          <h1 className="font-extrabold text-5xl md:text-6xl">
            {post.frontmatter.title}
          </h1>
          <p className="mt-2 text-base">
            {`${post.frontmatter.date} • ${post.timeToRead} min read`}
          </p>
        </header>
        <section
          className="text-lg blog-post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr />
      </article>
      <PostsNavigations previous={previous} next={next} />
      <hr className="p-1 bg-gray-100 mt-10" />
    </Layout>
  );
};

const PostsNavigations = ({ previous, next }) => {
  return (
    <nav className="px-5 md:px-12 lg:px-64">
      <ul className="flex justify-between">
        <li className="change-post font-bold">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              {`⟵ ${previous.frontmatter.title}`}
            </Link>
          )}
        </li>
        <li className="change-post font-bold">
          {next && (
            <Link to={next.fields.slug} rel="next">
              {`${next.frontmatter.title} ⟶ `}
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.obj,
  location: PropTypes.obj,
  pageContext: PropTypes.obj
};

PostsNavigations.propTypes = {
  previous: PropTypes.obj,
  next: PropTypes.obj
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
      }
      timeToRead
    }
  }
`;
