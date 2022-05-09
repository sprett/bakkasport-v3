/* This example requires Tailwind CSS v2.0+ */
import sanityClient from "../../../backend/client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import RosterLoading from "./RosterLoading";


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
      .then((data) => setPlayerData(data))
      .catch(console.error);
  },[]);


  if (!playerData) return <div>
      <RosterLoading />
  </div>;


  return (
    <div className="bg-gray-800 pt-20">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet the team at Bakka <span className="text-pink-400">E-SPORT</span></h2>
            <p className="text-xl text-gray-300">
              Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">

          {/*Checking if playerData is true, if it is true then it will map through the data and return
          the player and index. */}
          {playerData && playerData.map((player, index) => (
            <li key={index} className="py-10 px-6 bg-gray-900 text-center rounded-lg xl:px-10 xl:text-left">
              <div className="space-y-6 xl:space-y-10">
                <img className="mx-auto object-cover h-40 w-40 rounded-full xl:w-56 xl:h-56" src={urlFor(player.playerImage).url()} alt="" />
                <div className="space-y-2 xl:flex xl:items-center xl:justify-between">
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3 className="text-white">{player.name}</h3>
                    <p className="text-indigo-400">{player.game}</p>
                  </div>
                  <ul role="list" className="flex justify-center space-x-5">
                      <li>
                        <a className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Twitch</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                        </a>
                      </li>
                      <li>
                        <a className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Instagram</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                      </li>
                    </ul>
                </div>
              </div>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
