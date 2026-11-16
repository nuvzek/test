"use client"

import { Github, Mail, Moon, Sun, Twitter } from "lucide-react"
import { useTheme } from "next-themes"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold">
            blog
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              项目
            </a>
            <a href="#blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              博客
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              联系
            </a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/nuvzek" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
            <Twitter className="w-5 h-5" />
          </a>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <Sun className="w-5 h-5 block dark:hidden" />
            <Moon className="w-5 h-5 hidden dark:block" />
          </button>
        </div>
      </div>
    </nav>
  )
}
