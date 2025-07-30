import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-center items-center py-5 gap-5">
      <div className="l-side">
        <img className="h-auto w-96" src={assets.contact_img} alt="" />
      </div>
      <div className="r-side ">
        <h3 className="font-bold text-2xl">CodeWare It</h3>
        <p className="text-gray-700">Mail: codewareIt@gamil.com</p>
        <p className="text-gray-700">Phone: 888-000-1111</p>
        <p className="text-gray-700"></p>
      </div>
    </div>
  );
};

export default Contact;
