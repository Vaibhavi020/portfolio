import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border text-foreground py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
        {/* Left */}
        <div>
          <h3 className="text-lg font-bold text-indigo-600">Ayush Soni</h3>
          <p className="mt-2 text-muted-foreground">
            Full Stack Developer specializing in modern web tech.
          </p>
        </div>

        {/* Center */}
        <div className="flex flex-col gap-2">
          <Link href="#about" className="hover:text-indigo-500 transition">
            About
          </Link>
          <Link href="#skills" className="hover:text-indigo-500 transition">
            Skills
          </Link>
          <Link href="#services" className="hover:text-indigo-500 transition">
            Services
          </Link>
          <Link href="/projects" className="hover:text-indigo-500 transition">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-indigo-500 transition">
            Contact
          </Link>
        </div>

        {/* Right */}
        <div className="flex gap-4 items-center">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-indigo-500 text-xl" />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-indigo-500 text-xl" />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitterX className="hover:text-indigo-500 text-xl" />
          </a>
          <a href="mailto:you@example.com">
            <FaEnvelope className="hover:text-indigo-500 text-xl" />
          </a>
        </div>
      </div>

      <div className="text-center text-xs text-muted-foreground mt-6">
        © 2025 Ayush Soni. Built with Next.js, Tailwind CSS & ShadCN.
      </div>
    </footer>
  );
};

export default Footer;
