"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../utils/styles";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";
import { SkillItem } from "./skill-item";
import { skillDescription, skills } from "@/utils/static";
import Image from "next/image";
import { skillsVector } from "@/assets/svgs";

const MySkills: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>What I Bring to the Table </p>
        <h2 className={styles.sectionHeadText}>My Skills & Expertise</h2>
      </motion.div>

      <div className="grid grid-cols-2 mt-10">
        <div className="flex flex-col gap-y-[42px]">
          <p className="text-sm font-medium text-white">{skillDescription}</p>
          <div className="flex items-center flex-wrap gap-6">
            {skills?.map((item, index) => (
              <SkillItem icon={item?.icon} key={index} title={item?.title} />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <Image src={skillsVector} alt="skill" className="self-end" />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(MySkills, "skills");
