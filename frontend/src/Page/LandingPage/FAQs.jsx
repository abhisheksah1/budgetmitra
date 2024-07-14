import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Budget Mitra?',
      answer:
        'Budget Mitra is a financial management tool that helps users track expenses, set budgets, and plan finances effectively.',
    },
    {
      question: 'How can I get started with Budget Mitra?',
      answer:
        "To get started, simply sign up for an account on our website or mobile app. It's free to join!",
    },
    {
      question: 'Is Budget Mitra secure?',
      answer:
        'Yes, Budget Mitra employs robust security measures to protect your financial data and personal information.',
    },
    {
      question: 'Can I use Budget Mitra on multiple devices?',
      answer:
        'Yes, you can access Budget Mitra on multiple devices, including desktops, laptops, tablets, and smartphones.',
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            FAQs
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div
                  className="px-6 py-4 cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <div className="w-6 h-6 text-gray-600">
                      {activeIndex === index ? (
                        <IoIosArrowUp /> // Render up arrow when active
                      ) : (
                        <IoIosArrowDown /> // Render down arrow when inactive
                      )}
                    </div>
                  </div>
                </div>
                {activeIndex === index && (
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQs;
