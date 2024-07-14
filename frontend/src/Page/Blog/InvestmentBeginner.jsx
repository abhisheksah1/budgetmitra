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

import AnimatedSection from "../AbimatedSection/AnimatedSection";

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <AnimatedSection>
        <TitleSection />
      </AnimatedSection>
      <AnimatedSection>
        <WhyInvest />
      </AnimatedSection>
      <AnimatedSection>
        <BasicInvestmentConcepts />
      </AnimatedSection>
      <AnimatedSection>
        <TypesOfInvestments />
      </AnimatedSection>

      <AnimatedSection>
        <GettingStarted />
      </AnimatedSection>

      <AnimatedSection>
        <AdvancedInvestmentStrategies />
      </AnimatedSection>

      <AnimatedSection>
        <TaxAdvantagedAccounts />
      </AnimatedSection>

      <AnimatedSection>
        <CommonMistakesToAvoid />
      </AnimatedSection>
      <AnimatedSection>
        <LearningResources />
      </AnimatedSection>

      <AnimatedSection>
        <Conclusion />
      </AnimatedSection>
    </div>
  );
};

export default Blog;
