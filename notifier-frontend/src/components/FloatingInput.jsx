import React from "react";

const FloatingInput = ({ type, onChange, name, value, required, label }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
        placeholder=" "
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#09455d] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
