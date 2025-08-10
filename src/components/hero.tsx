import { heroVector } from "@/assets/svgs";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="relative h-screen w-full bg-[#61A4AF]">
      <div className="flex items-center justify-center h-full w-[90%] mx-auto">
        <div>
          <span className="text-[40px] font-semibold text-white">Hi, I'm </span>
          <p className="text-[65px] font-semibold text-white">Mateen Nawaz</p>
          <p className="text-[22px] font-medium text-white">
            Building engaging, high-performance web applications with beautiful
            user interfaces that provide outstanding digital experiences. I pair
            solid back-end infrastructure with accessible front-end design to
            create frictionless, elastic solutions that people adore.
          </p>
        </div>

        <Image src={heroVector} alt="hero vector" />
      </div>
    </div>
  );
};
