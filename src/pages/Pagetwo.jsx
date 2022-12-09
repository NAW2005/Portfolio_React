import React from "react";
import seng from "../imgs/seng.jpg";

const Pagetwo = () => {
  return (
    <div className="bg-bg2" id={'pone'}>
      <div className=" pb-1 lg:hidden text-center md:block sm:block">
        <h1 className=" text-white lg:py-0 text-[30px] font-[500] sm:py-5  ">
          Who am I?
        </h1>
      </div>
      <div className="  md:w-[90%]  lg:items-center lg:w-[70%] px-5 py-5 md:py-0  md:space-x-0 lg:space-x-5 lg:py-20 mx-auto md:flex  lg:flex">
        <div className="   md:w-[50%] lg:w[40%]  flex-col lg:flex lg:items-center sm:w-full  w-full">
          <img
            src={seng}
            className=" bg-gray-400 flex h-[320px] mx-auto sm:mx-auto w-[280px] "
            alt=""
          />
          <p className=" py-2 md:py-3  sm:text-sm md:text-sm  block lg:hidden md:block sm:block text-white font-roboto">
            I have over 1 and a half years of Learning experience in web
            application development_ including both frontend and Ui Desigin.
          </p>
        </div>
        <div className=" md:py-0  md:w-[50%] lg:w-[60%] w-full sm:w-full">
          <div className=" md:hidden sm:hidden lg:block  hidden">
            <h1 className=" text-white lg:py-0 text-[30px] font-[500] sm:py-5  ">
              Who am I?
            </h1>
          </div>
          <div className="space-y-3 lg:space-y-5  md:space-y-0 py-0 lg:py-0  sm:space-y-5 ">
            <div className=" md:hidden  lg:block sm:hidden">
              <p className=" hidden text-white md:hidden sm:hidden lg:block font-roboto">
                I have over 2 and a half years of learning experience in web
                application development_ including both frontend and UI Design.
                I'm currently working as a frontend developer at a MMS-It
                company.
              </p>
            </div>
            <div className="">
              <p className=" text-white font-roboto">
                Here is my education background.
              </p>
            </div>
            <div>
              <h1 className=" text-gen text-lg font-roboto">
                Special Web Design
              </h1>
              <p className=" text-white ">
                Special Web Design Certified at MMS-it | 2021 ~ 2022
              </p>
              <div className=" text-white">
                <p>Studied Frontend Development and UI Design Principles</p>
              </div>
              <div>
                <p className=" text-white">
                  Certified with Google Contact Project
                </p>
              </div>
              <div className=" text-white">Got merit in 7 modules out of 9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagetwo;
