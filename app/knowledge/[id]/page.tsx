import { Suspense } from "react";
import { notFound } from "next/navigation";
import ArticleSkeleton from "@/components/article-skeleton";
import ArticleContent from "@/components/article-content";
import ArticleHeader from "@/components/article-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getKnowledgeById } from "@/lib/api";

export default async function KnowledgePage({
  params,
}: {
  params: { id: string };
}) {
  const result = await getKnowledgeById(params.id);
  console.log("xxx", result);
  if (!result) {
    notFound();
  }

  const mockArticle = {
    title: "心房颤动",
    enTitle: "atrial fibrillation.AF",
    publishDate: "2024-01-25T09:00:00",
    group: ["合集：二尖瓣的鉴别诊断1", "合集：二尖瓣的鉴别诊断2"],
  };

  const article = mockArticle;

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 md:py-8">
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleHeader
          title={article.title}
          desc={article.enTitle}
          publishDate={article.publishDate}
          collections={article.group}
        />

        <Tabs defaultValue={result[0]?.chapter} className="mt-6">
          <TabsList className="w-full">
            {result.map((item) => (
              <TabsTrigger key={item.id} value={item.chapter}>
                {item.chapter}
              </TabsTrigger>
            ))}
          </TabsList>
          {result.map((item) => (
            <TabsContent key={item.id} value={item.chapter}>
              <ArticleContent content={item.content} />
            </TabsContent>
          ))}
        </Tabs>
      </Suspense>
    </main>
  );
}
