"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import HeroSection from "./HeroSection";
export default function FullPageComponent() {
  return (
    <ReactFullpage
      // Fullpage.js configuration
      scrollingSpeed={1000} // Adjust scrolling speed here
      sectionsColor={["#ff5f45", "#0798ec", "#fc6c7c", "#435b71"]}
      navigation={true}
      credits={{
        enabled: false,
      }}
      render={({ state, fullpageApi }) => {
        return (
          <div>
            <HeroSection />
            <HeroSection />
            <HeroSection />
            <HeroSection />
          </div>
        );
      }}
    />
  );
}
