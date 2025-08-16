"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { styles } from "../../utils/styles";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { SkillItem } from "./skill-item";
import { skillsVector } from "@/assets/svgs";
import { skillDescription, skills } from "@/utils/static";

const MySkills: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>What I Bring to the Table </p>
        <h2 className={styles.sectionHeadText}>My Skills & Expertise</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:mt-10">
        <div className="flex flex-col gap-y-8 md:gap-y-[42px]">
          <p className="text-sm font-medium text-white text-justify">
            {skillDescription}
          </p>
          <div className="flex items-center justify-center flex-wrap gap-6">
            {skills?.map((item, index) => (
              <SkillItem icon={item?.icon} key={index} title={item?.title} />
            ))}
          </div>
        </div>
        <div className="hidden justify-end md:flex">
          <Image src={skillsVector} alt="skill" className="self-end" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(MySkills, "skills");
