import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import anime from "animejs";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  timeToRead: string;
  description: string;
  index: number;
}

const PostItem: React.FC<PostItemProps> = ({
  slug,
  title,
  date,
  timeToRead,
  description,
  index,
}) => {
  let textWrapper = useRef(null);
  useEffect(() => {
    textWrapper.current.innerHTML = textWrapper.current.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline({ loop: false }).add({
      targets: ".ml7 .letter",
      translateY: ["2em", 0],
      translateX: ["5px", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 500,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      delay: (el, i) => i * 20,
    });
  }, []);

  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: [".date", ".description"],
      opacity: [0, 1],
      translateY: ["200px", 0],
      duration: 500,
      easing: "easeInOutQuad",
    });
  });

  return (
    <article
      key={slug}
      className={`${index !== 0 ? "mt-16" : "mt-1"} lg:w-3/5`}
    >
      <header className="op">
        <h1
          className="font-extrabold text-black text-4xl lg:text-5xl ml7"
          ref={textWrapper}
        >
          <span className="text-wrapper">
            <span className="letters">
              <Link className="underline--magical cursor-pointer" to={slug}>
                {title}
              </Link>
            </span>
          </span>
        </h1>
        <p className="mt-2 date">{`${date} • ${timeToRead} min to read`}</p>
      </header>
      <p className="text-lg font-thin mt-5 description">{description}</p>
    </article>
  );
};

export default PostItem;
