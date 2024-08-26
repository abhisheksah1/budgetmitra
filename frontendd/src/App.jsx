import { FloatingNavDemo } from "./components/FloatingNavDemo";
import { HeroScrollDemo } from "./components/HeroSection/HeroScrollDemo";
import { TypewriterEffectSmoothDemo } from "./components/HeroSection/HeroSection";
import { FeaturesSectionDemo } from "./components/featureSection/FeaturesSectionDemo";

function App() {
  return (
    <>
      <FloatingNavDemo />

      <div className="flex">
        <TypewriterEffectSmoothDemo />

        <HeroScrollDemo />
      </div>
      <FeaturesSectionDemo />
    </>
  );
}

export default App;
