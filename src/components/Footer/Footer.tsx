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
            <FooterLinkItem
              noMargin={true}
              link="https://codepen.io/bitbyte"
              text="Codepen"
            />
            <FooterLinkItem
              link="https://www.behance.net/bit_byte"
              text="Behance"
            />
            <FooterLinkItem
              link="https://github.com/hectoraldairah"
              text="Instagram"
            />
            <FooterLinkItem
              link="https://github.com/hectoraldairah"
              text="Github"
            />
            <FooterLinkItem
              link="https://www.linkedin.com/in/hectoraldairaguilar/"
              text="LinkedIn"
            />
          </ul>
        </nav>
      </div>
    </footer>
  );
};

interface LinkItemProps {
  noMargin?: boolean;
  link: string;
  text: string;
}

const FooterLinkItem: React.FC<LinkItemProps> = ({
  noMargin = false,
  link,
  text
}) => {
  return (
    <li className={`unline-block ${noMargin ? "" : "md:px-5"}`}>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="underline--magical font-extrabold"
      >
        {text}
      </a>
    </li>
  );
};

export default Footer;
