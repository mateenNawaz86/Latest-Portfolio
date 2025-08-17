"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { SectionWrapper } from "@/hoc";
import { styles } from "@/utils/styles";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
      </motion.div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-6 mt-5 md:mt-0 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-6 md:gap-y-0 gap-x-[30px]">
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
              value={formData.fullName}
              onChange={handleChange}
              className="shadow-inner-custom outline-none border-none h-[50px] rounded-[4px] px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-y-[14px]">
            <label htmlFor="email" className="text-base font-normal text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-inner-custom outline-none border-none h-[50px] rounded-[4px] px-4 py-2"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[14px]">
          <label htmlFor="subject" className="text-base font-normal text-white">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            className="shadow-inner-custom outline-none border-none h-[50px] rounded-[4px] px-4 py-2"
          />
        </div>
        <div className="flex flex-col gap-y-[14px]">
          <label htmlFor="message" className="text-base font-normal text-white">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="shadow-inner-custom outline-none border-none rounded-[4px] px-4 py-2 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-sm font-medium text-white rounded-[4px] bg-[#1f577b] hover:bg-[#4A6AF5] text-center cursor-pointer py-3 w-[100px] flex items-center justify-center"
        >
          {isSubmitting ? "Sending..." : "Submit"}
        </button>

        {submitStatus === "success" && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-500">
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default SectionWrapper(ContactUs, "contact");
