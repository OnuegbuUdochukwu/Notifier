import React from 'react';
import logo from "../assets/icons/logo.png";
import { Link } from "react-router-dom";


const LandingHead = ()=> {
    return (
      <header className="bg-customblue text-white h-20 pl-10 pr-10 pt-2 pb-2 flex items-center justify-between ">
        <img src={logo} alt="notifiter-logo" className="" />
        <nav className="flex justify-end">
          <ul className='flex  gap-20 text-2xl'>
            <Link to="#">About</Link>
            <Link to="#">Contact Us</Link>
            <Link to="#">Log In</Link>
          </ul>
        </nav>
      </header>


        
    );


}




export default LandingHead 