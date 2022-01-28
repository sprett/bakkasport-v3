// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../../../backend/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function AllContent() {
    const [allPostsData, setAllPosts] = useState(null);
    const [postData, setPostData] = useState(null);
  
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
        body,
          "name": author->name,
          "authorImage": author->image
      }`
        )
        .then((data) => setAllPosts(data))
        .catch(console.error);
    }, []);
 
   if (!setAllPosts) return <div>Loading...</div>;

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {allPostsData &&
            allPostsData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.mainImage.asset.url} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    <BlockContent
            blocks={post.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
                </div>
                
            </div>
            </div>
            </Link>
          ))}
        </div>
    </div>
    </div>
  );
}
