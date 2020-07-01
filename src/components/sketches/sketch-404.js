import React from "react";
import P5 from "p5";

export default class NotFound extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let hoff = 0;
    let yoff = 0;
    p.setup = () => {
      p.createCanvas(width - 19, 500);
      p.noStroke();
    };

    p.draw = () => {
      p.background(255);
      let h = p.map(p.noise(hoff), 0, 1, 0, 360);
      p.fill(h, 40, 90);
      p.push();
      p.translate(width / 2, height / 2 - 80);

      p.beginShape();
      let xoff = 0;
      for (let i = 0; i <= p.TWO_PI / 0.008; i += 0.03) {
        let offset = p.map(p.noise(xoff + yoff), 0, 1, -50, 40);
        let r = p.map(p.noise(hoff), 0, 1, 150, 200);
        r += offset;
        let x = r * p.sin(i);
        let y = r * p.cos(i);
        p.vertex(x, y);
        xoff += 0.009;
      }
      p.endShape();
      yoff += 0.01;
      hoff += 0.008;
    };
  };

  componentDidMount() {
    this.myP5 = new P5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      <div ref={this.myRef} className="flex justify-center items-center">
        <div className="absolute text-black text-4xl lg:text-7xl font-extrabold">
          Page not found
          <p className="text-center text-white text-xl">You're in the void</p>
        </div>
      </div>
    );
  }
}
