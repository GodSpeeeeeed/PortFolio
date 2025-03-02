import { motion } from 'framer-motion';
import { Code, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <footer className="py-10 bg-gray-900/80 backdrop-blur-md relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-white font-bold text-xl flex items-center">
              <Code className="mr-2 text-purple-500" />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Aditya Nanda</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Web & App Developer | CS Student
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <motion.button
              onClick={scrollToTop}
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white mb-4"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
            
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-pink-500 mx-1" /> by Aditya Nanda
            </p>
            <p className="text-gray-500 text-xs mt-1">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;