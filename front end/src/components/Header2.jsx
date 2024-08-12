import React from "react";
import logo from "../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
   const navigate=useNavigate()
  const handleClick=()=>{
    

    navigate("/createAnnonce");
  }

  return (
    <header className="bg-gradient-to-l from-custom-blue  to-sky-200   flex w-full  justify-between mb">
      <Link to="/">
        <div className="flex my-3  mx-10 items-center space-x-2">
          <img src={logo}></img>
          <p className="font-bold text-teal-900 text-2xl">كرْيتي</p>
        </div>
      </Link>

      <div className="flex items-center space-x-4 mx-10">
        
         
          <button className="bg-white hover:bg-custom-orange rounded-xl p-2 text-xs font-bold text-custom-orange hover:text-white  border-[2px]   border-custom-orange hover:border-white"
           onClick={handleClick}>
            Publier annonce
          </button> 
        

        <Link to="/SignUp">
          <button className="font-semibold text-sm text-white hover:text-custom-indigo">
            Sign In / Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
