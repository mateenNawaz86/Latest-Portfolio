import { aboutMeVector } from "@/assets/svgs";
import { aboutMeDescription } from "@/utils/static";
import Image from "next/image";
import { Button } from "../ui/buttons/button";

export const AboutMe = () => {
  return (
    <div className="flex items-center justify-between w-[90%] mx-auto my-[45px]">
      <Image src={aboutMeVector} alt="about me vector" />
      <div className="flex flex-col max-w-[613px] w-full">
        <span className="text-xs font-normal text-white mb-[18px]">
          Introduction
        </span>
        <span className="text-lg font-semibold text-white mb-[30px]">
          About Me
        </span>
        <p className="text-sm font-medium text-white mb-[30px]">
          {aboutMeDescription}
        </p>

        <Button buttonText="Download CV" isIcon={true} />
      </div>
    </div>
  );
};
