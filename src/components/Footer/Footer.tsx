import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="px-24 pt-24 pb-10">
      <div className="pr-20">
        <p className="text-lg">Let's get in touch</p>
        <h1 className="font-extrabold text-5xl w-3/4 tracking-wide leading-snug">
          Do you want to talk about programming, work or cooking?{" "}
          <span className="underline--magical cursor">
            <a href="mailto:hectoraldairah@gmail.com">Email me</a>
          </span>
        </h1>
      </div>
      <div className="mt-40">
        <p className="text-lg">My social networks</p>
        <nav className="mt-1">
          <ul>
            <li className="inline-block pr-5">
              <a
                target="_blank"
                href="https://codepen.io/bitbyte"
                className="underline--magical font-extrabold text-xl"
              >
                Codepen
              </a>{" "}
            </li>
            <li className="inline-block px-5">
              <a
                target="_blank"
                href="https://www.behance.net/bit_byte"
                className="underline--magical font-extrabold text-xl"
              >
                Behance
              </a>
            </li>
            <li className="inline-block px-5">
              <a className="underline--magical font-extrabold text-xl">
                Instagram
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                target="_blank"
                href="https://github.com/hectoraldairah"
                className="underline--magical font-extrabold text-xl"
              >
                Github
              </a>
            </li>
            <li className="inline-block px-5">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/hectoraldairaguilar/"
                className="underline--magical font-extrabold text-xl"
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
