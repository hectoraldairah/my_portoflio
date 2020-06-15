import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article className="p-3 mt-5">
        <header className="pb-5">
          <h1 className="font-extrabold text-5xl">
            {post.frontmatter.title}
          </h1>
          <p className="mt-2 text-base">
            {`${post.frontmatter.date} • ${post.timeToRead} min read`}
          </p>
        </header>
        <section className="text-lg blog-post" dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr/>
      </article>
	<hr className="p-1 bg-gray-100 mt-10"/>
     </Layout>
  )
}

export default BlogPostTemplate

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
`
