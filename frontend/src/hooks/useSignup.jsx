import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
// Custom hook for handling signup functionality
function useSignup() {
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Function to handle signup process
  const signup = async ({
    email,
    username,
    fullName,
    password,
    confirmPassword,
  }) => {
    setLoading(true); // Set loading state to true
    try {
      const response = await fetch("/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          fullName,
          password,
          confirmPassword,
        }),
      });

      const data = await response.json(); // Parse response JSON
      if (response.ok) {
        toast.success("Register Successfully", {
          position: "bottom-right",
          duration: 3000,
          style: {
            backgroundColor: "#1e40af",
            color: "white",
          },
        }); // Show success message
        setLoading(false); // Set loading state to false

        const aa = await fetch("/api/currencyPopup/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: data.user.id,
          }),
        });
        const datas = await aa.json();
        localStorage.setItem("currencyPopupId", datas.data.id);

        return true; // Return true to indicate successful signup
      } else {
        throw new Error(data.message || "Signup failed"); // Throw error if signup failed
      }
    } catch (error) {
      console.error(error); // Log any errors that occur
      toast.error(error.message, {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#ff2626",
          color: "white",
        },
      }); // Show error message
    } finally {
      setLoading(false); // Set loading state to false
    }
    return false; // Return false to indicate failed signup
  };

  // Return the signup function and loading state
  return { signup, loading };
}

export default useSignup;
