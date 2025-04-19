import React from "react";
import background from "../assets/images/background.jpeg";
import { RiLockPasswordFill, RiEyeLine, RiEyeCloseLine } from "react-icons/ri";
import logo from "../assets/icons/Vector.png";
import yahoo from "../assets/icons/logos_yahoo.png";
import outlook from "../assets/icons/vscode-icons_file-type-outlook.png";
import google from "../assets/icons/devicon_google.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section
      style={{ backgroundImage: `url(${background})` }}
      className="w-screen h-screen flex justify-center items-center"
      aria-label="Sign up form section"
    >
      <div className="flex justify-center w-full h-full items-center text-[#09455D] bg-gradient-to-r from-white to-white/50 rounded-lg bg-cover border bg-no-repeat bg-center relative">
        <div className="flex flex-col bg-white w-lg py-16 px-5 border border-gray-400 rounded-md md:flex-row">
          <div className="flex gap-3 w-1/2">
            <img src={logo} alt="Notifier logo" className="size-10" />
            <div className="flex flex-col">
              <h1 className="text-3xl">Notifier</h1>
              <p>Never forget the people who matter</p>
            </div>
          </div>
          <form className="flex flex-col gap-4 mt-10" onSubmit={(e) => e.preventDefault()}>
            <div className="relative w-72">
              <input
                type="text"
                id="username"
                name="username"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                aria-required="true"
              />
              <label
                htmlFor="username"
                className="absolute text-xs text-gray-500 duration-300 transform -translate-y-3 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
              >
                Username
              </label>
            </div>
            <div className="relative w-72">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
                aria-required="true"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <RiEyeCloseLine className="text-xl" />
                ) : (
                  <RiEyeLine className="text-xl" />
                )}
              </button>
              <label
                htmlFor="password"
                className="absolute text-xs text-gray-500 duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 -pt-6 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 left-1"
              >
                Password
              </label>
              <a href="#" className="text-gray-500 text-sm hover:text-blue-600">Forgot password or email?</a>
            </div>
            <div className="flex items-center justify-center gap-4">
              <p>Create Account</p>
              <button 
                type="submit"
                className="bg-[#09455D] text-white rounded-full px-6 py-1 hover:bg-[#0a5470] focus:ring-2 focus:ring-blue-300"
                aria-label="Submit sign up form"
              >
                Next
              </button>
            </div>
            <div className="flex justify-center gap-3">
              <button type="button" aria-label="Sign up with Yahoo">
                <img src={yahoo} alt="Yahoo logo" className="hover:opacity-80" />
              </button>
              <button type="button" aria-label="Sign up with Outlook">
                <img src={outlook} alt="Outlook logo" className="hover:opacity-80" />
              </button>
              <button type="button" aria-label="Sign up with Google">
                <img src={google} alt="Google logo" className="hover:opacity-80" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
