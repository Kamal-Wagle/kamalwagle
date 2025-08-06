'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, GraduationCap, Code, Heart } from 'lucide-react'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="about" className="py-20 bg-white dark:bg-slate-900" ref={ref}>
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
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            From Civil Engineering to Code - My Journey in Tech
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Hello! I'm <strong>Kamal Wagle</strong>, a passionate Full-Stack Web Developer currently pursuing my BSc in Computer Science and Information Technology (CSIT) at Mid-West University in Surkhet, Nepal.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                My journey into tech began with a transition from Civil Engineering to the world of programming. What started as curiosity quickly became a passion for creating digital solutions that solve real-world problems.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I specialize in the <strong>MERN Stack</strong> and have extensive experience with modern technologies like Next.js, TypeScript, and various payment integrations including Stripe, eSewa, and Khalti. I love building scalable web applications and mobile apps that provide exceptional user experiences.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {[
                { icon: MapPin, label: 'Location', value: 'Surkhet, Nepal' },
                { icon: GraduationCap, label: 'Education', value: 'BSc CSIT Student' },
                { icon: Code, label: 'Specialization', value: 'MERN Stack' },
                { icon: Heart, label: 'Passion', value: 'Problem Solving' },
              ].map((fact, index) => (
                <motion.div
                  key={fact.label}
                  variants={itemVariants}
                  className="flex items-center space-x-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-800"
                >
                  <fact.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{fact.label}</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{fact.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why I Code</h3>
              <blockquote className="text-lg italic mb-4">
                "Technology is not just about writing code; it's about creating solutions that make life better for people around the world."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Kamal Wagle</p>
                  <p className="text-sm opacity-80">Full-Stack Developer</p>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
