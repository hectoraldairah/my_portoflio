import React from "react";
import PropTypes from "prop-types";
import Layout from "../components/layout";

const Blog = ({ location }) => {
  return (
    <Layout location={location}>
      <div className="h-screen bg-gray-100 flex aboutContainer">
        <div className="pl-48 pt-32 description "></div>
      </div>
    </Layout>
  );
};

Blog.propTypes = {
  location: PropTypes.object
};

export default Blog;
