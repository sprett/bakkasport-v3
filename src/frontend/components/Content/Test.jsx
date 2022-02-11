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
      <div className="bg-gray-800">
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
            <div className="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                className="flex items-start text-gray-100 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="6 23 1 23 1 12 6 12"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">7.4K</p>
              </a>
              <a
                href="/"
                aria-label="Comments"
                className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
              >
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                  >
                    <polyline
                      points="23 5 23 18 19 18 19 22 13 18 12 18"
                      fill="none"
                      strokeMiterlimit="10"
                    />
                    <polygon
                      points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                      fill="none"
                      stroke="currentColor"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <p className="font-semibold">81</p>
              </a>
            </div>
          </div>
        </div>
        </Link>
            ))}
      </div>
    </div>
    </div>
  );
};