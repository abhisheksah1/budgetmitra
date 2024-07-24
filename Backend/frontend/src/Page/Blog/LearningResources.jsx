import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';

const LearningResources = () => {
  return (
    <Section title="Resources for Learning More about Investing">
      <motion.div 
       initial={{ scale:0.8, opacity:0 }}
       whileInView={{scale:1, opacity:1 }}
       transition={{ duration: 0.5 }}
       
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold mb-2">1. Books</h3>
        <ul className="list-disc list-inside mb-6">
          <li><a href="https://www.amazon.com/Intelligent-Investor-Definitive-Value-Investing/dp/0060555661" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><em>The Intelligent Investor</em> by Benjamin Graham</a></li>
          <li><a href="https://www.amazon.com/Random-Walk-Down-Wall-Street/dp/0393352242" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><em>A Random Walk Down Wall Street</em> by Burton G. Malkiel</a></li>
          <li><a href="https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"><em>Rich Dad Poor Dad</em> by Robert T. Kiyosaki</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">2. Online Courses</h3>
        <ul className="list-disc list-inside mb-6">
          <li><a href="https://www.coursera.org/learn/investing-for-beginners" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Coursera: Investing for Beginners</a></li>
          <li><a href="https://www.udemy.com/course/stock-market-investing-for-beginners/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Udemy: Stock Market Investing for Beginners</a></li>
          <li><a href="https://www.edx.org/course/introduction-to-investments" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">edX: Introduction to Investments</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">3. Websites and Blogs</h3>
        <ul className="list-disc list-inside mb-6">
          <li><a href="https://www.investopedia.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Investopedia</a></li>
          <li><a href="https://www.fool.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Motley Fool</a></li>
          <li><a href="https://www.nerdwallet.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NerdWallet</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">4. Podcasts</h3>
        <ul className="list-disc list-inside mb-6">
          <li><a href="https://www.daveramsey.com/shows/the-dave-ramsey-show" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Dave Ramsey Show</a></li>
          <li><a href="https://www.choosefi.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ChooseFI</a></li>
          <li><a href="https://investlikethebest.libsyn.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Invest Like the Best</a></li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">5. YouTube Channels</h3>
        <ul className="list-disc list-inside mb-6">
          <li><a href="https://www.youtube.com/channel/UCU9SoQxJewrWbq1mHYmXzXg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Graham Stephan</a></li>
          <li><a href="https://www.youtube.com/channel/UCGy7SkBjcIAgTiwkXEtPnYg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Andrei Jikh</a></li>
          <li><a href="https://www.youtube.com/channel/UCR8RB7xmxujWyL5_b7v8g6w" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Financial Education</a></li>
        </ul>
      </motion.div>
    </Section>
  );
};

export default LearningResources;
