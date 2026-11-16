export const blogPostContent: Record<string, string> = {
  "vitepress-blog": `
# 如何用 VitePress 打造极客博客

VitePress 是 Vue 3 和 Vite 驱动的静态站点生成器，专为技术文档和个人博客设计。

## 为什么选择 VitePress？

- **极致性能**：基于 Vite，HMR 毫秒级响应
- **SEO 友好**：自动预渲染和 meta 标签
- **Markdown 优先**：用 MDX 编写交互式内容
- **暗色模式**：内置主题切换支持

## 快速开始

\`\`\`bash
npm create vitepress@latest my-blog
\`\`\`

## 高级配置

\`\`\`ts
// .vitepress/config.ts
export default {
  themeConfig: {
    nav: [{ text: '博客', link: '/blog/' }],
    sidebar: {
      '/blog/': [{ text: '分类', link: '/blog/' }],
    },
  },
}
\`\`\`

## 性能优化

1. 使用 \`<ClientOnly>\` 延迟加载重型组件
2. 启用 gzip 压缩
3. 图片懒加载和 WebP 格式
`,
  "react-concurrent": `
# React 18 并发模式实战

React 18 引入了并发特性，让应用可以智能地分配渲染优先级。

## 核心 API

### useTransition

\`\`\`tsx
const [isPending, startTransition] = useTransition()

startTransition(() => {
  setState(newValue)
})
\`\`\`

### useDeferredValue

\`\`\`tsx
const deferredValue = useDeferredValue(value, 200)
\`\`\`

## 实战场景

- 搜索框防抖
- 大型列表虚拟化
- 路由切换动画
`,
  "tailwind-v4": `
# TailwindCSS v4 新特性预览

TailwindCSS v4 带来了革命性的性能提升和新功能。

## 重大改进

- **CSS-first 配置**：不再需要 \`tailwind.config.js\`
- **引擎重写**：Rust 引擎，速度提升 5-8 倍
- **自动前缀**：内置 Autoprefixer
- **容器查询**：原生支持

## 迁移指南

\`\`\`bash
npm install tailwindcss@next
npx tailwindcss init
\`\`\`

\`\`\`css
@import "tailwindcss";
\`\`\`
`,
  "ai-assistant": `
# 构建你的第一个 AI 助手

从 AI 零基础到打造一个实用的开发助手。

## 技术栈

- **OpenAI API**：GPT-4 模型
- **LangChain**：链式调用和记忆
- **Web UI**：React + Streamlit

## 架构设计

\`\`\`
用户输入 → 意图识别 → 工具调用 → 生成回复 → 历史存储
\`\`\`

## 关键代码

\`\`\`python
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4")
prompt = ChatPromptTemplate.from_messages([
    ("system", "你是一个开发助手"),
    ("human", "{input}"),
])
\`\`\`
`,
}