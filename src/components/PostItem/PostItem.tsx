import React from "react";
import { Link } from "gatsby";

interface PostItemProps {
  slug: string;
  title: string;
  date: string;
  timeToRead: string;
  description: string;
}

const PostItem: React.FC<PostItemProps> = ({
  slug,
  title,
  date,
  timeToRead,
  description
}) => {
  return (
    <article key={slug} className="mt-16 lg:w-3/5">
      <header>
        <h1 className="font-extrabold  text-4xl">
          <Link className="underline--magical cursor-pointer" to={slug}>
            {title}
          </Link>
        </h1>
        <p className="mt-2">{`${date} • ${timeToRead} min to read`}</p>
      </header>
      <p className="text-lg mt-5">{description}</p>
    </article>
  );
};

export default PostItem;
