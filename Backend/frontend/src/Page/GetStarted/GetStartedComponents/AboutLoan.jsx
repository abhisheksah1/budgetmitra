import React from "react";
import { Link } from "react-router-dom";

function AboutLoan() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
          Get Started with Budget Mitra
        </h1>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
            Track Income
          </h2>
          <p>
            Learn how to record your income sources and manage them efficiently.
            Discover various income categories, set up recurring income, and
            generate detailed reports to monitor your earnings.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
            Track Expenses
          </h2>
          <p>
            Understand how to log your daily expenses and categorize them. Set
            up custom categories, track your spending habits, and get insights
            into where your money goes to help you cut down on unnecessary
            expenses.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
            Manage Loans
          </h2>
          <p>
            Find out how to keep track of your loans and repayment schedules.
            Add new loans, set reminders for due dates, and see an overview of
            your outstanding debts to stay on top of your finances.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
            Track Investments
          </h2>
          <p>
            Discover how to monitor your investments and their performance. Add
            various investment types, track their growth, and get insights into
            your overall portfolio to make informed financial decisions.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
            Create a Budget
          </h2>
          <p>
            Get tips on setting up a budget to manage your finances better.
            Learn how to allocate funds to different categories, set savings
            goals, and track your progress to ensure you stay within your
            financial limits.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
            Financial Reports
          </h2>
          <p>
            Generate detailed financial reports to get a comprehensive view of
            your financial health. Customize reports based on income, expenses,
            and savings to gain insights and make data-driven decisions.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-1 sm:mb-2">
            Security Features
          </h2>
          <p>
            Learn about the security features in Budget Mitra to protect your
            financial data. Enable two-factor authentication, set strong
            passwords, and understand our encryption practices to ensure your
            information is safe.
          </p>
        </section>

        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default AboutLoan;
