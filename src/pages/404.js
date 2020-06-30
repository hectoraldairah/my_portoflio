import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import P5 from "p5";
import window from "global";
const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <NotFound />
    </Layout>
  );
};

class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    p.setup = () => {
      p.createCanvas(window.innerWidth - 19, 500);
      p.background(0);
    };

    p.draw = () => {
      p.background(0);
      let c = p.color(203, 213, 224);
      c.setAlpha(200);
      p.fill(c);

      p.translate(window.innerWidth / 2, window.innerHeight / 2);
      for (let i = 0; i < 700; i += 3) {
        let lastAng = (i - 1) / 10 + p.frameCount / 300;
        let ang = i / 10 + p.frameCount / 300;
        let r = i;
        p.line(
          r * p.cos(lastAng),
          r * p.sin(lastAng),
          r * p.cos(ang),
          r * p.sin(ang)
        );
        p.textSize(50);
        p.push();
        p.translate(r * p.cos(lastAng), r * p.sin(lastAng));
        p.text("???"[i % 10], 0, 0);
        p.pop();
      }
    };
  };

  componentDidMount() {
    this.myP5 = new P5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      <div ref={this.myRef} className="flex justify-center items-center">
        <div className="absolute text-white text-4xl lg:text-7xl font-extrabold">
          Page not found
        </div>
      </div>
    );
  }
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
