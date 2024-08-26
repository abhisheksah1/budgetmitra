import React, { useState } from "react";
import { useLoginContext } from "../../Context/useContext";
import useSignin from "../../hooks/useSignin";
import "./login.style.css";
import { Eye, EyeOff } from "lucide-react";

import Toast from "react-hot-toast";

function Signin() {
  const [email, setEmail] = useState(""); // State for storing email input
  const [password, setPassword] = useState(""); // State for storing password input
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [rememberMe, setRememberMe] = useState(false); // State for remembering user login
  const { showLogin, setShowLogin, setShowRegister, setShowReset } =
    useLoginContext(); // Destructuring values from login context
  const { loading, signin } = useSignin(); // Destructuring values from signin context

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the state to show/hide the password
  };

  const handleShow = () => {
    setShowLogin(false); // Hide the login form
    setShowRegister(true); // Show the registration form
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (loading) {
      // If already loading, return early to prevent duplicate submissions
      return;
    }

    try {
      await signin({
        // Call the signin function with the email and password
        email: email,
        password: password,
      });

      // Reset the input fields after submission
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error signing in:", error.message);
      // Handle error if needed
    }
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe); // Toggle the state for remembering user login
  };

  const resetHandler = () => {
    setShowLogin(false); // Hide the login form
    setShowRegister(false); // Hide the registration form
    setShowReset(true); // Show the password reset form
  };

  return (
    <div className="relative z-50">
      {showLogin && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75 p-4 sm:p-8">
          <form
            className="bg-white p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl animate-slideDown"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-end gap-5 font-semibold">
              <button
                type="button"
                className=" float-right text-red-500   "
                onClick={() => {
                  setShowLogin(false);
                }}
              >
                ✖
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <label className="flex justify-center  mb-5 font-semibold text-xl lg:text-2xl">
                <span>
                  Sign In Your{" "}
                  <span className="text-blue-500 font-bold">Account</span>
                </span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 text-blue-500 "
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 text-blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="grow"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="text-gray-500 hover:text-gray-700"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <Eye /> : <EyeOff />}
                </button>
              </label>
              <div className="flex justify-between items-center pb-2 sm:pb-5">
                <label htmlFor="AA">
                  <div className="flex items-center">
                    <input
                      id="AA"
                      type="checkbox"
                      className=" rounded-lg h-5  w-5"
                    />
                    <span
                      className="form-checkbox-label ml-2"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    >
                      Remember me
                    </span>
                  </div>
                </label>
                <div>
                  <span>
                    {" "}
                    <button
                      onClick={resetHandler}
                      className="text-blue-500 font-semibold hover:text-blue-600"
                    >
                      Forgot Password?
                    </button>
                  </span>
                </div>
              </div>
              <button className="bg-blue-500 py-3 rounded-md hover:bg-blue-600" disabled={loading}>
                {loading ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            <div className="flex justify-between pt-5 sm:pt-10">
              <div>
                <span className="text-blue-500">Don't have an Account?</span>
              </div>
              <div>
                <span>
                  <button
                    onClick={handleShow}
                    className="font-semibold hover:text-blue-500"
                  >
                    Register Here
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Signin;
