"use client"

import {React,useState,useEffect} from "react";
import Image from "next/image";
import "../styles/Experience.css";
import { groq } from "next-sanity";
import { client } from "../../../developer-portfolio/sanity";

async function getData(){
  const data = await client.fetch(groq`
  *[_type == "experience"]
  `)
  return data;
}

const Experience = () => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    getData().then((data)=>{
        setPosts(data)
    }).catch((error)=>
    console.log("Error occured while fetching data : ", error))
  }

  ,[])

  return (
    <div>
      <h1 className="tracking-wider text-3xl md:text-5xl mx-auto text-center uppercase text-gray-400 font-extrabold mt-10 md:mt-0">
        Experience
      </h1>
      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {posts?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md m-4 box-container"
            key={index}
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-50 h-32 mx-auto md:mx-0 object-contain"
                src={item?.image}
              />
            </div>
            <h4 className="text-xl text-white font-bold mb-2 mt-4">
              {item?.name}
            </h4>
            <ul className="text-xl text-white font-light text-left list-disc">
              {item?.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
