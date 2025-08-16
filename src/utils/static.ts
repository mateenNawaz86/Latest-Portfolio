import { cloudMeshLogo, lalaGroup, webIcon } from "@/assets/pngs";
import {
  adobeXdIcon,
  bootstrapIcon,
  buero365,
  cssIcon,
  figmaIcon,
  firebaseIcon,
  gitIcon,
  htmlIcon,
  javascriptIcon,
  kaufes,
  nextIcon,
  pak4fly,
  pythonIcon,
  reactIcon,
  reduxIcon,
  swissHelden,
  typescriptIcon,
  wordpressIcon,
} from "@/assets/svgs";
import { NavItem, Skills } from "@/types/types";

export const navItems: NavItem[] = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "experience", name: "Experience" },
  { id: "skills", name: "Skills" },
  { id: "projects", name: "Projects" },
  { id: "contact", name: "Contact us" },
];

export const aboutMeDescription = `Expert in contemporary JavaScript environments, I utilize React, Node.js, Express.js, and MongoDB to craft solid, scalable solutions. Through clean architecture and careful UX planning, I translate intricate specifications into easy-to-use solutions with a client-centric approach. Let us work together to bring your idea to life as high-performing digital experiences.`;
export const skillDescription = `Being an accomplished software engineer with a preference for frontend development, I am JavaScript expert and proficient in creating dynamic, user-focused applications utilizing contemporary tools and frameworks like React, Next.js, and TypeScript. I add style with Tailwind CSS for responsive, optimized styling and work closely with clients to develop scalable, high-performance, visually stunning solutions that address actual problems. An eager student, I learn quickly and adapt easily to new trends and technologies. Let's work together to bring your vision to life through innovative, world-class digital experiences!`;

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

export const skills: Skills[] = [
  {
    icon: pythonIcon,
    title: "Python",
  },
  {
    icon: javascriptIcon,
    title: "JavaScript",
  },
  {
    icon: typescriptIcon,
    title: "TypeScript",
  },
  {
    icon: wordpressIcon,
    title: "Wordpress",
  },
  {
    icon: firebaseIcon,
    title: "Firebase",
  },
  {
    icon: htmlIcon,
    title: "HTML5",
  },
  {
    icon: cssIcon,
    title: "CSS3",
  },
  {
    icon: nextIcon,
    title: "Nextjs",
  },
  {
    icon: reactIcon,
    title: "Reactjs",
  },
  {
    icon: reduxIcon,
    title: "Redux - Toolkit",
  },
  {
    icon: gitIcon,
    title: "Git - Version Control",
  },
  {
    icon: gitIcon,
    title: "Git - Version Control",
  },
  {
    icon: bootstrapIcon,
    title: "Bootstrap",
  },
  {
    icon: figmaIcon,
    title: "Figma",
  },
  {
    icon: adobeXdIcon,
    title: "Adobe - XD",
  },
];

export const projectItems = [
  {
    img: buero365,
    title: "Buero-365",
    description: `Developed a user-friendly dashboard for Buero-365, featuring a secure login system, process optimization tools, and advanced analytics for strategic business control. Integrated customer management, sales workflows, employee oversight, and system configuration to streamline operations, enhance decision-making, and maximize efficiency. Built using modern web technologies to ensure scalability, robust security, and compliance with industry-best practices, empowering businesses of all sizes to achieve long-term success in a competitive digital landscape.`,
    slug: "https://new.buero-365.com/",
  },
  {
    img: swissHelden,
    title: "Swiss Helden",
    description: `Swiss Helden, a leading Swiss digital marketing agency, drives business growth with innovative online strategies. Specializing in SEO, social media, website/software development, and creative design, they offer tailored solutions to enhance visibility and engagement. With data-driven insights, free business audits, and industry-best practices, they optimize search rankings and expand digital presence, providing both online and offline design solutions to ensure client success and a competitive edge.`,
    slug: "https://swisshelden.ch/en/",
  },
  {
    img: kaufes,
    title: "Kaufes - Swiss Market",
    description: `Developed a dynamic dashboard for Kaufes, Switzerland’s innovative online marketplace. Features a secure login, auction management, and user-friendly tools for buying, selling, and bidding. Integrated analytics for tracking listings, price negotiations, and transactions, with support for over 2 million products. Built with modern web technologies to ensure scalability, security, and sustainability, aligning with industry-best practices to empower a thriving second-hand community.`,
    slug: "https://kaufes.ch/",
  },
  {
    img: kaufes,
    title: "Kaufes - Super Admin",
    description: `Developed a robust dashboard for Kaufes - Super Admin, powering Switzerland’s leading online marketplace. Features a secure login system, user management, and tools for auction and listing oversight. Integrated analytics for tracking sales, bids, and user engagement, with streamlined workflows for inventory and transaction management. Built with modern web technologies to ensure scalability, security, and compliance with industry standards, enhancing efficiency for buyers and sellers.`,
    slug: "https://admin.kaufes.ch/",
  },
  {
    img: pak4fly,
    title: "Pak4-fly",
    description: `Developed an efficient dashboard for Pak4-fly, featuring a secure login system for seamless user access. Integrated tools for parking management, including real-time space assignments, customer tracking, and shuttle service coordination. Built with modern web technologies to ensure scalability, security, and ease of use. Supports digital valet protocols with photo and signature options, optimizing airport parking operations for both shuttle and valet services.`,
    slug: "https://park4fly.easyparksoftware.com/",
  },
];
