import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiCplusplus,
  SiCypress,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiLaravel,
  SiMongodb,
  SiPhp,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiQt,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {typeof live === "string" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={live}
        >
          <Button variant={"outline"} size={"sm"}>
            Live Demo
            <ExternalLink className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {typeof repo === "string" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_blank"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  mysql: {
    title: "MySQL",
    bg: "black",
    fg: "white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.213 1.123.71-1.078 1.16-2.315 1.352-3.708h.88zm3.964 2.83c-.037.03-.08.048-.13.054-.05.007-.1.01-.15.01-.08 0-.143-.015-.188-.044s-.08-.07-.106-.12-.046-.11-.06-.18-.018-.14-.023-.21l-.015-.705c0-.16-.007-.32-.02-.48-.01-.16-.033-.31-.07-.45-.03-.14-.08-.26-.14-.36s-.15-.18-.26-.23c-.12-.06-.26-.09-.43-.09-.21 0-.41.04-.59.13-.19.08-.35.19-.49.33-.14.14-.25.31-.33.51s-.12.42-.12.66v2.97h-.9v-4.47h.75v.67c.13-.24.31-.43.55-.58.24-.14.51-.22.8-.22.22 0 .42.03.59.1.17.06.31.15.42.27.11.11.19.25.25.41.06.16.09.33.09.52v2.81c0 .1.01.19.03.26.02.08.05.14.1.19.04.05.1.09.17.12.07.03.15.04.24.04.09 0 .17-.01.24-.03.07-.02.14-.05.2-.09l.12.71zm3.483.53h-.93v-2.15c0-.33-.015-.62-.047-.86-.03-.24-.08-.44-.15-.59-.07-.15-.17-.26-.3-.34-.13-.08-.3-.11-.51-.11-.09 0-.19.01-.28.03-.09.02-.18.06-.26.11s-.15.12-.21.2-.11.18-.14.29c-.03.11-.04.23-.04.36v2.99h-.93V14.615h.75v.67c.13-.24.31-.43.55-.58.24-.14.51-.22.8-.22.22 0 .42.03.59.1.17.06.31.15.42.27.11.11.19.25.25.41.06.16.09.33.09.52v2.81z" />
      </svg>
    ),
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "Shadcn UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  vercel: {
    title: "Vercel",
    bg: "black",
    fg: "white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 1L24 22H0L12 1z" />
      </svg>
    ),
  },
  azure: {
    title: "Azure",
    bg: "black",
    fg: "white",
    icon: <VscAzure />,
  },
  git: {
    title: "Git",
    bg: "black",
    fg: "white",
    icon: <SiGit />,
  },
  cypress: {
    title: "Cypress",
    bg: "black",
    fg: "white",
    icon: <SiCypress />,
  },
  jest: {
    title: "Jest",
    bg: "black",
    fg: "white",
    icon: <SiJest />,
  },
  supertest: {
    title: "Supertest",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>ST</strong>
      </span>
    ),
  },
  php: {
    title: "PHP",
    bg: "black",
    fg: "white",
    icon: <SiPhp />,
  },
  laravel: {
    title: "Laravel",
    bg: "black",
    fg: "white",
    icon: <SiLaravel />,
  },
  blade: {
    title: "Blade",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>B</strong>
      </span>
    ),
  },
  github: {
    title: "GitHub",
    bg: "black",
    fg: "white",
    icon: <SiGithub />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiFastapi />,
  },
  ai: {
    title: "AI/ML",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>AI</strong>
      </span>
    ),
  },
  jwt: {
    title: "JWT",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>JWT</strong>
      </span>
    ),
  },
  gemini: {
    title: "Gemini AI",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>G</strong>
      </span>
    ),
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  qt: {
    title: "Qt",
    bg: "black",
    fg: "white",
    icon: <SiQt />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiSqlite />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};
const projects: Project[] = [
  {
    id: "eduhub",
    category: "Web App",
    title: "EduHub",
    src: "/assets/projects-screenshots/EduHub/HomePage.png",
    screenshots: ["HomePage.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.github,
      ],
    },
    live: "https://eduhubcenter.online/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            EduHub is a collaborative educational platform designed to enhance
            learning experiences. Built with modern technologies for scalability
            and performance.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "ornoplante",
    category: "Plant Care App",
    title: "OrnoPlante",
    src: "/assets/projects-screenshots/OrnoPlante/Home.png",
    screenshots: ["Home.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.cypress,
        PROJECT_SKILLS.jest,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.prisma,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.azure,
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.github,
        PROJECT_SKILLS.supertest,
        PROJECT_SKILLS.vercel,
      ],
    },
    live: "https://orno-plante.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            OrnoPlante is an AI-powered plant care platform designed to help
            users take care of their plants with ease and confidence. Built with
            modern web technologies for a seamless and intuitive experience.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          <p className="font-mono mb-2 mt-4">
            The platform provides personalized plant care recommendations,
            watering reminders, and a knowledge base for plant enthusiasts of
            all levels.
          </p>
          <SlideShow images={[`${BASE_PATH}/OrnoPlante/Home.png`]} />
          <TypographyH3 className="my-4 ">Features</TypographyH3>
          <p className="font-mono mb-2">
            • AI-driven plant identification and care suggestions
            <br />
            • Customizable watering and fertilizing schedules
            <br />
            • Visual dashboard to track plant health
            <br />• Community tips and Q&A
          </p>
          <TypographyH3 className="my-4 mt-8">AI Capabilities</TypographyH3>
          <p className="font-mono mb-2">
            OrnoPlante leverages AI to analyze plant photos, diagnose issues,
            and offer actionable advice, making plant care accessible for
            everyone.
          </p>
          <TypographyH3 className="my-4 mt-8">User Experience</TypographyH3>
          <p className="font-mono mb-2">
            The interface is designed for clarity and ease of use, ensuring
            users can quickly access the information and tools they need to keep
            their plants thriving.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-soutenance",
    category: "AI Platform",
    title: "AI_Soutenance - Intelligent Thesis Defense Management",
    src: "/assets/projects-screenshots/SoutAi/SoutAIhome.png",
    screenshots: ["SoutAIhome.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.shadcn,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.fastapi,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.ai,
        PROJECT_SKILLS.gemini,
        PROJECT_SKILLS.git,
        PROJECT_SKILLS.github,
      ],
    },
    live: undefined,
    github: undefined,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            AI_Soutenance is an innovative Full Stack platform developed at ENSIASD (École Nationale Supérieure de l&apos;Intelligence Artificielle et Sciences des Données) 
            to revolutionize the management of thesis defense presentations. The platform transforms manual processes into a centralized digital ecosystem 
            that serves administrators, professors, and students.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Built with a modern, decoupled architecture for optimal performance:
            <br />
            • <strong>Backend:</strong> Python with FastAPI for high-speed asynchronous processing
            <br />
            • <strong>Frontend:</strong> Next.js for a reactive and fluid user interface
            <br />
            • <strong>Database:</strong> PostgreSQL for robust data management
            <br />
            • <strong>Security:</strong> JWT authentication with Role-Based Access Control (RBAC)
          </p>
          <TypographyH3 className="my-4 mt-8">AI-Powered Innovation</TypographyH3>
          <p className="font-mono mb-2">
            The core innovation lies in the integrated Artificial Intelligence module that automatically analyzes PDF reports to:
            <br />
            • <strong>Generate Automatic Summaries:</strong> Extract key points and create concise summaries
            <br />
            • <strong>Detect Technical Domain:</strong> Identify the project&apos;s technical field and categorization
            <br />
            • <strong>Plagiarism Detection:</strong> Calculate similarity scores to assist the jury in evaluation
            <br />
            • <strong>Smart Analysis:</strong> Provide insights and recommendations for defense preparation
          </p>
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <p className="font-mono mb-2">
            <strong>For Administrators:</strong>
            <br />
            • Centralized dashboard for managing all defense sessions
            <br />
            • Automated scheduling and room allocation
            <br />
            • Real-time monitoring and reporting
            <br />
            • Jury assignment and management
          </p>
          <p className="font-mono mb-2 mt-4">
            <strong>For Professors:</strong>
            <br />
            • Access to student reports with AI-generated summaries
            <br />
            • Plagiarism detection results and similarity scores
            <br />
            • Evaluation forms and grading tools
            <br />
            • Communication portal with students
          </p>
          <p className="font-mono mb-2 mt-4">
            <strong>For Students:</strong>
            <br />
            • Easy report submission and tracking
            <br />
            • Defense schedule and room information
            <br />
            • Automated feedback and recommendations
            <br />
            • Progress monitoring dashboard
          </p>
          <TypographyH3 className="my-4 mt-8">Team Collaboration</TypographyH3>
          <p className="font-mono mb-2">
            This project was developed collaboratively by a dedicated team including ABDELKBIR NAINIAA, Khalid IBIZZI, and Achraf Mouassis, 
            under the guidance of Professor Basma Saad. The project demonstrates excellence in teamwork, technical implementation, 
            and innovative problem-solving in the Python module at ENSIASD.
          </p>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            AI_Soutenance successfully digitizes and streamlines the entire thesis defense process, reducing administrative overhead, 
            ensuring fairness through AI-assisted plagiarism detection, and providing a superior experience for all stakeholders. 
            The platform represents a significant step forward in academic management systems.
          </p>
        </div>
      );
    },
  },
  {
    id: "desktop-pos",
    category: "Desktop Application",
    title: "Desktop POS System",
    src: "/assets/projects-screenshots/POS/pos.webp",
    screenshots: ["pos.webp"],
    skills: {
      frontend: [
        PROJECT_SKILLS.cpp,
        PROJECT_SKILLS.qt,
      ],
      backend: [
        PROJECT_SKILLS.sqlite,
        PROJECT_SKILLS.git,
      ],
    },
    live: undefined,
    github: undefined,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            A comprehensive Desktop Point of Sale (POS) system built with C++ and Qt framework. 
            This robust application provides a complete solution for retail businesses to manage sales, inventory, and customer transactions efficiently.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Technical Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with powerful desktop technologies:
            <br />
            • <strong>C++:</strong> High-performance core application logic
            <br />
            • <strong>Qt Framework:</strong> Cross-platform GUI development with modern UI components
            <br />
            • <strong>SQLite:</strong> Lightweight, embedded database for transaction and inventory management
            <br />
            • <strong>Qt Designer:</strong> Professional interface design tools
          </p>
          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <p className="font-mono mb-2">
            <strong>Sales Management:</strong>
            <br />
            • Fast and intuitive checkout interface
            <br />
            • Barcode scanner integration
            <br />
            • Multiple payment methods support (Cash, Card, Mobile)
            <br />
            • Receipt printing and email functionality
            <br />
            • Real-time sales tracking and reporting
          </p>
          <p className="font-mono mb-2 mt-4">
            <strong>Inventory Management:</strong>
            <br />
            • Product catalog with categories and variants
            <br />
            • Stock level monitoring with low-stock alerts
            <br />
            • Automated reorder suggestions
            <br />
            • Supplier management
            <br />
            • Batch and expiry date tracking
          </p>
          <p className="font-mono mb-2 mt-4">
            <strong>Customer Management:</strong>
            <br />
            • Customer database and purchase history
            <br />
            • Loyalty program integration
            <br />
            • Customer analytics and insights
            <br />
            • Personalized promotions and discounts
          </p>
          <TypographyH3 className="my-4 mt-8">Advanced Capabilities</TypographyH3>
          <p className="font-mono mb-2">
            • <strong>Multi-User Support:</strong> Role-based access control for cashiers, managers, and administrators
            <br />
            • <strong>Reporting & Analytics:</strong> Comprehensive sales reports, profit analysis, and business insights
            <br />
            • <strong>Offline Mode:</strong> Continue operations during internet outages with automatic sync
            <br />
            • <strong>Data Security:</strong> Encrypted database connections and secure user authentication
            <br />
            • <strong>Backup & Recovery:</strong> Automated database backups and disaster recovery
          </p>
          <TypographyH3 className="my-4 mt-8">User Interface</TypographyH3>
          <p className="font-mono mb-2">
            Designed with Qt&apos;s modern UI components for a professional and user-friendly experience:
            <br />
            • Clean, intuitive dashboard with key metrics
            <br />
            • Responsive layout optimized for touchscreen displays
            <br />
            • Customizable themes and color schemes
            <br />
            • Keyboard shortcuts for faster operations
            <br />
            • Multi-language support
          </p>
          <TypographyH3 className="my-4 mt-8">Performance & Reliability</TypographyH3>
          <p className="font-mono mb-2">
            Built with C++ for maximum performance and reliability, the application handles high-volume transactions 
            with minimal latency. The Qt framework ensures cross-platform compatibility, allowing deployment on Windows, 
            Linux, and macOS systems. SQLite database provides robust, embedded data management with ACID compliance for transaction integrity, 
            requiring no separate database server installation.
          </p>
        </div>
      );
    },
  },
  {
    id: "academic-website",
    category: "Academic Platform",
    title: "Academic Website for Professor",
    src: "/assets/projects-screenshots/academic-website/home.jpg",
    screenshots: ["home.jpg"],
    skills: {
      frontend: [
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.blade,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.laravel,
        PROJECT_SKILLS.php,
        PROJECT_SKILLS.mysql,
        PROJECT_SKILLS.git,
      ],
    },
    live: undefined,
    github: undefined,
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Developed a comprehensive academic platform for a professor at École Nationale Supérieure de l&apos;Intelligence Artificielle et Sciences des Données. 
            The website serves as a professional hub to showcase research, publications, and manage course materials.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Course Management</TypographyH3>
          <p className="font-mono mb-2">
            A robust course management system that allows the professor to:
            <br />
            • Upload and organize course resources and materials
            <br />
            • Post announcements and updates for students
            <br />
            • Manage a student forum for discussions and Q&A
            <br />
            • Track student engagement and participation
          </p>
          <TypographyH3 className="my-4 mt-8">Research & Publications</TypographyH3>
          <p className="font-mono mb-2">
            Dedicated sections to showcase academic achievements including:
            <br />
            • Research background and areas of expertise
            <br />
            • Published papers and academic publications
            <br />
            • Ongoing research projects and collaborations
            <br />
            • Dynamic search functionality to filter publications
          </p>
          <TypographyH3 className="my-4 mt-8">Contact & Communication</TypographyH3>
          <p className="font-mono mb-2">
            Implemented a fully functional contact form with:
            <br />
            • PHP-based server-side validation
            <br />
            • Spam protection and input sanitization
            <br />
            • Email notifications for new inquiries
            <br />
            • User-friendly error handling and feedback
          </p>
          <TypographyH3 className="my-4 mt-8">Advanced Features</TypographyH3>
          <p className="font-mono mb-2">
            Enhanced user experience with modern web features:
            <br />
            • <strong>Dark Mode:</strong> Toggle between light and dark themes for comfortable viewing
            <br />
            • <strong>Dynamic Search:</strong> Real-time filtering of publications and resources
            <br />
            • <strong>File Upload:</strong> Secure file management system for course materials
            <br />
            • <strong>Responsive Design:</strong> Optimized for all devices and screen sizes
          </p>
          <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
          <p className="font-mono mb-2">
            Built with Laravel framework for robust backend architecture, MySQL for reliable data management, 
            and modern frontend technologies for an intuitive user interface. The platform demonstrates 
            best practices in web development including MVC architecture, secure authentication, and efficient database design.
          </p>
        </div>
      );
    },
  },
];
export default projects;
