import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
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
  
  const educationData = [
    {
      degree: "B.Tech in Computer Science and System Engineering",
      institution: "KIIT University",
      location: "Bhubaneswar, India",
      period: "2022 - 2026",
      description: "Currently pursuing a Bachelor's degree in Computer Science and System Engineering, focusing on software development, algorithms, data structures, and system design.",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      institution: "Doon International School",
      location: "Dehradun, India",
      period: "2020 - 2022",
      description: "Completed higher secondary education with a focus on science and mathematics, laying a strong foundation for further studies in computer science.",
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Kendriya Vidyalaya 4",
      location: "India",
      period: "2018 - 2020",
      description: "Completed secondary education with excellent academic performance, developing a keen interest in science and technology.",
    },
  ];
  
  return (
    <section id="education" className="py-20 relative">
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
                Education
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              My academic journey that has shaped my knowledge and skills in computer science and technology.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block"></div>
            
            {educationData.map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`mb-12 md:mb-0 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-auto md:pl-0' : 'md:pl-12 md:ml-auto md:mr-auto md:pr-0'} md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute top-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 z-10 left-[-12px] md:left-auto md:right-[-12px] md:left-[-12px]"></div>
                
                <div className={`bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 relative ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <div className="flex items-center mb-4 text-purple-400">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    <h3 className="text-xl font-semibold">{item.degree}</h3>
                  </div>
                  
                  <h4 className="text-white font-medium mb-2">{item.institution}</h4>
                  
                  <div className="flex items-center text-gray-400 mb-2 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-400 mb-4 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{item.period}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Certifications & Additional Learning</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                <h4 className="text-white font-medium mb-2">Web Development Bootcamp</h4>
                <p className="text-gray-400 text-sm mb-2">Comprehensive course covering frontend and backend technologies</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023</span>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
                <h4 className="text-white font-medium mb-2">Mobile App Development</h4>
                <p className="text-gray-400 text-sm mb-2">Specialized training in React Native and cross-platform development</p>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2023</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-600/10 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Education;