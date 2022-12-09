import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiTailwindcss } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { SiRedux } from "react-icons/si";
import { DiGit } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { DiSass } from "react-icons/di";

const Skill = () => {
  return (
    <div className=" bg-bg" id="sk">
      <div className=" space-y-10 py-20">
        <div>
          <h1 className=" text-white font-[500] text-[30px] text-center">
            Skills
          </h1>
          <p className=" text-gen text-[20px] text-center">Technologies</p>
        </div>
        <div className=" space-y-10  ">
          <div className="sm:w-[100%] w-[100%] justify-evenly  md:justify-center lg:w-[100%] mx-auto md:w-[100%] ml-[5px] md:ml-0 sm sm:flex sm:items-center flex flex-wrap space-x-2 sm:space-x-5">
            <p className="  p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <AiFillHtml5 className=" text-red-500" />
            </p>

            <p className=" p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <FaCss3Alt className=" text-blue-500" />
            </p>
            <p className=" p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <SiJavascript className=" text-yellow-400" />
            </p>
            <p className=" p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <BsFillBootstrapFill className=" text-violet-500" />
            </p>
            <p className=" p-0 sm:p-5  text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <SiTailwindcss className=" text-blue-500" />
            </p>
          </div>
          <div className=" w-[100%] justify-evenly md:justify-center sm:w-[100%] lg:w-[100%] mx-auto md:w-[100%] ml-[5px] md:ml-0 sm sm:flex sm:items-center flex items-center space-x-2 sm:space-x-5">
            <p className=" p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <GrReactjs className=" text-blue-600" />
            </p>
            <p className=" p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <SiRedux className=" text-blue-800" />
            </p>
            <p className=" p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <DiGit className=" text-red-500" />
            </p>
            <p className=" p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <DiLinux className=" text-yellow-500" />
            </p>
            <p className=" p-0 sm:p-5 text-[50px] sm:text-[40px] md:text-[90px] bg-bg2">
              <DiSass className=" text-pink-500" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
