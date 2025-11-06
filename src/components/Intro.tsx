import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Intro = () => {
  return (
    <section className="py-20 bg-dark-lighter border-t border-gray-border">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* About Text - Left Side */}
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <h2 className="text-2xl font-bold font-heading mb-4">about me</h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  hey everyone! I’m Andy, a developer who loves building things and problem solving.
I focus on mobile app development using Swift and React Native, crafting experiences that blend performance with great design and mobility.
                </p>
                <p className="text-gray-text leading-relaxed mb-4">
                  lately, I’ve been diving into AI integration and edge AI, exploring how intelligent systems can live closer to users and make everyday tools more intuitive.
                </p>
                <p className="text-gray-text leading-relaxed mb-4">
                  i’m also learning more about fintech and quantitative modeling. I'm currently working on a very rudimentary Monte Carlo trading simulation project to understand how data, probability, and code intersect in financial systems.
                </p>
                <p className="text-gray-text leading-relaxed mb-4">
                  when I’m not debugging or training a model, I’m probably DJing, going to the gym, thrifting, or listening to music. 
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                >
                  read more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Spotify Widget */}
              <div className="card">
                <h3 className="text-lg font-semibold font-heading mb-3">currently listening to</h3>
                <div className="bg-dark-lighter rounded-lg p-6 border border-gray-border">
                  <p className="text-gray-text text-sm">
                    [TODO: spotify widget will go here]
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Image - Right Side */}
            <div className="order-1 lg:order-2">
              <div className="aspect-square rounded-lg overflow-hidden bg-dark-card border border-gray-border w-full">
                <div className="w-full h-full flex items-center justify-center text-gray-text">
                  <span className="text-8xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Centered Below */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center gap-4 mt-12"
          >
            <Link
              to="/about"
              className="btn btn-outline"
            >
              full about
            </Link>
            <Link
              to="/projects"
              className="btn btn-outline"
            >
              view projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
