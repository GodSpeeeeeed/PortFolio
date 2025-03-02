import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Laptop, Smartphone, Server, Database, Globe } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-10">
            {/* Profile Photo Card */}
            <motion.div 
              variants={itemVariants} 
              className="md:w-1/3 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Aditya Nanda" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold text-white">Aditya Nanda</h3>
                  <p className="text-gray-300 text-sm">Developer & CS Student</p>
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-xs text-purple-300 border border-purple-500/30">
                    Web Dev
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-xs text-purple-300 border border-purple-500/30">
                    App Dev
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-xs text-purple-300 border border-purple-500/30">
                    UI/UX
                  </span>
                </div>
                
                <div className="flex justify-between text-sm text-gray-400">
                  <span>KIIT University</span>
                  <span>2022-2026</span>
                </div>
              </div>
            </motion.div>
            
            {/* About Content */}
            <motion.div variants={itemVariants} className="md:w-2/3 space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Hello! I'm Aditya Nanda, a passionate Computer Science and System Engineering student at KIIT University (2022-2026). I have a strong foundation in both theoretical computer science and practical software development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I completed my 12th grade at Doon International School in 2022 and my 10th grade at KV 4 in 2020, where I developed a strong academic foundation before pursuing my passion for technology and programming.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in tech has led me to specialize in web and app development, where I combine technical skills with creative design to build modern, responsive, and visually appealing applications.
              </p>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-xl font-semibold mb-6 text-white">What I Do</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                      <Laptop className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Web Development</h4>
                      <p className="text-gray-400 text-sm">Creating responsive, modern websites</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                      <Smartphone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">App Development</h4>
                      <p className="text-gray-400 text-sm">Building intuitive mobile applications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">UI/UX Design</h4>
                      <p className="text-gray-400 text-sm">Crafting beautiful user interfaces</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-lg mr-4">
                      <Server className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Backend Development</h4>
                      <p className="text-gray-400 text-sm">Creating robust server-side apps</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 mt-8"
              >
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700">
                  Creative Thinker
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700">
                  Fast Learner
                </span>
                <span className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700">
                  Team Player
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default About;