interface NavItemProps {
  id: string;
  name: string;
  active: boolean;
  onClick: (id: string) => void;
}

export const NavItem = ({ id, name, active, onClick }: NavItemProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`transition-colors text-base font-medium cursor-pointer ${
        active ? "text-black" : "text-[#fff] hover:text-black"
      }`}
    >
      {name}
    </button>
  );
};
