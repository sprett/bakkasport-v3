import PsController from '../../images/Visuals/pscontroller.svg'
import React, { useState } from "react";
import {Link} from "react-router-dom";
function Hero() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="lg:px-6 xl:px-20 bg-gray-800 h-100%">
                <div className="mx-auto container relative z-0 px-4 py-24 lg:py-16 md:py-12 sm:py-10 ">
                    <div className="flex flex-col-reverse md:flex-row">
                        <div className="md:w-3/5 md:pt-24 pb-10 lg:py-32 ">
                            <h1 className="text-3xl lg:text-7xl  font-black text-white text-center md:text-left tracking-tighter f-f-i md:w-7/12 md:text-5xl sm:text-5xl leading-tight text-heading-color">THE BAKKA <br></br> <span className="text-pink-400">E-SPORT</span> HOMEPAGE</h1>
                            <h2 className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-400 text-lg lg:text-2xl">Keep in progress with Elvebakken's Highschool E-Sports team and their upcoming matches, videos and streams! </h2>
                            <div className="w-full flex justify-center md:block">
                                <button className="hover:bg-white transition duration-200 bg-pink-400 py-3 px-10 lg:py-7 lg:px-20 rounded-full text-white hover:text-pink-400 text-sm md:text-xl f-f-p">Learn More</button>
                            </div>
                        </div>
                        <div className="w-1/2 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                            {/* <img class="h-full" src="https://cdn.tuk.dev/assets/components/111220/Hero4/Rectangle.png" alt="Device"> */}
                            <img className="md:absolute md:w-1/2 md:-ml-10" src={PsController} alt />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
