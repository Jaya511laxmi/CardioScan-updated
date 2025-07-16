import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
// import ReactPlayer from 'react-player';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MdEditNote } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
// import Testimonial from '../testimonial/Testimonial';
// import Explore from '../explore/Explore';
import { GiHeartOrgan } from "react-icons/gi";
import { TbAccessPoint } from "react-icons/tb";
import { MdStars } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { SiSololearn } from "react-icons/si";
import Testimonial from '../testimonials/Testimonials';
import Features from '../features/Features';






function Home() {
  const [text] = useTypewriter({
    words: ['One beat at a time', 'Monitored with Precision'],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <div className="bg-white">
        <div className="flex flex-col md:flex-row h-[80vh] w-full">
          <div className="flex flex-1 items-center justify-center  md:p-0">
            <div className="text-center md:text-left md:ml-20">
              <h1 className="font-bold text-3xl md:text-4xl mb-5 text-blue-950 font-myFont1">
               Your Heart's Health :<br />
                <span className="font-bold text-4xl md:text-5xl mb-5 text-red-800">{text}</span>
                <Cursor />
              </h1>
              <p className="font-semibold mb-5 text-lg md:text-xl">
                Upload ECG Images and get an instant prediction - normal or abnormal for early diagnosis.
              </p>
              <NavLink to="/explore">
                <button
                  type="button"
                  className="bg-blue-950 p-3 md:p-4 rounded-3xl text-white font-bold text-lg md:text-xl "
                >
                  EXPLORE NOW!
                </button>
              </NavLink>
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center p-4 md:p-0">
            <NavLink to="">
              <img src="/mainhome.jpg" className="object-cover w-full md:w-auto md:mr-10 md:mt-10 max-w-" alt="" />
            </NavLink>
          </div>
        </div>

<div className="h-[90vh] mt-20 "> 
<Features/>
</div>




        <div className="h-[60vh] overflow-hidden mt-16">
        <h1 className="bg-blue-950 p-4 text-center text-white m-8 text-xl md:text-2xl rounded-lg font-bold mb-20">
                Value Proposition
              </h1>
          <div className="flex items-center justify-evenly flex-wrap">
            
          <div className='flex flex-col w-56 items-center justify-center'>
            <SiSololearn className='text-6xl text-red-800' />
            <h2 className='mt-3 mb-3 font-semibold text-xl text-center'>AI-Powered Accuracy</h2>
            </div>
            
            <div className='flex flex-col w-56 items-center justify-center'>
            <GiHeartOrgan className='text-6xl text-red-800' />
            <h2 className='mt-3 mb-3 font-semibold text-xl text-center'>Instant Results</h2>
            </div>
            <div className='flex flex-col w-56 items-center justify-center'>
            <MdStars className='text-6xl text-red-800' />
            <h2 className='text-center mt-3 mb-3 font-semibold text-xl'>Early Detection</h2>
            </div>
            <div className='flex flex-col w-56 items-center justify-center'>
            <FaUsersLine className='text-6xl text-red-800' />
            <h2 className='text-center mt-3 mb-3 font-semibold text-xl'>User-Friendly Interface</h2>
            </div>
            <div className='flex flex-col w-56 items-center justify-center'>
            <TbAccessPoint className='text-6xl text-red-800' />
            <h2 className='text-center mt-3 mb-3 font-semibold text-xl'>24/7 Access</h2>
            </div>
          </div>
        </div>
        <div className="h-[80vh] overflow-hidden ">
        <h1 className="bg-blue-950 p-4 text-center text-white m-8 text-xl md:text-2xl rounded-lg font-bold mb-20">
               Testimonials
              </h1>
              <Testimonial/>
        </div>
      </div>
    </>
  );
}

export default Home;

