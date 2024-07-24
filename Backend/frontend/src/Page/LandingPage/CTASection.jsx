import React, { useEffect, useState } from "react";
import CTAIMG from "../../Assests/CTA.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useLoginContext } from "../../Context/useContext";
import useSubscribe from "../../hooks/useSubscribe";
function CTASection() {
  const { setShowRegister } = useLoginContext();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("user-token"));
  }, [localStorage.getItem("user-token")]);

  // State for storing the email address
  const [email, setEmail] = useState("");
  // Custom hook for subscribing, which provides loading state and subscribe function
  const { loading, subscribe } = useSubscribe();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prevent submission if already loading
    if (loading) {
      return;
    }

    await subscribe({
      email: email,
    });

    setEmail("");
  };

  const handleSubscribe = () => {
    toast.error("Please Login", {
      position: "bottom-right",
      duration: 3000,
      style: {
        backgroundColor: "#ff2626",
        color: "white",
      },
    });
  };
  return (
    <div>
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-6">
          <div className="lg:flex items-center justify-between">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Take Control of Your Finances?
              </h2>

              <div className="flex space-x-4">
                {token ? (
                  <div className="">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                      Subscribe to our Newsletter
                    </h2>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-4"
                    >
                      <div className="relative">
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          value={email}
                          placeholder="Enter your email"
                          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <button
                        onClick={handleSubscribe}
                        type="submit"
                        className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                ) : (
                  <div>
                    <p className="text-white text-lg mb-6">
                      Sign up now and start managing your budget effectively
                      with Budget Mitra.
                    </p>
                    <button
                      onClick={setShowRegister}
                      className="bg-white text-blue-600 hover:bg-blue-700 hover:text-white py-3 px-6 rounded-lg text-lg font-semibold transition duration-300"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2 mt-8 lg:mt-0"
            >
              <img
                className="w-full h-auto mx-auto"
                src={CTAIMG}
                alt="Budget Mitra CTA Image"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CTASection;
