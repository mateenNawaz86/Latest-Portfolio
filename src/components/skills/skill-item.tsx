import Image, { StaticImageData } from "next/image";

interface SkillItemProps {
  icon: string | StaticImageData;
  title?: string;
}

export const SkillItem = ({ icon, title }: SkillItemProps) => {
  return (
    <div
      title={title}
      className="bg-white min-w-[50px] min-h-[50px] p-2 rounded-full flex items-center justify-center overflow-hidden"
    >
      <Image
        src={icon}
        alt={title || "skill icon"}
        width={30}
        height={30}
        className="object-contain"
      />
    </div>
  );
};
