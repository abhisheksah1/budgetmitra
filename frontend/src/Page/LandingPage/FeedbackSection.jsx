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
    <section className="feedbackSection">
      <div className="container mx-auto px-6">
        <p className=" md:text-4xl font-bold text-center feedbackTitle ">
          What Our Users Say
        </p>
        <div className="overflow-x-auto">
          <div className="flex gap-8 carousel">
            {feedbacks.map((feedback) => (
              <motion.div
                key={feedback._id}
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="testimonial-card  rounded-lg border-2 overflow-hidden flex-none w-96 my-4"
              >
                <div className="px-6 py-4 h-full">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      // src={`http://localhost:8000${feedback.photo}`}
                      src={feedback.photo}
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
