"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Search } from "lucide-react"
import { blogPosts } from "@/src/data/content"
import { ThemeToggle } from "@/src/components/theme-toggle"

const tags = ["全部", ...Array.from(new Set(blogPosts.map((p) => p.tag)))]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export function BlogPage() {
  const [active, setActive] = useState("全部")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchTag = active === "全部" || post.tag === active
      const matchQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      return matchTag && matchQuery
    })
  }, [active, query])

  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10"
        >
          <div>
            <h1 className="text-4xl font-bold mb-2">博客</h1>
            <p className="text-gray-600 dark:text-gray-400">
              记录技术、思考与项目复盘 · 共 {blogPosts.length} 篇
            </p>
          </div>
          <ThemeToggle />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-10">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索文章标题或摘要…"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:border-blue-600 dark:focus:border-blue-400 transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === tag
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20">没有找到匹配的文章。</p>
        ) : (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post) => (
              <motion.div key={post.id} variants={item}>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 h-full">
                    <div className="text-4xl mb-4">{post.cover}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                        {post.tag}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
