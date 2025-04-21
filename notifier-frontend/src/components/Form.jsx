import React from "react";
import FloatingInput from "./FloatingInput";
import { useState } from "react";
import logo from "../assets/icons/Vector.png";
import yahoo from "../assets/icons/logos_yahoo.png";
import google from "../assets/icons/devicon_google.png";
import other from "../assets/icons/vscode-icons_file-type-outlook.png";


const Form = ({message}) => {
    const handleClcik = () => {
        message(true)
    }
  const [formData, setFormData] = useState({
    password: "",
    username_email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //submit logic here once endpoint is ready
    console.log(formData);
  };
  return (
    <div className="flex flex-col md:flex-row justify-center border border-gray-400  bg-white rounded-xl px-10 py-16 gap-16 ">
      <div className="mb-6 md:mb-0 flex justify-between  flex-col md:w-1/2">
        <div className="flex  gap-3 mb-4 text-[#09455D]">
          <img src={logo} alt="notifier logo" className="w-12 h-12" />
          <div className="flex flex-col">
            <h1 className="text-2xl ">Notifier</h1>
            <p className="text-sm">Never forget the people who matter</p>
          </div>
        </div>
        <div 
          onClick={handleClcik} 
          className="cursor-pointer hover:text-blue-600 transition-all"
        >
          <p className="text-gray-500">Create account →</p>
        </div>
      </div>
      <div className=" md:w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <FloatingInput
            type="text"
            name="username"
            value={formData.username}
            label="Username"
            required
            onChange={handleChange}
          />
          <FloatingInput
            type="password"
            name="password"
            value={formData.password}
            label="Password"
            required
            onChange={handleChange}
          />
          <p className="text-xs text-gray-600 -mt-3 hover:text-blue-600 transition-all cursor-pointer">forgot email password?</p>
          <button className="bg-[#09455d] py-2 text-white rounded-full">
            Sign In
          </button>
         <div className="flex justify-center items-center gap-3">
                     <img src={yahoo} alt="" className="w-16 cursor-pointer"/>
                     <img src={other} alt="" className="cursor-pointr"/>
                     <img src={google} alt="" className="cursor-pointer"/>
                   </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
