export default function ArticleSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-10 bg-gray-200 rounded-md mb-4 w-3/4"></div>
      <div className="h-5 bg-gray-200 rounded-md mb-6 w-1/3"></div>

      <div className="flex flex-wrap gap-2 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-7 bg-gray-200 rounded-full w-16"></div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {[1, 2].map((i) => (
          <div key={i} className="h-8 bg-gray-200 rounded-full w-40"></div>
        ))}
      </div>

      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-5 bg-gray-200 rounded-md w-full"></div>
        ))}
      </div>
    </div>
  )
}
