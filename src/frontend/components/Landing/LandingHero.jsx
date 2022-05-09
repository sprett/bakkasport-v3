import sanityClient from "../../../backend/client";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";
import PsController from '../../images/Visuals/pscontroller.svg'
import {Link} from 'react-scroll'
import LandingSection from './LandingSection'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function Hero() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "home"]{
           title,
           subTitle,
           about,
           image{
           asset->{
              _id,
              url
            }
          },
       }`
      )
      .then((data) => setHomeData(data))
      .catch(console.error);
  },[]);


  if (!homeData) return <div>
      
  </div>;


    return (
        <>
        {homeData && homeData.map((home, index) => (
            <div className="lg:px-6 xl:px-20 bg-gray-800 h-100%">
            
                <div className="mx-auto container lg:max-w-7xl relative z-0 px-4 py-24 lg:py-16 md:py-12 sm:py-10 ">
                
                    <div key={index} className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 ">
                            <h1 className="text-3xl lg:text-7xl  font-black text-white text-center md:text-left tracking-tighter f-f-i md:w-7/12 md:text-5xl sm:text-5xl leading-tight text-heading-color">THE BAKKA<br></br> <span className="text-pink-400">E-SPORT</span> HOMEPAGE</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-400 text-lg lg:text-2xl">{home.subTitle}</h2>
                            <div className="w-full flex justify-center md:block">
                                <Link to="about" spy={true} smooth={true}><button className="hover:bg-white transition duration-200 bg-pink-400 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white hover:text-pink-400 text-sm md:text-xl f-f-p">Learn More</button></Link>
                            </div>
                        </div>
                        <div className="w-1/2 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <img className="md:absolute md:w-1/2 md:-ml-10" src={PsController} alt />
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </>
    );
}

