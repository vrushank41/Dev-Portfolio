"use client";
import React from "react";
import { useForm } from "react-hook-form";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";

export const Contact = () => {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:vrushankno2@gmail.com?subject=${formData.subject}&body=${formData.body},${formData.message},(${formData.email})`;
  };

  return (
    <>
      <h1 className="tracking-wider text-3xl md:text-5xl mx-auto text-center uppercase text-gray-400 font-extrabold mt-10 md:mt-0">
        Contact
      </h1>
      <div className="flex flex-col justify-center items-center mt-5">
        <span className="flex items-center text-white font-bold text-mono">
          <BadgeRoundedIcon sx={{ color: "white" }} fontSize="large" />
          <Mailto
            email="vrushankno2@gmail.com"
            subject="Hello & Welcome"
            body="Hello world!"
          >
            vrushankno2@gmail.com
          </Mailto>
        </span>
        <span className="flex items-center text-white font-bold text-mono">
          <FmdGoodRoundedIcon sx={{ color: "white" }} fontSize="large" />
          <h1>Bengaluru,560085</h1>
        </span>
      </div>

      <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-60 sm:w-full mx-auto justify-center items-center"
        >
          <div className="space-y-2 flex flex-col md:flex">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="outline-none bg-slate-400/10 rounded-sm w-80  px-6 py-4  text-gray-100 placeholder-gray-500"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-gray-100 placeholder-gray-500"
            />
          </div>

          <input
            placeholder="Subject"
            {...register("subject")}
            className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-gray-100 placeholder-gray-500"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-gray-100 placeholder-gray-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 px-4 py-3 rounded-sm font-bold w-80  text-white hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
    </>
  );
};
