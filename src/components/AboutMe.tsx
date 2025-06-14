"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Mail, MapPin, Calendar, CircleUser } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ScrollButton from "./ScrollButton";

const personalInfo = [
  {
    label: "Name",
    value: "Vaibhavi Deshpande",
    icon: <CircleUser className="w-4 h-4 text-muted-foreground mt-0.5" />,
  },
  {
    label: "Date of Birth",
    value: "January 02",
    icon: <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />,
  },
  {
    label: "Address",
    value: "Pune, Maharashtra, India",
    icon: <MapPin className="w-4 h-4 text-muted-foreground mt-0.5" />,
  },
  {
    label: "Email",
    value: "vaibhavideshpande0213@gmail.com",
    icon: <Mail className="w-4 h-4 text-muted-foreground mt-0.5" />,
  },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="w-full py-20 px-6 md:px-20 bg-background text-foreground relative"
    >
      <SectionTitle title="ABOUT ME" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center">
        {/* Left - Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative w-[300px] h-[450px] md:w-[370px] md:h-[500px] mx-auto rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/assets/vaibhavi-about.jpg"
              alt="About Vaibhavi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">
            I&apos;m a Passionate{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              Technical Trainer
            </span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Hi, I&apos;m a dedicated Technical Trainer based in India. I have
            over 2 years of experience with expertise in Java, Prompt Eng. 
            I design and deliver training programs that simplify complex concepts and build industry-ready skills.
            Currently, I am working at{" "}
            <span className="font-semibold text-yellow-600 dark:text-yellow-400">
              Gyanteerth            </span>{" "}
            as a Technical Trainer, Project Co-ordinator.
            <br />
            <br />I love turning complex problems into elegant solutions, and
            I’m always open to collaborating on exciting projects. Let’s build
            something amazing together!
          </p>

          {/* Experience badges */}
          <div className="flex gap-12 flex-wrap">
            <div>
              <h3 className="text-2xl font-bold text-primary">2+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">1000+</h3>
              <p className="text-muted-foreground">Students Trained Successfully</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="text-muted-foreground">Available as a Trainer</p>
            </div>
          </div>

          <Separator />

          {/* Personal info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-10 text-sm mt-6">
            {personalInfo.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                {item.icon}
                <div>
                  <p className="text-muted-foreground">{item.label}:</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Up Button */}
      <ScrollButton direction="up" targetId="hero" />
    </section>
  );
}
