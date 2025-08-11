"use client";

import React from "react";
import { motion } from "framer-motion";
import { styles } from "../../utils/styles";
import { SectionWrapper } from "@/hoc";
import { textVariant } from "@/utils/motion";

const MySkills: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>What I Bring to the Table </p>
        <h2 className={styles.sectionHeadText}>My Skills & Expertise</h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(MySkills, "skills");
