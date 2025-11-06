import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 bg-dark-lighter">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            EDUCATION
          </h2>
          
          <div className="space-y-8 mb-16">
            <div className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-text uppercase tracking-wider mb-2">
                    EXPECTED GRADUATION: MAY 2027
                  </p>
                  <h3 className="text-2xl font-bold font-heading mb-2">
                    UNIVERSITY OF BRITISH COLUMBIA
                  </h3>
                  <p className="text-gray-text">
                    COMBINED MAJOR IN BUSINESS AND COMPUTER SCIENCE
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">
            TECHNICAL SKILLS
          </h2>
          
          <div className="space-y-6 mb-16">
            <div className="card">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-semibold font-heading mb-3 text-white">Languages</h3>
                  <p className="text-gray-text">
                    Java, Python, C/C++, SQL, JavaScript, HTML/CSS, R, Swift
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold font-heading mb-3 text-white">Frameworks</h3>
                  <p className="text-gray-text">
                    React.js, React Native, Node.js + Express.js, Flask, JUnit, Bootstrap, Tailwind
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold font-heading mb-3 text-white">Developer Tools</h3>
                  <p className="text-gray-text">
                    Git, Unix Shell, Kubernetes, Figma, Amazon Web Services, VS Code, PyCharm, Jupyter, RStudio, PostgreSQL, MySQL, SQLite, Docker
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold font-heading mb-3 text-white">Libraries</h3>
                  <p className="text-gray-text">
                    NumPy, Matplotlib, JUnit, Pandas, Scikit-learn
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">
            ORGANIZATIONS & ACTIVITIES
          </h2>
          
          <div className="space-y-4">
            <div className="card">
                <p className="text-gray-text">— UBC BUCS</p>
                <p className="text-gray-text">— Google Student Developer Club</p>
                 <p className="text-gray-text">— Motion UBC</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
