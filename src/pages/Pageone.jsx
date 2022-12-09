import React from "react";
// import men from "../imgs/Wamwam.svg";
import Lottie from "lottie-react";
import loti from "../animate/117909-meditation-man.json";
import { BsMouse } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";

const Pageone = () => {
  return (
    <div className="bg-bg" >
      <div className="  sm:py-16 lg:py-32  justify-center flex ">
        <div className=" lg:w-[70%] sm:w-full sm:p-7 p-3 md:w-[80%]    flex flex-col lg:flex-row-reverse mt-[50px] lg:mt-0">
          <div className="w-[70%] mx-auto  lg:w-[40%]  ">
            <Lottie animationData={loti} className="" loop={true} />
          </div>
          <div className="  space-y-5 lg:w-[60%] md:space-y-4  sm:space-y-1  lg:space-y-5 w-full  ">
            <div className=" space-y-1 md:space-y-2 sm:space-y-4 lg:space-y-1">
              <p className="  text-gen font-roboto space-y-1 ">Hi my name is</p>
              <h1 className=" text-white sm:text-[30px]' md:text-[40px] text-[30px] lg:text-[50px] font-bold sm:leading-[50px] leading-[20px]">
                Sin War Naw
              </h1>
            </div>
            <div>
              <p className=" text-gen md:text-[40px] text-[25px] sm:text-[30px]   lg:text-[40px] font-[500] sm:leading-[40px]  leading-[20px]">
                A Front-End Developer
              </p>
            </div>
            <div className=" space-y-1 ">
              <p className=" text-white lg:text-[15px] ">
                I'm a front-end developer based in Yangon, Myanmar
              </p>
              <p className=" text-white ">
                I am passionate about writing codes and developing web
                applications to solve real-life challenges.
              </p>
              <p className=" text-white  sm:text-[15px">
                I usually craft front-end with React,Redux
                Toolkit,TailWindCss,Bootstrap.
              </p>
            </div>
            <div>
              <button className=" font-roboto hover:bg-greenhover bg-gen py-2 px-3  text-sm    sm:text-lg rounded-md">
                Contact me!
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="  lg:block md:hidden sm:hidden hidden space-y-1  animate-bounce cursor-pointer w-[50px]  text-lg  text-white mx-auto hover:text-gen  ">
        <p className=" text-center">Scrol</p>
        <p className="">
          <BsMouse className=" mx-auto" />
        </p>
        <p>
          <SlArrowDown className=" mx-auto text-sm" />
        </p>
      </div>
    </div>
  );
};

export default Pageone;
