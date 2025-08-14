import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ForwardIcon } from "@/assets/svgs/components/forword-icon";

interface ProjectItemProps {
  img: string | StaticImageData;
  title: string;
  description: string;
  slug: string;
}

export const ProjecItem = ({
  img,
  title,
  description,
  slug,
}: ProjectItemProps) => {
  return (
    <div className="bg-[#466168] rounded-md p-5">
      <Image src={img} alt="vector" className="rounded-[4px] w-full" />
      <p className="text-base font-semibold text-white my-3">{title}</p>
      <p className="text-xs font-normal text-white">{description}</p>

      <Link
        href={slug}
        className="mt-5 text-xs font-medium text-white flex items-center gap-x-2 rounded-md bg-[#1f577b] hover:bg-[#4A6AF5] cursor-pointer w-fit py-2 px-3"
      >
        Read More <ForwardIcon />
      </Link>
    </div>
  );
};
