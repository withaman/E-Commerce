import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex justify-between py-5">
        <div className="w-2/4">
          <img src={assets.logo} alt="" className="w-40 mb-2" />
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam
            reprehenderit hic nostrum quae consequatur dolore cumque tempora
            asperiores mollitia sunt repudiandae saepe ipsam, ab, ducimus natus
            officiis aut non.
          </p>
        </div>
        <div>
          <h2 className="font-bold py-4 ">COMPANY</h2>
          <ul className="text-gray-800">
            <Link className="flex flex-col gap-1" to="/">
              Home
              <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
            </Link>
            <Link className="flex flex-col gap-1" to="/Collection">
              Collection
              <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
            </Link>
            <Link className="flex flex-col gap-1" to="/About">
              About
              <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
            </Link>
            <Link className="flex flex-col gap-1" to="/Contact">
              Contact
              <hr className="hidden w-1/2 border-none h-[1.5px] bg-gray-700" />
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="font-bold py-4">GET IN TOUCH</h2>
          <ul className="text-gray-800">
            <a href="">+1-212-456</a>
            <br />
            <a href="">contact@onilinestore.com</a>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center py-4 text-gray-800">
        Copyright 2025@ codewareitpvt@onlinestore.com - All Right Reserved
      </p>
    </>
  );
};
export default Footer;
