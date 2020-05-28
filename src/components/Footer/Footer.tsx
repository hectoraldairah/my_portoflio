import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-10 lg:px-24 pt-24 pb-10">
      <div className="lg:pr-20">
        <p className="text-lg">Let's get in touch</p>
        <h1 className="font-extrabold mt-2 text-2xl lg:text-5xl lg:w-3/4 tracking-wide leading-snug">
          Do you want to talk about programming, work or cooking?{" "}
          <span className="underline--magical cursor">
            <a href="mailto:hectoraldairah@gmail.com">Email me</a>
          </span>
        </h1>
      </div>
      <div className="mt-20 lg:mt-40">
        <p className="text-lg">My social networks</p>
        <nav className="mt-2">
          <ul className="text-2xl lg:text-xl flex flex-col md:flex-row ">
            <li className="inline-block">
              <a
                target="_blank"
                href="https://codepen.io/bitbyte"
                className="underline--magical font-extrabold"
              >
                Codepen
              </a>{" "}
            </li>
            <li className="inline-block md:px-5">
              <a
                target="_blank"
                href="https://www.behance.net/bit_byte"
                className="underline--magical font-extrabold"
              >
                Behance
              </a>
            </li>
            <li className="inline-block md:px-5">
              <a className="underline--magical font-extrabold">Instagram</a>
            </li>
            <li className="inline-block md:px-5">
              <a
                target="_blank"
                href="https://github.com/hectoraldairah"
                className="underline--magical font-extrabold"
              >
                Github
              </a>
            </li>
            <li className="inline-block md:px-5">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/hectoraldairaguilar/"
                className="underline--magical font-extrabold"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
