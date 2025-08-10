"use client";

import { aboutMeVector } from "@/assets/svgs";
import { aboutMeDescription } from "@/utils/static";
import Image from "next/image";
import { Button } from "../ui/buttons/button";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/utils/styles";

const AboutMe = () => {
  return (
    <div className="flex items-center justify-between">
      <Image src={aboutMeVector} alt="about me vector" />
      <div className="flex flex-col max-w-[613px] w-full">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
        <p className="text-base font-medium text-white mb-[30px] mt-10">
          {aboutMeDescription}
        </p>

        <Button buttonText="Download CV" isIcon={true} />
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about");
