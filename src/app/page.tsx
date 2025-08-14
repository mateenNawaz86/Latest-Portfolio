import AboutMe from "@/components/aboutMe/about-me";
import { HeroSection } from "@/components/hero/hero";
import Experience from "@/components/experience/experience";
import MySkills from "@/components/skills/my-skills";
import MyProjects from "@/components/projects/projects";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experience />
      <MySkills />
      <MyProjects />
    </div>
  );
}
