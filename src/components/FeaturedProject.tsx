import { motion } from 'framer-motion';
import { Info, PlayCircle } from 'lucide-react';
import type { Project } from './ProjectCard';

interface FeaturedProjectProps {
  project: Project;
}

const FeaturedProject = ({ project }: FeaturedProjectProps) => {
  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden mb-4">
      {/* Background Image */}
      <div className="absolute inset-0">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-dark-lighter via-dark to-dark-card flex items-center justify-center">
            <span className="text-9xl opacity-20">
              {project.category === 'Mobile' && '📱'}
              {project.category === 'AI/ML' && '🤖'}
              {project.category === 'Full Stack' && '💻'}
              {project.category === 'Backend' && '⚙️'}
            </span>
          </div>
        )}

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-24 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-netflix-red text-white text-xs font-semibold rounded">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-xl md:text-2xl text-gray-text mb-4">
              {project.subtitle}
            </p>
          )}

          {/* Tech Stack */}
          <p className="text-sm text-gray-text mb-6">
            {project.tech}
          </p>

          {/* Description Preview */}
          <p className="text-base md:text-lg text-gray-text mb-8 line-clamp-3">
            {project.description[0]}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary flex items-center gap-2">
              <PlayCircle className="w-5 h-5" />
              View Project
            </button>
            <button className="btn btn-outline flex items-center gap-2">
              <Info className="w-5 h-5" />
              More Info
            </button>
          </div>

          {/* Date */}
          <p className="text-sm text-gray-text mt-6 opacity-70">
            {project.date}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedProject;
