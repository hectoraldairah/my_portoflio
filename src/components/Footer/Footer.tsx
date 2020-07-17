import React from "react";
import { Codepen, GitHub, Linkedin, Twitter } from "react-feather";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="px-5 mt-20 bg-lead lg:px-12 pt-24 pb-10 lg:pb-32">
        <div className="lg:pr-20 ">
          <p className="text-lg font-light">Let's get in touch</p>
          <h1 className="font-extrabold text-black mt-2 text-3xl lg:text-5xl lg:w-9/12 tracking-tight leading-snug">
            Do you want to talk about programming, work, or cooking?{" "}
            <span className="underline--magical cursor">
              <a href="mailto:hectoraldairah@gmail.com">Email me</a>
            </span>
          </h1>
        </div>
      </footer>{" "}
      <div className="pl-12 py-12 bg-black">
        <p className="text-sm text-white">My social networks</p>
        <nav className="mt-2">
          <ul className="text-xl lg:text-lg flex flex-row">
            <FooterLinkItem
              noMargin={true}
              link="https://codepen.io/bitbyte"
              icon={<Codepen />}
            />
            <FooterLinkItem
              link="https://github.com/hectoraldairah"
              icon={<GitHub />}
            />
            <FooterLinkItem
              link="https://www.linkedin.com/in/hectoraldairaguilar/"
              icon={<Linkedin />}
            />
            <FooterLinkItem
              link="https://twitter.com/BitByte_"
              icon={<Twitter />}
            />
          </ul>
        </nav>
      </div>
    </>
  );
};

interface LinkItemProps {
  noMargin?: boolean;
  link: string;
  icon: object;
}

const FooterLinkItem: React.FC<LinkItemProps> = ({
  noMargin = false,
  link,
  icon,
}) => {
  return (
    <li className={`unline-block mr-3  mt-2`}>
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="underline--magical text-lg text-white font-extrabold"
      >
        {icon}
      </a>
    </li>
  );
};

export default Footer;
