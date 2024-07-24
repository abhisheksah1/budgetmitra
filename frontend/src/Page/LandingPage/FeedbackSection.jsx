import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const FeedbackSection = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get("/api/feedback/get");
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <section className="bg-gray-100 py-12 my-4">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="overflow-x-auto">
          <div className="flex gap-8 carousel">
            {feedbacks.map((feedback) => (
              <motion.div
                key={feedback._id}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="testimonial-card bg-gray-100 rounded-lg shadow-xl overflow-hidden flex-none w-96 my-4"
              >
                <div className="px-6 py-4 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={`http://localhost:5000${feedback.photo}`}
                      alt={feedback.name}
                    />
                    <div>
                      <p className="text-lg font-semibold text-gray-800">
                        {feedback.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {feedback.position}, {feedback.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-base">{feedback.thought}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
