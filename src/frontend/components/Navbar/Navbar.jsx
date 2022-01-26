import Logo from '../../images/Logo/logo.svg'
import Logos from '../../images/Logo/logo-s.svg'
import React, { useState } from "react";
import {Link} from "react-router-dom";
function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="lg:px-6 xl:px-20 bg-gray-800 h-100%">
                <div className="container mx-auto relative z-20">
                    <nav className="w-full absolute">
                        <div className="hidden lg:flex w-full f-f-p justify-between items-center py-6 relative">
                            <div className="w-2/3">
                                <Link to="/">
                                    <img src={Logo} className='h-12' />
                                </Link>
                            </div>
                            <div className="md:w-1/2 ">
                                <ul className="flex justify-end space-x-10 w-full items-center text-white cursor-pointer">
                                    <Link to ="/">
                                        <li className="border-b-4 border-pink-400 pb-1">
                                            <a href>Home</a>
                                        </li>
                                    </Link>
                                    <Link to="/roster">
                                        <li className="border-b-4 border-transparent pb-1 hover:border-pink-400 transition duration-200">
                                            <a href>Roster</a>
                                        </li>
                                    </Link>
                                    <Link to ="/dashboard">
                                        <li className="border-b-4 border-transparent pb-1 hover:border-pink-400 transition duration-200">
                                            <a href>Content</a>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Mobile Navbar */}
                    <nav className="lg:hidden">
                        <div className="flex py-6 justify-between items-center px-4">
                            <Link to="/">
                                <img src={Logos} className='h-12' />
                            </Link>
                            <div className=" flex items-center">
                                {show && (
                                    <ul id="list" className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                                        <Link to ="/">
                                            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                <a href="javascript:void(0)">
                                                    <span className="ml-2 font-bold">Home</span>
                                                </a>
                                            </li>    
                                        </Link>
                                        <Link to=" /roster">
                                            <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center" onclick="dropdownHandler(this)">
                                                <a href="javascript:void(0)">
                                                    <span className="ml-2 font-bold">Roster</span>
                                                </a>
                                            </li>
                                        </Link>
                                        <Link to =" /dashboard">
                                            <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                                                <a href="javascript:void(0)">
                                                    <span className="ml-2 font-bold">Contact Us</span>
                                                </a>
                                            </li>
                                        </Link>
                                    </ul>
                                )}
                                <div className="xl:hidden" onClick={() => setShow(!show)}>
                                    {show ? (
                                        <div id="close" className=" close-m-menu">
                                            <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <line x1={18} y1={6} x2={6} y2={18} />
                                                <line x1={6} y1={6} x2={18} y2={18} />
                                            </svg>
                                        </div>
                                    ) : (
                                        <svg id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={4} y1={8} x2={20} y2={8} />
                                            <line x1={4} y1={16} x2={20} y2={16} />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;
