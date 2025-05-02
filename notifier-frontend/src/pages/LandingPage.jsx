import React from "react";
import picture from "../assets/images/family.png";
// import women from '..//assets/images/women.png'

import { Link } from "react-router-dom";

import Header from "../components/LandingHead";

const LandingPage = () => {
  return (
    <main className="min-h-screen w-screen">
       <Header />

      <section
        style={{
          backgroundImage: `url(${picture})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className={`flex relative z-10 w-screen h-[89dvh]`}
      >
       
        
        <div className="absolute flex justify-center items-center z-0 inset-0 bg-black/40 w-full h-full">
        
          <div className="text-white flex items-center justify-center gap-4 flex-col">
            <h1 className="text-5xl font-bold text-center">Notifier</h1>
            <p className="font-semibold text-2xl">
              never forget the people you love
            </p>
            <Link to="/auth"> <button className="bg-blue-500 cursor-pointer transition-all px-4 py-2 rounded-md hover:bg-blue-800">
              Login
            </button></Link>
           
          </div>
        </div>
      </section>
    </main>
  );
};

export default LandingPage;
