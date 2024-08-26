import React, { useEffect, useState } from "react";
import CTAIMG from "../../Assests/CTA.png";
import { motion } from "framer-motion";

import { useLoginContext } from "../../Context/useContext";
import useSubscribe from "../../hooks/useSubscribe";
import toast from "react-hot-toast";
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

  return (
    <div>
      <section className="staSubscribe">
        <div className="container mx-auto px-6">
          <div className="lg:flex  items-center justify-between">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:w-1/2"
            >
              <h2 className=" ctaTitle">
                Ready to Take Control of Your Finances?
              </h2>

              <div className="flex space-x-4">
                {token ? (
                  <div className="">
                    <p className="ctaDetail">
                      Subscribe to our Newsletter to receive the latest updates
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      className="flex "
                    >
                      <div className="relative">
                        <input
                          type="email"
                          onChange={(e) => setEmail(e.target.value)}
                          name="email"
                          value={email}
                          placeholder="Enter your email"
                          className="w-full p-4 focus:outline-none text-[#333333] text-xl rounded-l-md"
                        />
                      </div>
                      <button
                        type="submit"
                        className="subscribeButton hover:bg-[#002244] transition-colors duration-300"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                ) : (
                  <div>
                    <p className="ctaTitle">
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
