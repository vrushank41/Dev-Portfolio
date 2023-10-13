"use client";
import React, { useEffect, useRef,useState } from "react";
import Skill from "./Skill";
import lottie from "lottie-web";
import { client } from "../../../developer-portfolio/sanity";
import { groq } from "next-sanity";

async function getData(){
  return client.fetch(groq`*[_type == "skill"]{
    image,
    progress,
    type
  }`);
}

function Skills() {
  
  const container = useRef(null);
  const animationData = require("../../../public/assets/hello.json");
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    getData()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);
  return (
    <div className="">
      <h3 className="tracking-wider text-3xl md:text-5xl mx-auto text-center uppercase text-gray-400 font-extrabold mt-10 md:mt-0">
        Skills
      </h3>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 grid grid-cols-3 gap-5">
          {posts?.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>

        <div className="md:w-1/2 z-auto pt-2 md:mt-0">
          <div className="container" ref={container}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;