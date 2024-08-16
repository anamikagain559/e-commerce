import React from "react";
import { ImFacebook } from "react-icons/im";
import { FaBehance } from "react-icons/fa";
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { PiSkypeLogoBold } from "react-icons/pi";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaPenFancy } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" lg:p-10 p-5 bg-black text-base-content  ">
      <div className="w-[1280px] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-10">
        <nav className=" lg:p-5 ">
          <h6 className=" text-white mb-6 text-2xl font-bold uppercase">
            <span className="bg-red-500 text-white px-2">Infinite</span>{" "}
            Insights
          </h6>
          <p className="text-white lg:w-full w-[380px]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean
            commodo ligula eget dolor aenean massa cum sociis natoque penatibus
            et magnis cum aenean massa cum sociis natoque penatibus
          </p>
          <div className="flex gap-4 mt-4 flex-wrap w-[400px]">
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <ImFacebook />
            </button>
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <FaBehance />
            </button>

            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <FaVimeoV />
            </button>
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <PiSkypeLogoBold />
            </button>
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <FaYoutube />
            </button>
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <CiInstagram />
            </button>
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <FaLinkedinIn />
            </button>
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <FaPinterestP />
            </button>
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <GrTwitter />
            </button>
            <button className=" text-white bg-[#151515] p-4 rounded-lg">
              <FaFacebookMessenger />
            </button>
          </div>
        </nav>
        <nav>
          <h6 className="text-xl font-bold text-white">More From Us</h6>
          <div className="flex shadow-xl gap-4 rounded-xl">
              <figure>
                <img
                  src="https://i.ibb.co/89kGp7x/pexels-helena-lopes-693268-500x350.jpg"
                  alt="Movie"
                  className="rounded-xl mt-2 lg:h-[120px] lg:w-[200px] h-[120px] w-[140px]"
                />
              </figure>
              <div className="my-4">
                <button className=" text-white flex px-1 py-[2px] mb-2 bg-amber-500 shadow-2xl rounded-md text-sm">
                  Inspiration
                </button>
                <p className="font-bold lg:text-lg  text-left mb-2 text-white lg:w-full w-2/3">
                  It’s Time To Look At The Best Structures Of Our Society
                </p>
                <div className="flex gap-4 text-[#b3b2b2]">
                  <div className="flex gap-1">
                    <IoPersonOutline className="mt-1 text-sm" />
                    <p className="text-sm">Spraya</p>
                  </div>
                  <div className="flex gap-1">
                    <FaPenFancy className="mt-1 text-sm" />
                    <p className="text-sm">July 24, 2019</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex shadow-xl gap-4 rounded-xl">
              <figure>
                <img
                  src="https://i.ibb.co/jyqkyr9/pexels-josh-hild-2422259-1000x650.jpg"
                  alt="Movie"
                  className="rounded-xl mt-2 lg:h-[120px] lg:w-[200px] h-[120px] w-[140px]"
                />
              </figure>
              <div className="my-4">
                <button className=" text-white flex px-1 py-[2px] mb-2 bg-amber-500 shadow-2xl rounded-md text-sm">
                  Inspiration
                </button>
                <p className="font-bold lg:text-lg text-white  text-left mb-2 lg:w-full w-2/3">
                  It’s Time To Look At The Best Structures Of Our Society
                </p>
                <div className="flex gap-4 text-[#b3b2b2]">
                  <div className="flex gap-1">
                    <IoPersonOutline className="mt-1 text-sm" />
                    <p className="text-sm">Spraya</p>
                  </div>
                  <div className="flex gap-1">
                    <FaPenFancy className="mt-1 text-sm" />
                    <p className="text-sm">July 24, 2019</p>
                  </div>
                </div>
              </div>
            </div>
        </nav>
        <nav>
        <h6 className="text-xl font-bold text-white">Categories</h6>
          <div className="flex gap-7 mt-5  flex-wrap w-[400px]">
          <div className="flex gap-7 bg-[#151515] p-4 rounded-lg border border-solid border-gray-800 shadow-xl ">
                <div className="text-white ">
                    <h3 className="text-lg font-bold">Active</h3>
                    <p className="text-sm">11 Posts</p>
                </div>
                <div >
                    <img className="rounded-[50%] w-12 h-12" src="https://i.ibb.co/jyqkyr9/pexels-josh-hild-2422259-1000x650.jpg" alt="" />
                </div>
            </div>
            <div className="flex gap-7 bg-[#151515] p-4 rounded-lg border border-solid border-gray-800 shadow-xl ">
                <div className="text-white ">
                    <h3 className="text-lg font-bold">Active</h3>
                    <p className="text-sm">11 Posts</p>
                </div>
                <div >
                    <img className="rounded-[50%] w-12 h-12" src="https://i.ibb.co/yBdLWCp/The-Pros-and-Cons-of-Living-in-Malaysia.webp" alt="" />
                </div>
            </div>
            <div className="flex gap-7 bg-[#151515] p-4 rounded-lg border border-solid border-gray-800 shadow-xl ">
                <div className="text-white ">
                    <h3 className="text-lg font-bold">Active</h3>
                    <p className="text-sm">11 Posts</p>
                </div>
                <div >
                    <img className="rounded-[50%] w-12 h-12" src="https://i.ibb.co/yBdLWCp/The-Pros-and-Cons-of-Living-in-Malaysia.webp" alt="" />
                </div>
            </div>
            <div className="flex gap-7 bg-[#151515] p-4 rounded-lg border border-solid border-gray-800 shadow-xl ">
                <div className="text-white ">
                    <h3 className="text-lg font-bold">Active</h3>
                    <p className="text-sm">11 Posts</p>
                </div>
                <div >
                    <img className="rounded-[50%] w-12 h-12" src="https://i.ibb.co/YW087L4/herdian-indraputra-6k-NVJ1fr3-Ug-unsplash-380x380.jpg" alt="" />
                </div>
            </div>
            <div className="flex gap-7 bg-[#151515] p-4 rounded-lg border border-solid border-gray-800 shadow-xl ">
                <div className="text-white ">
                    <h3 className="text-lg font-bold">Active</h3>
                    <p className="text-sm">11 Posts</p>
                </div>
                <div >
                    <img className="rounded-[50%] w-12 h-12" src="https://i.ibb.co/QH4L9NX/daniel-korpai-L8y01m-Tu-DZg-unsplash-scaled-500x350.jpg" alt="" />
                </div>
            </div>
            <div className="flex gap-7 bg-[#151515] p-4 rounded-lg border border-solid border-gray-800 shadow-xl ">
                <div className="text-white ">
                    <h3 className="text-lg font-bold">Active</h3>
                    <p className="text-sm">11 Posts</p>
                </div>
                <div >
                    <img className="rounded-[50%] w-12 h-12" src="https://i.ibb.co/zJf5vPk/chelsea-gates-c-Ej-1sfw3h-A-unsplash-500x350.jpg" alt="" />
                </div>
            </div>
          </div>
        </nav>
      </div>
      <hr className="lg:w-[1280px] w-[80%] mx-auto" />
      <div className="lg:w-[1280px] w-[80%] flex lg:justify-between mx-auto mt-7 lg:flex-row flex-col ">
        <p className="text-[#b3b2b2]">© Copyright 2024 Anamika. All rights reserved powered by Anamika</p>
        <div className="lg:block hidden">
          <ul className="flex justify-around gap-4 text-[#b3b2b2]">
            <li>
              <a title="" href="">
                About Us
              </a>
            </li>
            <li>
              <a title="" href="">
                Private policy
              </a>
            </li>
            <li>
              <a title="" href="">
                Forums
              </a>
            </li>
            <li>
              <a title="" href="">
                Community
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
