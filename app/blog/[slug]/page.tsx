import { PostPage } from "@/src/views/post-page"

export default function PostDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  return <PostPage params={params} />
}
