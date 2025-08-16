import AboutMe from "@/components/aboutMe/about-me";
import { HeroSection } from "@/components/hero/hero";
import Experience from "@/components/experience/experience";
import MySkills from "@/components/skills/my-skills";
import MyProjects from "@/components/projects/projects";
import ContactUs from "@/components/contactUs/contact-us";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Experience />
      <MySkills />
      <MyProjects />
      <ContactUs />
    </div>
  );
}
