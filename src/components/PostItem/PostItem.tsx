import React from "react";
import { Link } from "gatsby";
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
  return (
    <article
      key={slug}
      className={`${index !== 0 ? "mt-16" : "mt-1"} lg:w-3/5`}
    >
      <header className="op">
        <h1 className="font-extrabold text-black text-5xl ml7">
          <span className="text-wrapper">
            <span className="letters">
              <Link
                className="underline--magical text-black cursor-pointer"
                to={slug}
              >
                {title}
              </Link>
            </span>
          </span>
        </h1>
        <p className="mt-2">{`${date} • ${timeToRead} min to read`}</p>
      </header>
      <p className="text-lg font-thin mt-5">{description}</p>
    </article>
  );
};

export default PostItem;
