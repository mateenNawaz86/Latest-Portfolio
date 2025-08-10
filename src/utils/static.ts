import { cloudMeshLogo, lalaGroup, webIcon } from "@/assets/pngs";
import { NavItem } from "@/types/types";

export const navItems: NavItem[] = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact us" },
];

export const aboutMeDescription = `Expert in contemporary JavaScript environments, I utilize React, Node.js, Express.js, and MongoDB to craft solid, scalable solutions. Through clean architecture and careful UX planning, I translate intricate specifications into easy-to-use solutions with a client-centric approach. Let us work together to bring your idea to life as high-performing digital experiences.`;

export const experiences = [
  {
    title: "Senior Frontend Software Engineer (Next.js)",
    company_name: "Cloud Mesh Solutions",
    icon: cloudMeshLogo,
    iconBg: "#fff",
    date: "Oct 2023 - Jul 2025",
    points: [
      "Increased web application performance by 35% through efficient code optimization and leveraging Next.js features for SSR and dynamic routing.",
      "Enhanced development efficiency by reducing component build time by 50% through the creation of reusable, modular components.",
      "Streamlined data handling by integrating 10+ RESTful APIs, improving data accuracy and reducing request latency by 25%.",
    ],
  },
  {
    title: "Frontend Integration Developer (React.js)",
    company_name: "LALA Group of Companies",
    icon: lalaGroup,
    iconBg: "#fff",
    date: "Apr 2023 - Oct 2023",
    points: [
      "Accelerated development speed by 40% by creating reusable and modular API handling components, minimizing redundant code.",
      "Reduced API response times by 25% through strategic optimizations in data fetching and error handling mechanisms.",
      "Improved system reliability by identifying and resolving over 30 API integration issues, resulting in a 20% reduction in user-reported bugs.",
    ],
  },

  {
    title: "Frontend Development Intern",
    company_name: "Bit's & Byte's Technologies",
    icon: webIcon,
    iconBg: "#fff",
    date: "Dec 2020 - Jun 2021",
    points: [
      "Enhanced website performance by 30% through the efficient use of the Bootstrap framework and optimized CSS styling.",
      "Reduced development time by 20% by creating reusable components for consistent and faster implementation of features.",
      "Contributed to accessibility improvements, enabling support for diverse users and increasing site usability by 25%.",
    ],
  },
];
