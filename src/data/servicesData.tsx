import {
  LayoutDashboard,
  Server,
  Monitor,
  Zap,
  Globe,
  Bot,
} from "lucide-react";

export const services = [
  {
    icon: <LayoutDashboard size={28} />,
    title: "Frontend Development",
    description:
      "Crafting modern, responsive, and interactive UIs with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Development",
    description:
      "Developing scalable APIs and backend services using Node.js and Express.",
  },
  {
    icon: <Monitor size={28} />,
    title: "Full-Stack Development",
    description:
      "Complete solutions from frontend to backend, fully integrated and production-ready.",
  },
  {
    icon: <Globe size={28} />,
    title: "Responsive Design",
    description:
      "Ensuring websites look great and function seamlessly on all devices.",
  },
  {
    icon: <Zap size={28} />,
    title: "Performance Optimization",
    description: "Optimizing websites for speed, SEO, and user experience.",
  },
  {
    icon: <Bot size={28} />,
    title: "AI Integration",
    description:
      "Building intelligent features like chatbots, language models, and AI-powered tools using OpenAI, LangChain, and more.",
  },
];
