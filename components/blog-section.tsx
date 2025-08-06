'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const BlogSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const blogPosts = [
    {
      title: "Complete Guide to MERN Stack Development",
      excerpt: "Learn how to build full-stack applications using MongoDB, Express.js, React, and Node.js. A comprehensive guide for beginners.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image: "/mern-stack-development.png",
      slug: "mern-stack-guide"
    },
    {
      title: "BSc CSIT Notes: Data Structures and Algorithms",
      excerpt: "Complete notes on DSA covering arrays, linked lists, stacks, queues, trees, and graphs with C++ implementations.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "CSIT Notes",
      image: "/data-structures-algorithms.png",
      slug: "dsa-notes"
    },
    {
      title: "Payment Integration in Nepal: eSewa vs Khalti",
      excerpt: "Comparing popular Nepali payment gateways and how to integrate them in your web applications.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Payment Systems",
      image: "/placeholder-e7vpl.png",
      slug: "nepal-payment-gateways"
    },
    {
      title: "Object-Oriented Programming in C++",
      excerpt: "Understanding OOP concepts with practical examples. Perfect study material for CSIT students.",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "CSIT Notes",
      image: "/c-oop-programming.png",
      slug: "cpp-oop-guide"
    },
    {
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Master responsive design patterns and create beautiful interfaces with Tailwind CSS utility classes.",
      date: "2023-12-20",
      readTime: "7 min read",
      category: "Frontend",
      image: "/tailwind-responsive-design.png",
      slug: "tailwind-responsive-ui"
    },
    {
      title: "Next.js 14 App Router: Complete Guide",
      excerpt: "Everything you need to know about the new App Router in Next.js 14, including server components and layouts.",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Next.js",
      image: "/nextjs-app-router.png",
      slug: "nextjs-app-router"
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
    <section id="blog" className="py-20 bg-slate-50 dark:bg-slate-800" ref={ref}>
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
            Blog & Notes
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
          >
            Sharing knowledge through articles, tutorials, and CSIT study materials
          </motion.p>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12"
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {blogPosts[0].category}
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.slug}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <BookOpen className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-lg mb-6 opacity-90">
              Get the latest articles, CSIT notes, and programming tutorials delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-blue-600 hover:bg-slate-100 px-6 py-2">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
