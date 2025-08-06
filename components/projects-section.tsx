'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ProjectsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFilter, setActiveFilter] = useState('All')

  const projects = [
    {
      title: "School Management System",
      description: "Complete school management platform with student enrollment, grade tracking, and parent portal. Built with MERN stack and integrated payment system.",
      image: "/school-management-dashboard.png",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      category: "Education",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Restaurant Ordering Platform",
      description: "Full-featured restaurant website with online ordering, table reservation, and kitchen management system. Integrated with eSewa payment gateway.",
      image: "/restaurant-ordering-app.png",
      tech: ["Next.js", "TypeScript", "MongoDB", "eSewa"],
      category: "Business",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Car Showroom Website",
      description: "Modern car showroom platform with inventory management, customer inquiries, and financing calculator. Responsive design with smooth animations.",
      image: "/modern-car-showroom-website.png",
      tech: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      category: "Business",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Reconditioned Vehicle Marketplace",
      description: "Marketplace for buying and selling reconditioned vehicles with advanced search, comparison tools, and secure payment integration via Khalti.",
      image: "/vehicle-marketplace.png",
      tech: ["Next.js", "TypeScript", "MongoDB", "Khalti", "Stripe"],
      category: "Finance",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "E-commerce Payment Integration",
      description: "Multi-vendor e-commerce platform with comprehensive payment solutions supporting Stripe, eSewa, and Khalti for Nepali market.",
      image: "/ecommerce-payment-system.png",
      tech: ["React", "Node.js", "Express", "Multiple Payment Gateways"],
      category: "Finance",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "CSIT Learning Portal",
      description: "Educational platform for CSIT students with course materials, assignments, and progress tracking. Built as part of university project.",
      image: "/learning-management-system.png",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Education",
      github: "#",
      live: "#",
      featured: false
    }
  ]

  const categories = ['All', 'Education', 'Business', 'Finance']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Real-world applications built with modern technologies
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "hover:bg-slate-100 dark:hover:bg-slate-800"
              }`}
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                project.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white text-slate-900"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-gradient-to-r from-blue-500 to-purple-600 text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-3 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white transition-all duration-300"
          >
            View All Projects on GitHub
            <Github className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
