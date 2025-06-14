"use client";

import { useState } from "react";
import { skillsData } from "@/data/skillsData";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle";

const Skills = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-20 bg-background text-foreground"
    >
      <SectionTitle title="SKILLS" />
      <div className="space-y-4 max-w-4xl mx-auto">
        {skillsData.map((group, index) => (
          <div
            key={index}
            className="border border-border rounded-xl bg-muted/50 overflow-hidden shadow-sm hover:border-yellow-500 transition"
          >
            {/* Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left transition hover:bg-yellow-100 dark:hover:bg-transparent"
            >
              <span className="text-lg font-semibold text-yellow-600">
                {group.category}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-yellow-600" />
              </motion.div>
            </button>

            {/* Content */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="px-6 overflow-hidden"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                    {group.skills.map((skill, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 hover:border-yellow-500 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition"
                      >
                        {skill.icon && (
                          <span className="text-yellow-600 text-lg">
                            {skill.icon}
                          </span>
                        )}
                        <span className="text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
