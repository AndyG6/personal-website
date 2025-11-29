import { motion } from 'framer-motion';
import { useState } from 'react';

export interface Project {
  title: string;
  subtitle?: string;
  tech: string;
  date: string;
  image?: string;
  description: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="netflix-card flex-shrink-0 w-80 md:w-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-dark-card rounded-lg overflow-hidden shadow-xl">
        {/* Image Section */}
        <div className="relative aspect-video bg-dark-lighter">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-lighter to-dark">
              <span className="text-6xl opacity-30">
                {project.category === 'Mobile' && '📱'}
                {project.category === 'AI/ML' && '🤖'}
                {project.category === 'Full Stack' && '💻'}
                {project.category === 'Backend' && '⚙️'}
              </span>
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-60" />
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h4 className="text-lg font-bold font-heading mb-1 line-clamp-1">
            {project.title}
            {project.subtitle && (
              <span className="text-gray-text font-normal text-sm ml-2">
                | {project.subtitle}
              </span>
            )}
          </h4>

          <p className="text-xs text-gray-text mb-2">
            {project.tech}
          </p>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={isHovered ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2 border-t border-gray-border mt-2">
              <ul className="space-y-1.5">
                {project.description.slice(0, 2).map((point, i) => (
                  <li key={i} className="text-xs text-gray-text flex">
                    <span className="mr-2 text-netflix-red">•</span>
                    <span className="line-clamp-2">{point}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs text-gray-text mt-3 opacity-70">
                {project.date}
              </p>
            </div>
          </motion.div>

          {!isHovered && (
            <p className="text-xs text-gray-text mt-2 opacity-70">
              {project.date}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
