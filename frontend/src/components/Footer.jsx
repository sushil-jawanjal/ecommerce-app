import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className=" sm: grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo1} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600 text-justify">
            At ZyrahWear, quality isn't just a promise it's our foundation. We
            understand that clothing is more than just fabric it’s comfort,
            confidence, and expression. That’s why every piece in our
            collection.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91 4312563423</li>
            <li>support@zyrahwear.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ZyrahWear.com All-right reversed.
        </p>
      </div>
    </div>
  );
};

export default Footer;
