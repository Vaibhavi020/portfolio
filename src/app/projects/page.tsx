"use client";

import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projectsData";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black">
      <div className="mt-10 max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <SectionTitle title="PROJECTS" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
