import React, { useState } from "react";
import { BsSun } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsXLg } from "react-icons/bs";
const Nav = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  console.log(show);

  return (
    <div className=" fixed bg-opacity-95 top-0 bg-nav   w-full shadow-lg z-[2] ">
      <div className=" sm:w-[90%] sm:mx-auto w-[85%] mx-auto p-4 flex justify-between items-center z-[2]">
        <div
          className={`w-[50%] h-[100vh] bg-bg absolute top-0 left-0 z-[-2] duration-200 ease-linear md:hidden ${
            show
              ? "translate-y-[0%] delay-150"
              : "translate-y-[-100%] delay-150"
          }`}
        ></div>
        <div
          className={`w-[50%] h-[100vh] bg-bg absolute top-0 right-0 z-[-2] duration-200 ease-linear md:hidden ${
            show
              ? "translate-y-[0%] delay-300"
              : "translate-y-[-100%] delay-300"
          }`}
        ></div>
        <div>
          <div className="  flex items-center text-2xl font-[400]">
            <a href="#main" className=" duration-300 hover:text-gen cursor-pointer text-white">
              NawNaw
            </a>
            <p className="text-gen ">.dev</p>
          </div>
        </div>
        <div
          className={` md:flex-row  ${
            show ? "translate-y-0 " : "translate-y-[-100%]"
          } flex flex-col md:translate-y-0 duration-500   md:static space-y-2 md:space-y-0 absolute items-center  left-0 top-0   w-full z-[4]  md:space-x-6 text-lg md:h-auto md:w-auto h-[100vh] justify-center`}
        >
          <a
            href="#pone"
            className=" text-white  hover:text-gen  cursor-pointer  "
          >
            Who am i?
          </a>
          <a
            href="#pthree"
            className=" text-white  hover:text-gen cursor-pointer "
          >
            Project
          </a>
          <a href="#sk" className=" text-white  hover:text-gen cursor-pointer ">
            My skill
          </a>
          <a
            href="#contact"
            className=" text-white  hover:text-gen cursor-pointer "
          >
            Contact
          </a>
        </div>
        <div
          onClick={handleShow}
          className=" text-lg md:hidden text-white cursor-pointer  block z-[999]"
        >
          {show ? <BsXLg /> : <RxHamburgerMenu />}
        </div>
      </div>
    </div>
  );
};

export default Nav;
