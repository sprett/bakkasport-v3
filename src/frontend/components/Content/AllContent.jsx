import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../../backend/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}



/* This is a function that is fetching data from the Sanity API. */
export default function AllContent() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
        asset->{
          _id,
          url
        }
      },
      summary,
      publishedAt,
      category,
        "name": author->name,
        "authorImage": author->image
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

 if (!setAllPosts) return <div>Loading...</div>;
    return (
      <div className="bg-gray-800 py-28">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
      {allPostsData &&
            allPostsData.map((post, index) => (
      <Link to={"/" + post.slug.current} key={post.slug.current}>
        <div key={index} className="overflow-hidden transition-shadow duration-300 bg-gray-800 rounded">
          <a href="/" aria-label="Article">
            <img
              src={urlFor(post.mainImage).url()}
              className="object-cover w-full h-64 rounded"
              alt=""
            />
          </a>
          <div className="py-5">
            <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
              {post.publishedAt}
            </p>
            <a
              href="/"
              aria-label="Article"
              className="inline-block mb-3 text-white transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              <p className="text-2xl font-bold leading-5">{post.title}</p>
            </a>
            <p className="mb-4 text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit sed quia
              consequuntur magni voluptatem doloremque.
            </p>
          </div>
        </div>
        </Link>
            ))}
      </div>
    </div>
    </div>
  );
};