"use client";

import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/utils/styles";
import { ProjecItem } from "./project-item";
import { projectItems } from "@/utils/static";

const MyProjects: React.FC = () => {
  return (
    <div>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="grid grid-cols-4 gap-[30px] mt-10">
        {projectItems?.map((item, index) => {
          return (
            <ProjecItem
              key={index}
              img={item?.img}
              title={item?.title}
              description={item?.description}
              slug={item?.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(MyProjects, "projects");
