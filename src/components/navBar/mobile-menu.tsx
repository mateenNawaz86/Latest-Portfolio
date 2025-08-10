"use client";

interface MobileMenuProps {
  navItems: { id: string; name: string }[];
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export const MobileMenu = ({
  navItems,
  activeSection,
  scrollToSection,
}: MobileMenuProps) => {
  return (
    <div className="flex flex-col space-y-3 bg-[#61A4AF]">
      {navItems?.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`text-left px-3 py-2 rounded-md transition-colors cursor-pointer mx-4 mb-4 ${
            activeSection === item.id
              ? "bg-blue-100 text-blue-600"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};
