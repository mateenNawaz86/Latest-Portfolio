import { motion } from "framer-motion";
import { ComponentType } from "react";
import { styles } from "@/utils/styles";
import { staggerContainer } from "../utils/motion";

export const SectionWrapper = <T extends object>(
  Component: ComponentType<T>,
  idName: string
) =>
  function HOC(props: T) {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-8xl mx-auto relative z-0`}
        id={idName}
      >
        <span className="hash-span">&nbsp;</span>

        <Component {...props} />
      </motion.section>
    );
  };
