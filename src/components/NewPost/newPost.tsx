import React from "react";
import { Link } from "gatsby";

interface NewPostProps {
  title: string;
  date: string;
  timeToRead: string;
  description: string;
  slug: string;
}

const NewPost: React.FC<NewPostProps> = ({
  title,
  date,
  timeToRead,
  description,
  slug
}) => {
  return (
    <article className="border-8 p-8 md:p-20 lg:pl-10 lg:pt-10 lg:pb-10">
      <header>
        <h1 className="text-4xl md:text-5xl lg:text-6xl underline--magical font-extrabold">
          <Link to={slug}>{title}</Link>
        </h1>
        <h2 className="text-base md:text-lg mt-2 lg:mt-5 lg:text-base">
          {`${date} • ${timeToRead} min read`}
        </h2>
      </header>
      <p className="mt-10 text-xl md:text-2xl lg:text-lg lg:mt-20 lg:pb-10">
        {description}
      </p>
    </article>
  );
};

export default NewPost;
