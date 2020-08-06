import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
  description,
  image,
}) => {
  return (
    <article id="article" key={slug} className="px-2 py-10">
      <div>
        <Img
          style={{ maxHeight: 'calc(50vh - 0px)' }}
          fluid={image}
          imgStyle={{ objectFit: 'contain' }}
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
