import { DownloadIcon } from "@/assets/svgs/components/download-icon";

interface ButtonProps {
  buttonText?: string;
  isIcon?: boolean;
  onClick?: () => void;
}

export const Button = ({ buttonText, isIcon, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-[13px] py-[10px] rounded-md bg-[#1f577b] hover:bg-[#4A6AF5] cursor-pointer flex items-center gap-x-3 w-fit transition-all duration-300 ease-in-out transform"
    >
      <span className="text-base text-white font-normal">{buttonText}</span>
      {isIcon && <DownloadIcon />}
    </button>
  );
};
