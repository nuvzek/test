"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/src/data/content"
import { ThemeToggle } from "@/src/components/theme-toggle"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function BlogSection() {
  return (
    <section id="blog" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">最近文章</h2>
          <Link href="/blog" className="flex items-center gap-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            查看更多 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <motion.div key={post.id} variants={item}>
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 h-full">
                  <div className="text-4xl mb-4">{post.cover}</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">{post.tag}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}