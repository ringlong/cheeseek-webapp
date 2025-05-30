import { Suspense } from "react";
import ArticleContent from "@/components/article-content";
import ArticleHeader from "@/components/article-header";
import ArticleSkeleton from "@/components/article-skeleton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "强心用户服务条款",
  description: "我们的用户服务条款，详细说明使用我们服务的条件和规则",
};

async function getTermsContent() {
  // 用户服务条款内容
  return {
    title: "用户服务条款",
    publishDate: new Date().toISOString(),
    content: `
# 用户服务条款

最后更新日期：${new Date().toLocaleDateString('zh-CN')}

## 1. 引言

欢迎使用我们的服务。本用户服务条款（"条款"）是您与我们之间关于您使用我们服务的法律协议。通过访问或使用我们的服务，您确认您已阅读、理解并同意受这些条款的约束。

## 2. 服务描述

我们提供一个专注于医疗健康知识的内容平台，包括但不限于文章、知识库等信息服务。

## 3. 用户账户

3.1 **注册要求**：在使用特定服务时，您可能需要创建账户。您同意提供准确、完整和最新的信息。

3.2 **账户安全**：您负责维护您账户的保密性，并对发生在您账户下的所有活动负责。

3.3 **账户终止**：我们保留在我们自行判断认为适当的情况下，拒绝服务、终止账户或取消订单的权利。

## 4. 用户行为准则

4.1 **合法使用**：您同意仅将我们的服务用于合法目的，并遵守所有适用法律和法规。

4.2 **禁止行为**：您不得：
- 发布、传输任何非法、有害、威胁、辱骂、骚扰、诽谤、淫秽或其他不适当的内容
- 冒充任何人或实体，或虚假陈述您与任何人或实体的关系
- 干扰或破坏服务或连接到服务的服务器和网络
- 收集或存储其他用户的个人数据，除非得到明确授权

## 5. 知识产权

5.1 **我们的内容**：服务中的所有内容、功能和可用性，包括但不限于文本、图形、徽标、图标、图像以及脚本和软件，均为我们的财产或我们的许可方的财产，受著作权、商标和其他知识产权法律保护。

5.2 **用户内容**：对于您提交、发布或显示在服务上的任何内容，您授予我们全球性、非独占性、免版税、可转让和可再许可的权利，以使用、复制、修改、创建衍生作品、分发和公开展示该内容。

## 6. 免责声明

6.1 **服务"按现状"提供**：我们的服务按"现状"和"可用"基础提供，不附带任何形式的保证。

6.2 **医疗建议免责声明**：我们提供的信息仅供参考，不构成专业医疗建议。在做出任何医疗决定前，请咨询合格的医疗专业人士。

## 7. 责任限制

在适用法律允许的最大范围内，我们不对任何间接、附带、特殊、后果性或惩罚性损害负责，包括但不限于利润损失、数据损失、替代成本或其他无形损失。

## 8. 条款修改

我们可能会不时修改这些条款。修改后的条款将在我们的网站上发布时立即生效。您继续使用服务将视为接受修改后的条款。

## 9. 适用法律

这些条款受中华人民共和国法律管辖，并根据其解释，不考虑冲突法原则。

## 10. 联系我们

如果您对这些条款有任何问题，请联系我们：

- 邮箱：support@example.com
- 电话：+86 123 4567 8910

感谢您阅读我们的用户服务条款。
`,
  };
}

export default async function TermsPage() {
  const terms = await getTermsContent();

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 md:py-8">
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleHeader
          title={terms.title}
          publishDate={terms.publishDate}
        />
        <ArticleContent content={terms.content} />
      </Suspense>
    </main>
  );
} 