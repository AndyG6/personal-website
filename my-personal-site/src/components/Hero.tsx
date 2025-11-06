import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h1 className="text-[20rem] font-bold font-heading leading-none">andy guo</h1>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 leading-tight">
            hi, i'm <span className="text-primary">andy</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-text mb-12 max-w-2xl">
            welcome to my corner of the internet.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#about"
              className="btn btn-primary"
            >
              learn more
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
            >
              get in touch
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-gray-border rounded-full flex justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
