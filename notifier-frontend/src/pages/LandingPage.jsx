import React from "react";
import logo from "../assets/icons/logo.png";
import picture1 from "../assets/images/office-coworkers-celebrating-event-with-balloons 1.png";
import picture2 from "../assets/images/front-view-family-celebrating-birthday-together (1) 1.png";
import picture3 from "../assets/images/front-view-family-celebrating-birthday-together (2) 1.png";
import picture4 from "../assets/images/portrait-family-celebrating-birthday-online-video-call-while-staying-home 1.png";
import picture5 from "../assets/images/front-view-family-celebrating-birthday-together 1.png";
import {Link} from "react-router-dom"

import Header from "../components/LandingHead";

const LandingPage = () => {
  return (
    <main className="flex flex-col min-h-screen w-screen">
      <Header />

      <section className="flex w-full h-[50vh]">
        <div className="w-2/5 h-full relative overflow-hidden">
          <img
            src={picture1}
            alt=""
            className="w-full h-full object-cover object-center z-0"
          />
          <img
            src={picture2}
            alt=""
            className="absolute top-[40%] w-full z-10"
            style={{ height: "60%" }}
          />
        </div>

        <div className="w-1/5 h-full overflow-hidden">
          <img src={picture3} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="w-2/5 h-full relative overflow-hidden">
          <img
            src={picture4}
            alt=""
            className="w-full h-full object-cover object-center z-0"
          />
          <img
            src={picture5}
            alt=""
            className="absolute top-[40%] object-cover object-center w-full z-10"
            style={{ height: "60%" }}
          />
        </div>
      </section>
      <section className="flex flex-col   text-6xl  gap-6 items-center text-customblue pt-8">
        <h1>Never Forget those who matter </h1>
        <h4 className="text-4xl ">
          Your #1 for birthday reminders and planning
        </h4>
        <button className="bg-customblue w-[400px] h-[50px] mt-[30px] self-auto text-3xl text-white rounded-3xl">
          <Link to="/auth">Log in</Link>
          
        </button>
      </section>
    </main>
  );
};

export default LandingPage;
