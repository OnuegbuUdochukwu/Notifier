import React from "react";
import FloatingInput from "./FloatingInput";
import { useState } from "react";
import logo from "../assets/icons/Vector.png";
import yahoo from "../assets/icons/logos_yahoo.png";
import google from "../assets/icons/devicon_google.png";
import other from "../assets/icons/vscode-icons_file-type-outlook.png";
<<<<<<< HEAD

const Form = () => {
=======
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"; 

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
>>>>>>> first-attempt-notifier
  const [formData, setFormData] = useState({
    password: "",
    username: "",
    email: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //submit logic here once endpoint is ready
    if (formData.password !== formData.confirmPassword) {
      alert("passwords do not match");
    }
    console.log(formData);
  };
<<<<<<< HEAD
  return (
    <div className="flex justify-center  bg-white border rounded-xl px-10 py-16  gap-16 ">
=======

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between bg-white border border-gray-500 rounded-xl p-12 w-full max-w-4xl gap-8">
>>>>>>> first-attempt-notifier
      <div className="flex flex-col gap-12 md:w-1/2 text-[#09455D]">
        <div className="flex gap-4 mb-10">
          <img src={logo} alt="notifier logo" className="w-12 h-12"/>
          <div className="flex flex-col">
<<<<<<< HEAD
            <h1 className="text-2xl">Notifier</h1>
=======
            <h1 className="text-4xl">Notifier</h1>
>>>>>>> first-attempt-notifier
            <p>Never forget the people who matter</p>
          </div>
        </div>
        <p className="text-lg ml-10">Sign Up</p>
      </div>
<<<<<<< HEAD
      <div className="w-1/2">
        {" "}
        <form
          onSubmit={handleSubmit}
          className="flex text-[#09455D] flex-col gap-5"
=======
      <div className="w-full md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="flex text-[#09455D] flex-col gap-3 w-full"
>>>>>>> first-attempt-notifier
        >
          <FloatingInput
            type="text"
            name="username"
            value={formData.username}
            label="Username"
            required
            onChange={handleChange}
          />
          <FloatingInput
            type="email"
            name="email"
            value={formData.email}
            label="Email"
            required
            onChange={handleChange}
          />
<<<<<<< HEAD
          <FloatingInput
            type="password"
            name="password"
            value={formData.password}
            label="Password"
            required
            onChange={handleChange}
          />
          <FloatingInput
            type="password"
            name="password"
            value={formData.password}
            label="Confirm Password"
            required
            onChange={handleChange}
          />
          <div className="flex justify-center gap-3 items-center">
            <p>Cancel</p>
            <button className="bg-[#09455D] rounded-full flex- justify-center items-center text-white px-4 py-1 ">
              Continue
            </button>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={yahoo} alt="" className="w-16"/>
            <img src={other} alt="" />
            <img src={google} alt="" />
=======
          <div className="relative">
            <FloatingInput
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              label="Password"
              required
              onChange={handleChange}
            />
            <button 
              type="button"
              onClick={togglePassword}
              className="absolute top-3 z-10 right-3"
            >
              {showPassword ? 
                <IoEyeOutline className="w-5 h-5 text-gray-500 hover:text-blue-600"/> : 
                <IoEyeOffOutline className="w-5 h-5 text-gray-500 hover:text-blue-600"/>
              }
            </button>
          </div>
          <div className="flex justify-center gap-4 items-center mt-4">
            <button type="button" className="px-6 py-2 text-gray-600 hover:text-gray-800">
              Cancel
            </button>
            <button className="bg-[#09455D] rounded-full px-6 py-2 text-white hover:bg-[#0a5470]">
              Continue
            </button>
          </div>
          <div className="flex justify-center items-center gap-6 mt-4">
            <img src={yahoo} alt="Yahoo login" className="w-16 h-auto hover:opacity-80 cursor-pointer"/>
            <img src={other} alt="Outlook login" className="w-6 h-auto hover:opacity-80 cursor-pointer"/>
            <img src={google} alt="Google login" className="w-6 h-auto hover:opacity-80 cursor-pointer"/>
>>>>>>> first-attempt-notifier
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
