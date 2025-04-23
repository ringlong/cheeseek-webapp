import { Suspense } from "react";
import { notFound } from "next/navigation";
import ArticleContent from "@/components/article-content";
import ArticleHeader from "@/components/article-header";
import ArticleSkeleton from "@/components/article-skeleton";

// 获取文章数据的函数
async function getArticle(id: string) {
  try {
    // 这里是模拟API调用，实际使用时替换为真实API
    // const res = await fetch(`https://your-api.com/articles/${id}`, { next: { revalidate: 3600 } })
    // if (!res.ok) throw new Error('Failed to fetch article')
    // return res.json()

    // 模拟数据
    return {
      id,
      title: "心血管疾病：认识、预防与应对",
      publishDate: "2024-01-25T09:00:00",
      location: "北京",
      tags: ["健康", "医疗", "心血管疾病", "预防保健"],
      collections: ["二尖瓣的鉴别诊断"],
      content: `
心血管疾病自称人类健康的"头号杀手"，全球每年近1800万人因它失去生命。在中国，每5例死亡中就有2例与之相关（数据来源：《中国心血管健康与疾病报告2021》），且我国目前有约3.3亿心血管病患者（数据来源：《中国心血管健康与疾病报告2022》），这一数字还在持续增长。这些疾病早期常悄无声息，一旦发作却可能致命，且呈现出年轻化趋势，30 - 40岁人群心肌梗死发病率年均增长5%以上，动脉粥样硬化从青年时期就可能开始发展，熬夜、压力、肥胖、吸烟等现代生活方式加速了疾病进程。

心血管疾病（Cardiovascular Disease, CVD）是影响心脏和血管系统的一系列疾病，主要包括高血压、冠心病、心律失常、动脉硬化、心力衰竭等。这些疾病会损害心脏和血管系统，影响循环功能，致死致残率高。

## 常见心血管疾病

|病程|名称|过程|
|---|---|---|
|冠心病|不知道|不知道|
|心血管|一|三|

\`\`\`
**高血压：** 最常见的心血管疾病之一，早期可能无症状，严重时会出现[头痛](https://b3log.org)、眩晕。持续高压会损伤心、脑、肾、眼，诊断标准为非同日3次测量≥140/90mmHg。应对方法包括低盐饮食（每日<5g）、规律服药、家庭血压监测。
\`\`\`

![血压测量示意图](https://example.com/images/blood-pressure.jpg)
*图1: 正确的血压测量方法示意图*

**冠心病：** 由冠状动脉粥样硬化导致心肌缺血，警报信号有胸痛（压榨感）、左臂放射痛、运动后气短。晨起、寒冷刺激、情绪激动时易发心绞痛，发作时硝酸甘油舌下含服，持续胸痛15分钟需立即拨打120。

## 心血管疾病的危险因素

分为可改变和不可改变因素。可改变因素有\`高血压\`、糖尿病、吸烟、肥胖、缺乏运动、焦虑、酗酒、饮食口味重等，可通过调整生活方式和医疗干预控制；不可改变因素如年龄、性别、遗传等，虽无法改变，但可加强监测和早期干预。

> 我不相信还有什么可以改变的。

\`\`\`
const codeExample = () => {
  console.log('Hello, World!')
}
\`\`\`
## 预防心血管疾病的健康生活方式

![健康生活方式](https://example.com/images/healthy-lifestyle.jpg)
*图2: 预防心血管疾病的健康生活方式示意图*


**合理膳食：** 多吃深海鱼（每周2次）、坚果（每日一小把）、全谷物、蔬菜和水果（富含氧化剂物质，能降低血压等）、适量摄入全谷物和豆类（降胆固醇和血糖）、鱼类（尤其深海鱼含Omega-3脂肪酸，降血脂和减少血栓）。
**规律运动：** 每周至少3次30分钟以上的高强度运动，如快走、慢跑、羽毛球、游泳等。
**戒烟：** 戒烟能降低血压、血脂、甘油三酯等，预防心血管疾病。
**控制饮食：** 控制饮食，避免油腻、高糖、高盐等，降低胆固醇和血糖。

心血管疾病可防可控，记住两个"120"：出现胸痛立即拨打120；把握心梗抢救黄金120分钟。从现在起，为自己制定"护心计划"，关注心血管健康。


### 参考文献

1. 中国心血管健康与疾病报告编写组. 中国心血管健康与疾病报告2021[J]. 中国循环杂志, 2022, 37(1): 7-13.
2. 中国心血管健康与疾病报告编写组. 中国心血管健康与疾病报告2022[J]. 中国循环杂志, 2023, 38(1): 11-18.
3. 中华医学会心血管病学分会. 中国心血管病预防指南[J]. 中华心血管病杂志, 2023, 51(3): 121-132.
4. World Health Organization. Cardiovascular diseases (CVDs) fact sheet[EB/OL]. (2023-10-11)[2024-01-25].
`,
    };
  } catch (error) {
    console.error("Error fetching article:", error);
    return null;
  }
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getArticle(params.id);

  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 md:py-8">
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleHeader
          title={article.title}
          publishDate={article.publishDate}
          location={article.location}
          tags={article.tags}
          collections={article.collections}
        />
        <ArticleContent content={article.content} />
      </Suspense>
    </main>
  );
}
