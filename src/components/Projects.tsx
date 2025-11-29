import { motion } from 'framer-motion';
import Carousel from './Carousel';
import ProjectCard from './ProjectCard';
import type { Project } from './ProjectCard';
import FeaturedProject from './FeaturedProject';

const projects: Project[] = [
  {
    title: 'Pay me Back!',
    subtitle: 'iOS trip expense splitter',
    tech: 'FastAPI, SQLite, Swift',
    date: 'September 2025 – Present',
    image: '', // Add your image URL here
    description: [
      'Designed and implemented a full-stack expense-splitting application with clean separation of concerns using MVVM architecture.',
      'Built and consumed RESTful APIs with asynchronous request handling, ensuring reliable data synchronization between client and backend.',
      'Integrated SQLite for local persistence, enabling 100% offline functionality, with automatic two-way sync to backend tested across 10+ network conditions and edge cases.',
    ],
    category: 'Mobile',
  },
  {
    title: 'Nina AI',
    subtitle: 'Cal Hacks 2025',
    tech: 'React Native, FastAPI, SQL, Vapi, Groq',
    date: 'October 2025',
    image: '', // Add your image URL here
    description: [
      'Developed an AI-first voice assistant mobile app that transcribes, organizes, and retrieves user voice notes using Retrieval-Augmented Generation (RAG) pipelines.',
      'Built a sleek React Native frontend enabling users to record, search, and retrieve notes with an average latency of 500ms per voice query.',
      'Engineered a FastAPI backend integrated with SQL database for structured note storage, metadata retrieval, and contextual queries.',
      'Leveraged Vapi and Groq to reduce speech-to-text inference latency by 40%, allowing near real-time voice interaction at hackathon scale.',
    ],
    category: 'AI/ML',
  },
  {
    title: 'AI Minecraft Companion',
    subtitle: '',
    tech: 'Python, Java, OpenAI API, ElevenLabs API',
    date: 'August 2025 – Present',
    image: '', // Add your image URL here
    description: [
      'Developed a RESTful API Server (FastAPI/Python) to handle events between the game server and OpenAI api calls.',
      'Managed API key authentication and credit usage for external services, optimizing usage costs during testing.',
      'Implemented data persistence using a memory system with short-term context windows and long-term fact storage allowing the AI to consistently generate contextual responses.',
    ],
    category: 'AI/ML',
  },
];

// Group projects by category
const categorizeProjects = (projects: Project[]) => {
  const categories: Record<string, Project[]> = {};

  projects.forEach(project => {
    if (!categories[project.category]) {
      categories[project.category] = [];
    }
    categories[project.category].push(project);
  });

  return categories;
};

const Projects = () => {
  const categorizedProjects = categorizeProjects(projects);
  const featuredProject = projects[0]; // Feature the first project

  return (
    <section id="projects" className="bg-dark min-h-screen">
      {/* Featured Project Banner */}
      <FeaturedProject project={featuredProject} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8"
      >
        <h2 className="section-title mb-8 px-6 lg:px-12">
          Browse Projects
        </h2>

        {/* Netflix-style carousels by category */}
        <div className="space-y-8">
          {Object.entries(categorizedProjects).map(([category, categoryProjects]) => (
            <Carousel key={category} title={category}>
              {categoryProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Carousel>
          ))}
        </div>

        {/* All Projects section for smaller screens or additional viewing */}
        <div className="mt-16 px-6 lg:px-12">
          <h3 className="text-xl font-bold font-heading mb-6 text-gray-text">
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
