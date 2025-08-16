"use client";

import { aboutMeVector } from "@/assets/svgs";
import { aboutMeDescription } from "@/utils/static";
import Image from "next/image";
import { Button } from "../ui/buttons/button";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/utils/styles";

const AboutMe = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src={aboutMeVector}
            alt="about me vector"
            className="hidden md:block"
          />
        </div>

        <div className="flex flex-col w-full">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About Me</h2>
          <p className="text-base font-medium text-white mb-[30px] text-justify">
            {aboutMeDescription}
          </p>

          <Button buttonText="Download CV" isIcon={true} />
        </div>

        <Image
          src={aboutMeVector}
          alt="about me vector"
          className="block md:hidden mt-8 w-full"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(AboutMe, "about");
