import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  
  const [activeFilter, setActiveFilter] = useState('all');
  
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
  
  const projects = [
    {
      title: "Modern E-commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, user authentication, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      tags: ["web", "fullstack"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "A mobile application for managing tasks, setting reminders, and tracking productivity with intuitive UI.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80",
      tags: ["mobile", "frontend"],
      technologies: ["React Native", "Firebase", "Redux"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern design, animations, and contact form functionality.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      tags: ["web", "frontend"],
      technologies: ["React", "Three.js", "GSAP", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "A dashboard for social media analytics with real-time data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      tags: ["web", "fullstack"],
      technologies: ["Next.js", "TypeScript", "Chart.js", "Firebase"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A mobile app that provides accurate weather forecasts with beautiful visualizations and location-based services.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["mobile", "frontend"],
      technologies: ["Flutter", "Dart", "Weather API", "Google Maps API"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "Blog Platform",
      description: "A full-stack blog platform with content management system, user authentication, and comment functionality.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      tags: ["web", "fullstack"],
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      githubLink: "#",
    },
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  const filters = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Fullstack', value: 'fullstack' },
  ];
  
  return (
    <section id="projects" className="py-20 bg-gray-900/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Projects
              </span>
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise in web and mobile development.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.value
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 group"
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity duration-300"
            >
              <Code className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/20 to-transparent -z-10"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-pink-600/10 rounded-full filter blur-3xl -z-10"></div>
    </section>
  );
};

export default Projects;