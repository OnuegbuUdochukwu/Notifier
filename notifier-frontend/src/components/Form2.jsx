import React from "react";
import FloatingInput from "./FloatingInput";
import { useState } from "react";
import logo from "../assets/icons/Vector.png";
import yahoo from "../assets/icons/logos_yahoo.png";
import google from "../assets/icons/devicon_google.png";
import other from "../assets/icons/vscode-icons_file-type-outlook.png";

const Form = () => {
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
  return (
    <div className="flex justify-center  bg-white border rounded-xl px-10 py-16  gap-16 ">
      <div className="flex flex-col gap-12 md:w-1/2 text-[#09455D]">
        <div className="flex gap-4 mb-10">
          <img src={logo} alt="notifier logo" className="w-12 h-12"/>
          <div className="flex flex-col">
            <h1 className="text-2xl">Notifier</h1>
            <p>Never forget the people who matter</p>
          </div>
        </div>
        <p className="text-lg ml-10">Sign Up</p>
      </div>
      <div className="w-1/2">
        {" "}
        <form
          onSubmit={handleSubmit}
          className="flex text-[#09455D] flex-col gap-5"
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
              continue
            </button>
          </div>
          <div className="flex justify-center items-center gap-3">
            <img src={yahoo} alt="" className="w-16"/>
            <img src={other} alt="" />
            <img src={google} alt="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
