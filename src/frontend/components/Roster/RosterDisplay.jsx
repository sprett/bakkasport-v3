/* This example requires Tailwind CSS v2.0+ */
import sanityClient from "../../../backend/client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function RosterDisplay() {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "player"]{
           name,
           game,
           playerImage{
           asset->{
              _id,
              url
            }
          },
       }`
      )
      .then((data) => setPlayerData(data[0]))
      .catch(console.error);
  },[]);


  if (!playerData) return <div>Loading...</div>;

const people = [
  {
    name: 'Dino Hukanovic',
    role: 'Racing Driver / ACC',
    imageUrl:
      'https://images.unsplash.com/photo-1610905376670-5e7e0e8a3cfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  
  // More people...
]
  return (
    <div className="bg-gray-800 pt-20">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet the team at Bakka <span className="text-pink-400">E-SPORT</span></h2>
            <p className="text-xl text-gray-300">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis
              neque.
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
          {playerData &&
            setPlayerData.map((index) => 
              <li key={index} className="py-10 px-6 bg-gray-900 text-center rounded-lg xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={urlFor(playerData.playerImage).url()} alt="" />
                  <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                    <div className="font-medium text-lg leading-6 space-y-1">
                      <h3 className="text-white">{playerData.name}</h3>
                      <p className="text-indigo-400">{playerData.game}</p>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
