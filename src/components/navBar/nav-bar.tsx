"use client";

import Image from "next/image";
import { NavItem } from "./nav-item";
import { profile } from "@/assets/pngs";
import { navItems } from "@/utils/static";
import { MobileMenu } from "./mobile-menu";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      for (const section of navItems.map((item) => item.id)) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all py-4 bg-[#61A4AF] ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto md:px-4">
        <div className="flex justify-between items-center px-4">
          <Image
            src={profile}
            alt="profile"
            width={55}
            height={55}
            className="w-[55px] h-[55px] object-cover rounded-full cursor-pointer"
          />
          <nav className="hidden md:flex space-x-6">
            {navItems?.map((item) => (
              <NavItem
                key={item.id}
                id={item.id}
                name={item.name}
                active={activeSection === item.id}
                onClick={scrollToSection}
              />
            ))}
          </nav>
          <button
            className="md:hidden focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1">
              <span
                className={`h-0.5 bg-gray-800 transition-all ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 bg-gray-800 transition-all ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`h-0.5 bg-gray-800 transition-all ${
                  isOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        <div
          className={`md:hidden ${
            isOpen ? "fixed w-full" : "hidden"
          } mt-4 pb-4`}
        >
          <MobileMenu
            navItems={navItems}
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />
        </div>
      </div>
    </header>
  );
};
