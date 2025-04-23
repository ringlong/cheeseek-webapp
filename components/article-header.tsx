import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatChineseDateTime } from "@/lib/utils";

interface ArticleHeaderProps {
  title: string;
  desc?: string;
  publishDate: string;
  location?: string;
  tags?: string[];
  collections?: string[];
}

export default function ArticleHeader({
  title,
  desc,
  publishDate,
  location,
  tags,
  collections,
}: ArticleHeaderProps) {
  const formattedDate = formatChineseDateTime(publishDate);

  return (
    <header className="mb-8">
      <h1 className="text-2xl font-bold leading-tight mb-4">{title}</h1>
      {desc && <p className="text-xs text-gray-600 mb-4">{desc}</p>}

      <div className="text-gray-600 mb-4">
        更新于 {formattedDate} {location}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags &&
          tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="font-normal rounded"
            >
              <Link href={`/tags/${encodeURIComponent(tag)}`}>{tag}</Link>
            </Badge>
          ))}
        {collections &&
          collections.map((collection) => (
            <Badge
              key={collection}
              variant="outline"
              className="bg-blue-100 text-[#1A7DED] border-blue-100 rounded font-normal text-xs"
            >
              <Link href={`/collections/${encodeURIComponent(collection)}`}>
                合集：{collection}
              </Link>
            </Badge>
          ))}
      </div>
    </header>
  );
}
