"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Send, Download } from "lucide-react";

import Link from "next/link";
import ScrollButton from "./ScrollButton";

const images = [
  "profile-about.jpg",
  "profile-ayush.jpeg",
  "ayush-soni-hero.jpeg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="w-full flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Hi, I&apos;m{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Ayush Soni
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl font-medium text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Typewriter
              words={[
                "Software Engineer",
                "Full Stack Developer",
                "Traveller",
                "Adventurer",
                "Gamer",
              ]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            className="text-md sm:text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I&apos;m a creative developer based in India, and I&apos;m very
            passionate and dedicated to my work.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a href="#contact">
              <Button className="bg-indigo-600 text-white hover:bg-indigo-700 transition">
                <Send className="h-4 w-4" />
                Say Hello
              </Button>
            </a>

            <a href="/assets/Ayush_Soni___Resume.pdf" download>
              <Button className="bg-transparent border-1 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            className="flex gap-4 justify-center md:justify-start text-2xl text-gray-600 dark:text-gray-300 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="https://github.com/yourhandle" target="_blank">
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com/in/yourhandle" target="_blank">
              <FaLinkedin />
            </Link>
            <Link href="https://instagram.com/yourhandle" target="_blank">
              <FaInstagram />
            </Link>
          </motion.div>
        </div>

        {/* Right: Animated Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage} // ensure a re-render on image change
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto"
          >
            <motion.div
              className="absolute inset-0 rounded-[50%] animate-blob overflow-hidden shadow-xl border-12 border-grey-500 dark:border-grey-400 transition"
              style={{ transition: "border-radius 1s ease-in-out" }}
            >
              <Image
                key={currentImage}
                src={`/assets/${images[currentImage]}`}
                alt="Ayush Soni"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
      <ScrollButton direction="down" targetId="about" />
    </section>
  );
};

export default Hero;
