import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="切换主题"
    >
      <Sun className="h-5 w-5 block dark:hidden" />
      <Moon className="h-5 w-5 hidden dark:block" />
    </button>
  )
}