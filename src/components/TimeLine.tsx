"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experienceData, educationData } from "@/data/timelineData";
import { Button } from "@/components/ui/button";
import SectionTitle from "./SectionTitle";

type TimeLine = {
  title: string;
  subtitle: string;
  role: string;
  date?: string;
  subject?: string;
};

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("EXPERIENCE");
  const data: TimeLine[] =
    activeTab === "EXPERIENCE" ? experienceData : educationData;
  const isExperience = activeTab === "EXPERIENCE";

  return (
    <section
      id="experience"
      className="w-full py-20 px-4 md:px-8 lg:px-16 bg-background text-foreground"
    >
      <SectionTitle title="TIMELINE" />

      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-12">
        <Button
          className={`${isExperience ? "bg-yellow-600 text-white" : "bg-transparent border border-yellow-600 text-yellow-600 hover:text-white"}   hover:bg-yellow-700 transition`}
          onClick={() => setActiveTab("EXPERIENCE")}
        >
          <Briefcase className="h-4 w-4" />
          Experience
        </Button>
        <Button
          className={`${!isExperience ? "bg-yellow-600 text-white" : "bg-transparent border border-yellow-600 text-yellow-600 hover:text-white"} hover:bg-yellow-700 transition`}
          onClick={() => setActiveTab("EDUCATION")}
        >
          <GraduationCap className="h-4 w-4" />
          Education
        </Button>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-1/2 before:-ml-px before:w-[2px] before:bg-muted md:before:block before:hidden">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`
                mb-8 flex w-full relative
                ${isLeft ? "md:justify-start" : "md:justify-end"} 
                justify-center
              `}
            >
              {/* Dot in the middle */}
              <div className="absolute left-1/2 top-12 -ml-2.5 h-5 w-5 rounded-full bg-yellow-600 border-4 border-background hidden md:block"></div>

              <div
                className={`
                  bg-background border border-border rounded-xl shadow-md px-5 py-4 
                  w-[90%] md:w-[45%] max-w-md
                  relative
                  ${isLeft ? "md:mr-6" : "md:ml-6"}
                `}
              >
                {/* Mobile dot indicator */}
                <div className="absolute left-0 -ml-5 top-12 h-4 w-4 rounded-full bg-yellow-600 md:hidden"></div>

                <div className="flex items-center gap-2 mb-1">
                  <div className="text-yellow-600">
                    {isExperience ? (
                      <Briefcase size={18} />
                    ) : (
                      <GraduationCap size={18} />
                    )}
                  </div>
                  <h4 className="text-md font-semibold">{item.title}</h4>
                </div>
                <p className="text-sm">{item?.subject}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
                <p className="text-sm">{item.subtitle}</p>
                <p className="text-xs text-muted-foreground mt-2">
                  {item.date}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
