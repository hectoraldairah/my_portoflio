import React, { useEffect } from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import Anime from "animejs";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  timeToRead: string;
  description: string;
  index: number;
  image: object;
}

const PostItem: React.FC<PostItemProps> = ({
  slug,
  title,
  date,
  timeToRead,
  description,
  index,
  image,
}) => {
  useEffect(() => {
    let anime = Anime.timeline({
      duration: 100,
      easing: "easeOutCirc",
    });

    anime.add({
      targets: ["#article"],
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1000,
      delay: 250,
      easing: "easeOutCirc",
    });
  }, []);
  return (
    <article id="article" key={slug} className="px-2 py-10 opacity-0">
      <div>
        <Img
          style={{ maxHeight: "calc(50vh - 0px)" }}
          fluid={image}
          imgStyle={{ objectFit: "contain" }}
        />
      </div>
      <div className="mt-10">
        <h2 className="font-bold tracking-tight text-2xl">
          <Link className="underline--magical" to={slug}>
            {title}
          </Link>
        </h2>
        <p className="text-base leading-relaxed tracking-normal text-gray-600 mt-5">
          {description}
        </p>
        <p className="mt-5 tracking-wide text-sm">{date}</p>
      </div>
    </article>
  );
};

export default PostItem;
