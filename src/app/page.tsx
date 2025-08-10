import AboutMe from "@/components/aboutMe/about-me";
import { HeroSection } from "@/components/hero/hero";
import Experience from "@/components/experience/experience";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experience />
    </div>
  );
}
