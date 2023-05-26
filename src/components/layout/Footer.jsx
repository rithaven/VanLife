import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center bg-black ">
      <Link to="/">
        <h2 className="p-16 text-3xl text-gray-400">@2023 #VANILIFE</h2>
      </Link>
    </div>
  );
};

export default Footer;
