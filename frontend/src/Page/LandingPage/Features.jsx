import React from "react";
import BudgetTracking from "../../Assests/budgetTracking.png";
import ExpensesManagement from "../../Assests/ExpensesManagement.png";
import FinancialPlanning from "../../Assests/FinancialPlanning.png";
import { motion } from "framer-motion";

const FeaturesArray = [
  {
    title: "Budget Tracking",
    description:
      "Track your budget with ease and stay on top of your finances.",
    imageSrc: BudgetTracking,
  },
  {
    title: "Expense Management",
    description:
      "Effortlessly manage your expenses and analyze spending patterns.",
    imageSrc: ExpensesManagement,
  },
  {
    title: "Financial Planning",
    description:
      "Plan for your future financial goals with powerful planning tools.",
    imageSrc: FinancialPlanning,
  },
  {
    title: "Budget Tracking",
    description:
      "Track your budget with ease and stay on top of your finances.",
    imageSrc: BudgetTracking,
  },
  {
    title: "Budget Tracking",
    description:
      "Track your budget with ease and stay on top of your finances.",
    imageSrc: BudgetTracking,
  },
  {
    title: "Budget Tracking",
    description:
      "Track your budget with ease and stay on top of your finances.",
    imageSrc: BudgetTracking,
  },
];

function Features() {
  return (
    <section className="featureCard px-4 sm:px-8 md:px-16 min-h-full">
      <div className="container mx-auto py-10">
        <motion.h2
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl py-10 lg:text-4xl font-bold feature-card-title text-center"
        >
          Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {/* Feature Card */}
          {FeaturesArray.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg shadow-md p-6  flex flex-col items-center"
            >
              <div className="flex flex-col sm:flex-row items-center hover:scale-105 duration-300 justify-between w-full">
                <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-5">
                  <h3 className="text-xl stepTitle font-bold mb-2 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="feature-card-text text-balance">
                    {feature.description}
                  </p>
                </div>
                <div className="flex justify-center sm:justify-end">
                  <img
                    src={feature.imageSrc}
                    alt="Budget Tracking"
                    className="w-32 h-32 md:w-40 md:h-40"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
