import React, { useContext } from "react";
import { LoginContext } from "../../Context/useContext";
import "../Logout/logout.style.css";

function Logout() {
  const { showLogout, setShowLogout } = useContext(LoginContext);

  const confirmLogout = () => {
    localStorage.removeItem("user-token");
    localStorage.removeItem("userId");
    localStorage.removeItem("fullName");
    window.location.href = "/";
  };

  const cancelLogout = () => {
    setShowLogout(false);
  };

  return (
    showLogout && (
      <div className="relative z-50">
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-400 bg-opacity-75">
          <div className="animate-slideDown bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mx-4 md:mx-0">
            <p className="font-bold   text-center pb-5">
              Are you sure you want to logout?
            </p>
            <div className="flex flex-col md:flex-row justify-center  gap-5 font-semibold">
              <button
                className="btn w-full px-32 md:w-20"
                onClick={confirmLogout}
              >
                Yes
              </button>
              <button
                className="btn w-full px-32 md:w-20"
                onClick={cancelLogout}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Logout;
