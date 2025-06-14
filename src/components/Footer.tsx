import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border text-foreground py-12 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-3">
            Vaibhavi Deshpande
          </h2>
          <p className="text-muted-foreground">
            Full Stack Developer focused on crafting performant and beautiful
            web experiences using modern technologies like Next.js, TypeScript,
            and Web3.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="#about" className="hover:text-yellow-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="hover:text-yellow-500 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:text-yellow-500 transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-yellow-500 transition"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-3">
            Connect
          </h2>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Vaibhavi020"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl hover:text-yellow-500 transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhavi020/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl hover:text-yellow-500 transition" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX className="text-xl hover:text-yellow-500 transition" />
            </a>
            <a href="mailto:vaibhavideshpande0213@gmail.com">
              <FaEnvelope className="text-xl hover:text-yellow-500 transition" />
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-yellow-500 mb-3">
            Contact Info
          </h2>
          <p className="text-muted-foreground">Pune, Maharashtra, India</p>
          <p className="text-muted-foreground">Email: vaibhavideshpande0213@gmail.com</p>
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground mt-10">
        © 2025 Vaibhavi Deshpande. Built with ❤️ using Next.js, Tailwind CSS & ShadCN.
      </p>
    </footer>
  );
};

export default Footer;
