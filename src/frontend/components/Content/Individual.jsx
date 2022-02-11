import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../../backend/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import Navbar from "../Navbar/Navbar";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Individual() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;
    return (
      <div className="bg-gray-800 ">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
          20 Nov 2020
        </p>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4">
            <h1
              
              aria-label="Article"
              className="mb-8 inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-white transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
            >
              {postData.title}
            </h1>
          </div>
          <div className="flex justify-center">
          <img className="rounded-2xl h-96" src={urlFor(postData.mainImage).url()} alt="" />
          </div>
          <p className="mt-14 text-base text-gray-200 md:text-lg">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
          </p>
        </div>
        <div className="m-10 sm:text-center">
          <a href="/" aria-label="Author" className="inline-block mb-1">
            <img
              alt="avatar"
              src={urlFor(postData.authorImage).url()}
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <p
              aria-label="Author"
              className="font-semibold text-gray-300  transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {postData.name}
            </p>
            <p className="mt-2 text-sm font-medium leading-4 text-gray-600">Author</p>
          </div>
        </div>
        <div className="sm:text-center">
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Read more
          </a>
        </div>
      </div>
      </div>
    );
  };