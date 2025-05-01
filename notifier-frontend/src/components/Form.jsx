import React from "react";
import FloatingInput from "./FloatingInput";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/icons/Vector.png";
import yahoo from "../assets/icons/logos_yahoo.png";
import google from "../assets/icons/devicon_google.png";
import other from "../assets/icons/vscode-icons_file-type-outlook.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import useAuthStore from "@/hooks/useAuthStore";
import axios from "axios";

const Form = ({message}) => {
  const [isOpen,setIsOpen] = useState(true);
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.setToken);
  const handlePassword = ()=>{
        setIsOpen(!isOpen)
  }
    const handleClcik = () => {
        message(true)
    }
  const [formData, setFormData] = useState({
    password: "",
    email : "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const url = "http://localhost:5000/api/auth/login";
    try {
      const { data } = await axios.post(url, {
        password: formData.password,
        email: formData.email
      });
        if (data.user) {
          alert("Logged in successfully");
          login(data.user.name);
          navigate("/dashboard");
        }
    } catch (error) {
      console.log("Error is", error);
      alert("Error logging in.");
    }
 
    //submit logic here once endpoint is ready
   
  };
  return (
    <div className="flex flex-col md:flex-row justify-center border border-gray-400  bg-white rounded-xl px-10 py-16 gap-16 ">
      <div className="mb-6 md:mb-0 flex justify-between  flex-col md:w-1/2">
        <div className="flex  gap-3 mb-4 text-[#09455D]">
          <img src={logo} alt="notifier logo" className="w-12 h-12" />
          <div className="flex flex-col">
            <h1 className="text-4xl ">Notifier</h1>
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
            type="email"
            name="email"
            value={formData.email}
            label="Email"
            required
            onChange={handleChange}
          />
          <div className="relative">
              <FloatingInput
            type={isOpen?"text":"password"}
            name="password"
            value={formData.password}
            label="Password"
            required
            onChange={handleChange}
          />
          <button 
        type="button" 
        className="absolute top-3 z-10 right-3" 
        onClick={handlePassword}
    >
  {isOpen ? 
    <IoEyeOutline className="w-5 h-5 text-gray-500 hover:text-blue-600"/> : 
    <IoEyeOffOutline className="w-5 h-5 text-gray-500 hover:text-blue-600"/>
  }
</button>
          </div>
        
          <p className="text-xs text-gray-600 -mt-3 hover:text-blue-600 transition-all cursor-pointer">forgot email password?</p>
          <button className="bg-[#09455d] py-2 text-white rounded-full">
            Sign In
          </button>
         <div className="flex justify-center items-center gap-3">
                     <img src={yahoo} alt="" className="w-16 h-auto cursor-pointer"/>
                     <img src={other} alt="" className=" w-6 h-auto hover:opacity-80 cursor-pointer"/>
                     <img src={google} alt="" className=" w-6 h-auto hover:opacity-80 cursor-pointer"/>
                   </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
