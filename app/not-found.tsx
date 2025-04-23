import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h2 className="text-2xl font-bold mb-4">文章未找到</h2>
      <p className="text-gray-600 mb-6">抱歉，您请求的文章不存在或已被移除。</p>
      <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
        返回首页
      </Link>
    </div>
  )
}
