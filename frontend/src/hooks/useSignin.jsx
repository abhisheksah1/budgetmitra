import React, { useState } from "react";
import { useLoginContext } from "../Context/useContext";
import toast from "react-hot-toast";
import axios from "axios";

function useSignin() {
  const { setShowLogin } = useLoginContext();
  const [loading, setLoading] = useState(false);

  const signin = async ({ email, password }) => {
    setLoading(true);

    try {
      const response = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user-token", data.user.token);
        localStorage.setItem("userId", data.user.id);
        localStorage.setItem("fullName", data.user.fullName);
        toast.success("Login Successfully", {
          position: "bottom-right",
          duration: 3000,
          style: {
            backgroundColor: "#1e40af",
            color: "white",
          },
        });

        setShowLogin(false);

        if (localStorage.getItem("currencyPopupId") != null) {
          // Update the currency popup state to true
          await axios.put(
            `/api/currencyPopup/put/${localStorage.getItem("currencyPopupId")}`,
            {
              isCurrencyPopup: true,
            }
          );

          // Notify CurrencySelector to update the popup state
          window.dispatchEvent(new Event("currencyPopupUpdated"));
        }

        return true;
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        duration: 3000,
        style: {
          backgroundColor: "#ff2626",
          color: "white",
        },
      });
    } finally {
      setLoading(false);
    }

    return false;
  };

  return { signin, loading };
}

export default useSignin;
