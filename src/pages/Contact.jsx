import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import {BsHeart} from 'react-icons/bs'

const Contact = () => {
  return (
    <div className=" bg-bg2 py-20" id="contact">
      <h1 className=" w-full text-2xl text-center text-white sm:text-[30px] font-[500]">
        Contact
      </h1>
      <div className=" text-[14px] sm:text-[15px]  space-y-1 text-center py-10">
        <p className=" text-white text-xl sm:text-[27px] text-center font-[500]">
          Let's be awesome together!
        </p>
        <p className=" text-white ">
          As a dev, I do love coding and always looking for new challenges.
          Thus, if
        </p>
        <p className=" text-white ">
          you have some opportunities/challenges or just want to build awesome
        </p>
        <p className=" text-white">
          things together, don't hesitate to contact me!
        </p>
      </div>
      <div className=" w-full text-center py-5">
        <button className=" font-roboto hover:bg-greenhover bg-gen py-2 px-3  text-sm  rounded-sm sm:text-lg">
          Get in touch!
        </button>
      </div>
      <div className=" flex items-center space-x-5 justify-center text-white  text-2xl">
        <p className=" hover:text-gen duration-300 cursor-pointer">
          <AiFillGithub />
        </p>
        <p className=" hover:text-gen duration-300 cursor-pointer">
          <BsFacebook />
        </p>
        <p className=" hover:text-gen duration-300 cursor-pointer">
          <BsInstagram />
        </p>
      </div>
      <div className=" space-x-1 items-center mt-32  text-lg text-white  justify-center flex">
        <p>Coded with</p>
        <p><BsHeart/></p>
        <p>by Sin War Naw</p>
      </div>
    </div>
  );
};

export default Contact;
