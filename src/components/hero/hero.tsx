import { heroVector } from "@/assets/svgs";
import { styles } from "@/utils/styles";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div id="home" className="relative h-screen w-full bg-[#61A4AF]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-8xl w-full mx-auto sm:px-16 px-6 items-center gap-8">
          <div className="flex flex-col gap-y-2">
            <span className={styles.sectionSubText}>Hi, I am</span>
            <h2 className={styles.sectionHeadText}>Mateen Nawaz</h2>
            <p className="text-base md:text-[22px] font-medium text-white max-w-2xl mx-auto md:mx-0">
              Building engaging, high-performance web applications with
              beautiful user interfaces that provide outstanding digital
              experiences. I pair solid back-end infrastructure with accessible
              front-end design to create frictionless, elastic solutions that
              people adore.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src={heroVector}
              alt="hero vector"
              className="object-contain max-h-[60vh] w-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
