"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Mail, ArrowRight } from "lucide-react"
import { projects } from "@/src/data/content"
import { BlogSection } from "@/src/components/blog-section"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function HomeView() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold mb-6">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  nuvzek
                </span>
              </motion.h1>
              <motion.p variants={item} className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Full-stack developer &amp; open-source enthusiast. Building beautiful, performant web experiences with modern technologies.
              </motion.p>
              <motion.div variants={item} className="flex gap-4 flex-wrap">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/nuvzek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg font-medium transition-colors"
                >
                  GitHub
                </a>
              </motion.div>
            </div>
            <motion.div variants={item} className="flex justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div key={project.name} variants={item}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-500 px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                        {project.tag}
                      </span>
                    </div>
                    <span className="text-2xl">⭐ {(project.stars / 1000).toFixed(1)}k</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 mb-8"
          >
            Have a question or want to collaborate? Reach out through any of these channels.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/nuvzek"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:hello@nuvzek.dev"
              className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-500 text-sm border-t border-gray-200 dark:border-gray-800">
        <p>© {new Date().getFullYear()} nuvzek. Built with Next.js &amp; TailwindCSS.</p>
      </footer>
    </>
  )
}
