import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPython,
  SiHtml5,
  SiCss3,
  SiGraphql,
  SiVercel,
  SiPostman,
  SiSwagger,
  SiIntellijidea,
  SiEclipseide,
  SiFastapi,
  SiBootstrap,
  SiZod,
  SiPrisma,
  SiMui,
  SiShadcnui,
  SiStorybook,
  SiReactquery,
  SiOpenai,
  SiClerk,
  SiNetlify,
  SiAxios,
  SiJsonwebtokens,
  SiDocker,
} from "react-icons/si";

import { VscJson } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { BiLogoVisualStudio } from "react-icons/bi";

import { MdConnectWithoutContact } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaLightbulb } from "react-icons/fa";
import { Clock } from "lucide-react";
import { BsShieldCheck } from "react-icons/bs";
import { GiSprint } from "react-icons/gi";

export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Python", icon: <SiPython /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "SQL", icon: <TbSql /> },
      { name: "JSON", icon: <VscJson /> },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Zustand" },
      { name: "React Query", icon: <SiReactquery /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Material UI", icon: <SiMui /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "ShadCN", icon: <SiShadcnui /> },
      { name: "Storybook", icon: <SiStorybook /> },
      { name: "Zod", icon: <SiZod /> },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "GraphQL", icon: <SiGraphql /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Axios", icon: <SiAxios /> },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Firebase", icon: <SiFirebase /> },
    ],
  },
  {
    category: "DevOps & Tools",
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "VS Code", icon: <BiLogoVisualStudio /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Swagger", icon: <SiSwagger /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
    ],
  },
  {
    category: "AI & Authentication",
    skills: [
      { name: "ChatGPT/OpenAI", icon: <SiOpenai /> },
      { name: "Clerk", icon: <SiClerk /> },
    ],
  },
  {
    category: "Other Skills",
    skills: [
      { name: "Communication", icon: <MdConnectWithoutContact /> },
      { name: "Teamwork", icon: <HiUserGroup /> },
      { name: "Problem Solving", icon: <FaLightbulb /> },
      { name: "Time Management", icon: <Clock /> },
      { name: "Accountability", icon: <BsShieldCheck /> },
      { name: "Agile Collaboration", icon: <GiSprint /> },
    ],
  },
];
