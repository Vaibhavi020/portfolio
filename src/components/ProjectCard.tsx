"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  github: string;
  live: string;
};

const ProjectCard = ({
  title,
  description,
  imageUrl,
  github,
  live,
}: ProjectCardProps) => {
  const [showFull, setShowFull] = useState(false);

  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      }}
      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400 flex flex-col h-full"
    >
      {/* Image */}
      <div className="relative w-full h-56 p-3 pb-0">
        <div className="relative w-full h-full rounded-xl overflow-hidden border border-transparent-100">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        {/* Description */}
        <div className="text-gray-700 dark:text-gray-300 text-sm mb-4">
          {!showFull ? (
            <>
              <p className="line-clamp-3">{description}</p>
              {description.length > 120 && (
                <button
                  onClick={() => setShowFull(true)}
                  className="text-indigo-600 dark:text-indigo-400 text-xs mt-1 hover:underline"
                >
                  Show more
                </button>
              )}
            </>
          ) : (
            <>
              <p>{description}</p>
              <button
                onClick={() => setShowFull(false)}
                className="text-indigo-600 dark:text-indigo-400 text-xs mt-1 hover:underline"
              >
                Show less
              </button>
            </>
          )}
        </div>

        {/* Links */}
        <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800 flex gap-4 text-indigo-600 dark:text-indigo-400 text-xl">
          <Link href={github} target="_blank" aria-label="GitHub">
            <FaGithub className="hover:text-indigo-800 transition" />
          </Link>
          <Link href={live} target="_blank" aria-label="Live Site">
            <FaExternalLinkAlt className="hover:text-indigo-800 transition" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
