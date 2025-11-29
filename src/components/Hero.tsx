import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-netflix-red rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-netflix-red rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h1 className="text-[20rem] font-bold font-heading leading-none">AG</h1>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Netflix-style badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-netflix-red text-white text-sm font-bold uppercase tracking-wider">
              Portfolio
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold font-heading mb-8 leading-tight">
            Andy Guo
          </h1>

          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-text mb-6 max-w-3xl font-light">
            Full Stack Developer
          </p>

          <p className="text-lg md:text-xl text-gray-text mb-12 max-w-2xl">
            Building innovative solutions with AI, mobile, and web technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="btn btn-primary text-lg px-8 py-4"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn btn-outline text-lg px-8 py-4"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-gray-border rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-netflix-red rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
