"use client";
import Lottie from "lottie-web";
import {React,useEffect,useRef} from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Body = () => {
  const animationData = require("../../../public/assets/projects.json");

  const [text] = useTypewriter({
    words: [
      "I am Vrushank💖",
      "Learn With Me!👩‍💻",
      "Check my profile✅",
      "Boom Boom🔥",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const container=useRef(null)
  useEffect(()=>{
    Lottie.loadAnimation(
        {
            container:container.current,
            loop:true,
            autoplay:true,
            renderer:"svg",
            animationData:animationData
        }
    )
  },[animationData])

  
  return (
    <section>
      <div className="container mx-auto">
        {/* First Part */}
        <div className="flex flex-col-reverse justify-center md:flex-row md:gap-4">
          {/* Left part */}
          <div className="w-full flex flex-col items-center md:w-2/4 md:mt-40">
            <h1 className=" text-3xl lg:text-5xl font-semibold">
              <span className="text-zinc-400 mr-2 md:text-zinc:800">Hey Folks </span>
              <span className="text-white mr-2">{text}</span>
              <Cursor cursorColor="blue" />
            </h1>
            <p className="text-white text-xl m-2 md:text-2xl font-serif">
              I am a passionate web technology enthusiast with a strong drive to
              excel in the field of full-stack development.
            </p>
            <div className="flex space-x-4 m-2">
              <button className="rounded p-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer">
                Learn More
              </button>
              <button className="rounded p-2 bg-gray-700 hover:bg-gray-400 text-white cursor-pointer">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right part */}
          {/* Animation Data is being shown here */}
          <div className="w-full md:w-1/2 z-auto md:mt-2">
            <div className="container mx-auto" ref={container}></div>
          </div>
        </div>

        {/* Second part */}
      </div>
    </section>
  );
};

export default Body;
