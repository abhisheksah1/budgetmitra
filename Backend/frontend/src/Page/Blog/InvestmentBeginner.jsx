import React from "react";
import TitleSection from "./TitleSection";
import WhyInvest from "./WhyInvest";
import BasicInvestmentConcepts from "./BasicInvestmentConcepts";
import TypesOfInvestments from "./TypesOfInvestments";

import CommonMistakesToAvoid from "./CommonMistakesToAvoid";
import Conclusion from "./Conclusion";
import AdvancedInvestmentStrategies from "./AdvancedInvestmentStrategies";
import TaxAdvantagedAccounts from "./TaxAdvantagedAccounts";
import LearningResources from "./LearningResources";
import GettingStarted from "./Gettingstarted";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 mt-14 py-8">
      <TitleSection />

      <WhyInvest />

      <BasicInvestmentConcepts />

      <TypesOfInvestments />

      <GettingStarted />

      <AdvancedInvestmentStrategies />

      <TaxAdvantagedAccounts />

      <CommonMistakesToAvoid />

      <LearningResources />

      <Conclusion />
    </div>
  );
};

export default Blog;
