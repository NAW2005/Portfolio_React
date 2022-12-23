import React from "react";
import photo1 from "../imgs/crypto.jpg";
import photo2 from "../imgs/Google-Contacts-1.png";
import photo3 from "../imgs/eco.png";
import photo4 from "../imgs/social.png";

import { BsGithub } from "react-icons/bs";

const Pagethree = () => {
  // const nav =
  const handleClick = () => {
    console.log("aa");
  };
  const info = [
    {
      id: "1",
      photo: <photo1 />,
      title: "Crypto API",
      para: "My Crypto API  developed with React, styled-components library is used for styling and Tailwind-CSS supported.",
      teno: "bt",
    },
    // {
    //   id: "2",
    //   photo: "",
    //   title: "",
    //   para: "",
    //   teno: "",
    // },
    // {
    //   id: "3",
    //   photo: "",
    //   title: "",
    //   para: "",
    //   teno: "",
    // },
    // {
    //   id: "4",
    //   photo: "",
    //   title: "",
    //   para: "",
    //   teno: "",
    // },
  ];
  return (
    <div className=" bg-bg3 py-10" id="pthree">
      <div>
        <h1 className=" text-white font-[500] text-[30px] text-center">
          Featured Projects
        </h1>
      </div>
      <div className=" text-center text-white">
        <p>“Talk is cheap. Show me the code”? I got you.</p>
        <p>Here are some of my projects you shouldn't misss</p>
      </div>
      <div className=" lg:flex-row  lg:mx-auto  lg:justify-between space-y-5 md:mx-auto md:w-[90%] md:py-5  mx-auto  lg:p-0  md:p-0   sm:p-0  lg:w-[70%]  sm:w-[70%] sm:flex-col sm:mx-auto sm:flex w-[90%] md:flex md:flex-row md:flex-wrap py-10">
        <div className=" lg:w-[45%]  md:w-[45%] md:mr-7 sm:py-5 lg:py-20 sm:w-[100%] w-[100%]   space-y-3 ">
          <a href="https://crypto-naw.netlify.app" target={'_blank'} className="">
            <img
              src={photo1}
              className=" lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] h-[270px] rounded-md cursor-pointer"
              alt=""
            />
          </a>
          <div className="  md:w-[100%] flex justify-between sm:w-[100%]">
            <h1 className=" text-gen text-lg">Crypto API</h1>
            <a
              target="_blank"
              href="https://github.com/NAW2005/New-Crypto-API__React"
            >
              <BsGithub className=" hover:scale-[1.1] duration-500 text-white hover:cursor-pointer  text-xl" />
            </a>
          </div>
          <p className=" sm:w-[100%] md:w-[100%]  text-sm text-white">
            My Crypto API developed with React and tailwind using crypto
            api.This project is only to watch crypto price in real time data.And
            this website is created with unique color style and UI design.
          </p>
          <div className=" flex space-x-3 w-[20px]">
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">React</p>
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">
              TailwindCSS
            </p>
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">Axios</p>
          </div>
        </div>
        <div className="lg:w-[45%]   lg:translate-y-[-20px] md:w-[45%] lg:py-20 sm:py-0 sm:w-[100%] w-[100%] space-y-3">
          <a href="https://polite-torte-660654.netlify.app" target={'_blank'} className="">
            <img
              src={photo2}
              className=" md:w-[100%] sm:w-[100%] lg:w-[100%]  h-[270px] rounded-md  cursor-pointer"
              alt=""
            />
          </a>
          <div className=" md:w-[100%] sm:w-[100%] flex justify-between">
            <h1 className=" text-gen text-lg">Google Contacs</h1>
            <a
              target="_blank"
              href="https://github.com/NAW2005/Google-Contact-React-RTKQ"
            >
              <BsGithub className=" hover:scale-[1.1] duration-500 text-white hover:cursor-pointer  text-xl" />
            </a>
          </div>
          <p className=" md:w-[100%] sm:w-[100%] text-sm text-white">
            This is my google contact website.Authentication and authorization
            is control using rtk Query and CRUD is fully functional.Can be add
            more account and contact can also be added.
          </p>
          <div className=" flex space-x-3 w-[100%]">
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">React</p>
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">
              TailwindCSS
            </p>
            <p className=" text-sm py-[0.1rem] lg:w-auto px-3 bg-bg4 text-white">
              Redux Toolkit Query
            </p>
          </div>
        </div>
        <div className=" lg:w-[45%] md:w-[45%] md:mr-7 sm:py-0 lg:py-5 sm:w-[100%] w-[100%]   space-y-3 ">
          <a href="https://ecommerce-naw.netlify.app" target={'_blank'} className=" ">
            <img
              src={photo3}
              className=" md:w-[100%]  sm:w-[100%] lg:w-[100%] h-[270px]  rounded-md cursor-pointer"
              alt=""
            />
          </a>
          <div className=" md:w-[100%] sm:w-[100%] flex justify-between">
            <h1 className="  text-gen text-lg">E-commerce</h1>
            <a
              target="_blank"
              href="https://github.com/NAW2005/E-commerce-Project-white-React"
            >
              <BsGithub className=" hover:scale-[1.1] duration-500 text-white hover:cursor-pointer  text-xl" />
            </a>
          </div>
          <p className=" md:w-[100%] sm:w-[100%] text-sm text-white">
            This is my Ecommerce page with fully function logic. This project
            contain add to card and other features ,such as unique animation and
            keyframes css.
          </p>
          <div className=" flex space-x-3 w-[20px]">
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">React</p>
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">
              TailwindCSS
            </p>
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">Fetch</p>
          </div>
        </div>
        <div className=" lg:w-[45%] lg:mr-0 md:w-[45%] md:mr-10  sm:py-0 lg:py-5 sm:w-[100%] w-[100%]   space-y-3 ">
          <a href="https://facefook-nawnaw.netlify.app" target={'_blank'} className=" ">
            <img
              src={photo4}
              className=" md:w-[100%] w-[100%]  sm:w-[100%] lg:w-[100%] h-[270px]  rounded-md cursor-pointer"
              alt=""
            />
          </a>
          <div className=" md:w-[100%] sm:w-[100%] flex justify-between">
            <h1 className="  text-gen text-lg">Facefook Social-Media</h1>
            <a target='_blank' href="https://github.com/NAW2005/Social-Media-React">
            <BsGithub className=" hover:scale-[1.1] duration-500 text-white hover:cursor-pointer  text-xl" />
            </a>
          </div>
          <p className=" md:w-[100%] sm:w-[100%] text-sm text-white">
            My facefook social media prjects with react and tailwind css.This
            project is design and implement with most{" "}
            <span className="text-indigo-400">UI Principles.</span>Currently not
            done but i will update it in the future.
          </p>
          <div className=" flex space-x-3 w-[20px]">
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">React</p>
            <p className=" text-sm py-[0.1rem] px-3 bg-bg4 text-white">
              TailwindCSS
            </p>
          </div>
        </div>
      </div>
      <div className=" text-center">
        <p className=" text-sm text-white sm:text-lg">
          Other projects can be explored in my&nbsp;
          <a target={"_blank"} href="https://github.com/NAW2005" className="  cursor-pointer  underline text-gen">
            github profile
          </a>
        </p>
        <p></p>
      </div>
    </div>
  );
};

export default Pagethree;
