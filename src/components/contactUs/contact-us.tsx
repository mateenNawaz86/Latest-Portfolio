"use client";

import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/utils/styles";

const ContactUs: React.FC = () => {
  return (
    <div>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      </motion.div>

      <div className="mt-20">
        <form className="flex flex-col gap-y-6 p-10">
          <div className="grid grid-cols-2 items-center gap-x-[30px]">
            <div className="flex flex-col gap-y-[14px]">
              <label
                htmlFor="fullName"
                className="text-base font-normal text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                className="shadow-inner-custom outline-none border-none h-[50px] rounded-[4px] px-4 py-2"
              />
            </div>
            <div className="flex flex-col gap-y-[14px]">
              <label
                htmlFor="email"
                className="text-base font-normal text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow-inner-custom outline-none border-none h-[50px] rounded-[4px] px-4 py-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-[14px]">
            <label
              htmlFor="subject"
              className="text-base font-normal text-white"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="shadow-inner-custom outline-none border-none h-[50px] rounded-[4px] px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-y-[14px]">
            <label
              htmlFor="message"
              className="text-base font-normal text-white"
            >
              Message
            </label>
            <textarea
              rows={5}
              name="message"
              id="message"
              className="shadow-inner-custom outline-none border-none rounded-[4px] px-4 py-2 resize-none"
            />
          </div>

          <button className="text-sm font-medium text-white rounded-[4px] bg-[#1f577b] hover:bg-[#4A6AF5] text-center cursor-pointer py-3 w-[100px] flex items-center justify-center">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SectionWrapper(ContactUs, "contact");
