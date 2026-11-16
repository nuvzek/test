import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/src/components/navbar"
import { ThemeProviderWrapper } from "@/src/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "nuvzek | Developer & Designer",
  description: "个人博客，分享技术、项目和思考",
  keywords: ["developer", "full-stack", "react", "typescript", "open-source"],
  authors: [{ name: "nuvzek" }],
  openGraph: {
    title: "nuvzek",
    description: "Full-stack developer building beautiful web experiences.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderWrapper>
          <Navbar />
          <main>{children}</main>
        </ThemeProviderWrapper>
      </body>
    </html>
  )
}
