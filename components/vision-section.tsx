'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Rocket, Brain, Users, Globe, Zap } from 'lucide-react'

const VisionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const goals = [
    {
      icon: Target,
      title: "Work at Google",
      description: "Join one of the world's leading tech companies and contribute to products used by billions of people worldwide.",
      timeline: "2025-2026",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Start a Dev Agency",
      description: "Launch my own software development agency focusing on helping Nepali businesses establish their digital presence.",
      timeline: "2026-2027",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Brain,
      title: "Master AI/ML",
      description: "Dive deep into artificial intelligence and machine learning to build intelligent applications and solutions.",
      timeline: "2024-2025",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Mentor Students",
      description: "Help aspiring developers and CSIT students by sharing knowledge through workshops and online courses.",
      timeline: "Ongoing",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Create software solutions that solve real-world problems and make a positive impact on society.",
      timeline: "Long-term",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Zap,
      title: "Innovation Hub",
      description: "Establish a tech innovation hub in Nepal to foster local talent and technological advancement.",
      timeline: "2028-2030",
      color: "from-yellow-500 to-orange-500"
    }
  ]

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
    <section id="vision" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
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
            Vision & Future Goals
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            My roadmap to making a meaningful impact in the tech industry
          </motion.p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">My Mission</h3>
            <blockquote className="text-lg md:text-xl italic leading-relaxed max-w-4xl mx-auto">
              "To bridge the gap between innovative technology and real-world solutions, 
              while empowering the next generation of developers in Nepal and beyond. 
              I believe in using code not just as a tool, but as a means to create 
              positive change in our communities."
            </blockquote>
            <div className="mt-6">
              <div className="w-16 h-1 bg-white/50 mx-auto mb-4"></div>
              <p className="font-semibold">Kamal Wagle</p>
              <p className="text-sm opacity-80">Full-Stack Developer & Aspiring Tech Leader</p>
            </div>
          </div>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {goals.map((goal, index) => (
            <motion.div
              key={goal.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${goal.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <goal.icon className="h-6 w-6 text-white" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {goal.title}
                  </h3>
                  <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-full">
                    {goal.timeline}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Current Focus */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
              Current Focus Areas
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Academic Excellence",
                  description: "Completing BSc CSIT with distinction while building practical projects",
                  progress: 75
                },
                {
                  title: "Skill Development",
                  description: "Mastering advanced React patterns, system design, and cloud technologies",
                  progress: 60
                },
                {
                  title: "Community Building",
                  description: "Contributing to open source and helping fellow CSIT students",
                  progress: 45
                }
              ].map((focus, index) => (
                <div key={focus.title} className="text-center">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                    {focus.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {focus.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${focus.progress}%` } : { width: 0 }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {focus.progress}% Complete
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionSection
