import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  const frontendSkills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Next.js', level: 75 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'TypeScript', level: 70 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 75 },
    { name: 'Express.js', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'Firebase', level: 80 },
    { name: 'REST API', level: 75 },
    { name: 'SQL', level: 60 },
  ];
  
  const mobileSkills = [
    { name: 'React Native', level: 75 },
    { name: 'Flutter', level: 65 },
    { name: 'Mobile UI Design', level: 80 },
    { name: 'App Performance', level: 70 },
  ];
  
  const otherSkills = [
    { name: 'Git/GitHub', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Responsive Design', level: 90 },
  ];
  
  const SkillBar = ({ name, level }: { name: string; level: number }) => (
    <motion.div variants={itemVariants} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-400 text-sm">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div 
          className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
      </div>
    </motion.div>
  );
  
  return (
    <section id="skills" className="py-20 bg-gray-900/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              I've developed a diverse set of skills throughout my journey as a developer.
              Here's a breakdown of my technical expertise:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-white">Frontend Development</h3>
              {frontendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-white">Backend Development</h3>
              {backendSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-white">Mobile Development</h3>
              {mobileSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50">
              <h3 className="text-xl font-semibold mb-6 text-white">Other Skills</h3>
              {otherSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </motion.div>
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Firebase', 'Git', 'React Native', 'Express', 'Redux', 'GSAP', 'Three.js', 'Framer Motion'].map((tech, index) => (
                <motion.span 
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700 hover:border-purple-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent -z-10"></div>
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-pink-600/10 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Skills;