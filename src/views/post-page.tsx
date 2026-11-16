"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import ReactMarkdown from "react-markdown"
import rehypeSlug from "rehype-slug"
import rehypeHighlight from "rehype-highlight"
import remarkGfm from "remark-gfm"
import { blogPosts } from "@/src/data/content"
import { blogPostContent } from "@/src/lib/blog-data"
import { ThemeToggle } from "@/src/components/theme-toggle"

export function PostPage({ params }: { params: { slug: string } }) {
  const idx = blogPosts.findIndex((p) => p.slug === params.slug)
  const post = idx >= 0 ? blogPosts[idx] : null
  const content = post ? blogPostContent[post.slug] : ""
  const prev = idx > 0 ? blogPosts[idx - 1] : null
  const next = idx >= 0 && idx < blogPosts.length - 1 ? blogPosts[idx + 1] : null

  return (
    <article className="min-h-screen pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          返回博客
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
              {post?.tag}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-500">{post?.date}</span>
            <div className="flex-1" />
            <ThemeToggle />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">{post?.title}</h1>

          <div className="prose dark:prose-invert max-w-none prose-blue">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug, rehypeHighlight]}
            >
              {content}
            </ReactMarkdown>
          </div>
        </motion.div>

        {(prev || next) && (
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group max-w-xs">
                <div className="text-xs text-gray-500 dark:text-gray-500 mb-2 flex items-center gap-1">
                  <ChevronLeft className="w-4 h-4" /> 上一篇
                </div>
                <div className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
                  {prev.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/blog/${next.slug}`} className="group max-w-xs text-right">
                <div className="text-xs text-gray-500 dark:text-gray-500 mb-2 flex items-center justify-end gap-1">
                  下一篇 <ChevronRight className="w-4 h-4" />
                </div>
                <div className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center justify-end gap-1">
                  {next.title} <ArrowLeft className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ) : <div />}
          </div>
        )}
      </div>
    </article>
  )
}
