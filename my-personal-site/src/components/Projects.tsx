import { motion } from 'framer-motion';

const projects = [
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
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title mb-12">
            PROJECTS
          </h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Image Section */}
                  <div className="lg:col-span-1">
                    <div className="aspect-video rounded-lg overflow-hidden bg-dark-lighter border border-gray-border">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-text">
                          <span className="text-4xl">📱</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                        <div>
                          <h3 className="text-2xl font-bold font-heading mb-1">
                            {project.title}
                            {project.subtitle && (
                              <span className="text-gray-text font-normal text-lg ml-2">
                                | {project.subtitle}
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-text mb-2">
                            {project.tech}
                          </p>
                        </div>
                        <p className="text-sm text-gray-text uppercase tracking-wider mt-2 md:mt-0 whitespace-nowrap">
                          {project.date}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {project.description.map((point, i) => (
                        <li key={i} className="text-gray-text flex">
                          <span className="mr-3 text-white">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
