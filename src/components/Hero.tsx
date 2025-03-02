import { motion } from 'framer-motion';
import { ArrowDown, Code, Laptop, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <div className="inline-block p-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600">
              <Code className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Aditya Nanda
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-2 mb-8"
          >
            <div className="h-[1px] w-10 bg-gradient-to-r from-purple-500 to-transparent"></div>
            <p className="text-xl md:text-2xl text-gray-300">Developer & CS Student</p>
            <div className="h-[1px] w-10 bg-gradient-to-l from-purple-500 to-transparent"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-gray-400 max-w-2xl mb-10 text-lg"
          >
            Pursuing Computer Science and System Engineering at KIIT University (2022-2026).
            Specializing in web and app development with a passion for creating modern, 
            responsive, and visually stunning digital experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-medium"
            >
              <Laptop className="w-5 h-5" />
              <span>Web Development</span>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gray-800 text-white border border-gray-700 px-6 py-3 rounded-full font-medium"
            >
              <Smartphone className="w-5 h-5" />
              <span>App Development</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        >
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-pink-600/20 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;