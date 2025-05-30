import { Suspense } from "react";
import ArticleContent from "@/components/article-content";
import ArticleHeader from "@/components/article-header";
import ArticleSkeleton from "@/components/article-skeleton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "强心隐私政策",
  description: "我们的隐私政策，说明我们如何收集、使用和保护您的个人信息",
};

async function getPrivacyContent() {
  // 隐私政策内容
  return {
    title: "隐私政策",
    publishDate: new Date().toISOString(),
    content: `
# 隐私政策

最后更新日期：${new Date().toLocaleDateString('zh-CN')}

## 1. 引言

我们深知个人信息对您的重要性，并会尽全力保护您的个人信息安全可靠。我们致力于维持您对我们的信任，恪守以下原则，保护您的个人信息：权责一致原则、目的明确原则、选择同意原则、最少够用原则、确保安全原则、主体参与原则、公开透明原则等。同时，我们承诺，我们将按业界成熟的安全标准，采取相应的安全保护措施来保护您的个人信息。

## 2. 我们收集的信息

我们可能收集以下类型的信息：

2.1 **您提供的信息**：这包括您在注册账户、使用我们的服务或与我们沟通时提供的信息，如姓名、电子邮件地址、电话号码等。

2.2 **自动收集的信息**：当您使用我们的服务时，我们可能自动收集某些信息，如IP地址、设备信息、浏览器类型、访问时间以及您访问的页面。

2.3 **来自第三方的信息**：我们可能从第三方服务提供商、合作伙伴或其他公开渠道获取关于您的信息。

## 3. 我们如何使用您的信息

我们可能将收集到的信息用于以下目的：

3.1 **提供服务**：包括创建和管理您的账户、处理您的请求、提供客户支持等。

3.2 **改进服务**：分析使用模式、进行研究和测试，以改进我们的服务。

3.3 **个性化体验**：根据您的兴趣和偏好提供个性化内容和推荐。

3.4 **安全和保护**：保护我们的服务、用户和公众的安全。

3.5 **通信**：向您发送服务通知、更新、安全警报以及其他支持和管理消息。

## 4. 信息共享与披露

我们不会出售您的个人信息。我们可能在以下情况下共享您的信息：

4.1 **经您同意**：在获得您的明确同意后。

4.2 **服务提供商**：与代表我们提供服务的第三方服务提供商共享，如托管、分析、客户服务等。

4.3 **法律要求**：如果我们认为披露是遵守适用法律、法规、法律程序或政府要求所必需的。

4.4 **保护权利**：保护我们的权利、财产或安全，以及我们的用户或公众的权利、财产或安全。

## 5. 您的选择和权利

您对您的个人信息拥有以下权利：

5.1 **访问和更正**：您可以访问和更新您的个人信息。

5.2 **选择退出**：您可以选择不接收我们的营销通信。

5.3 **删除**：在某些情况下，您可以要求删除您的个人信息。

## 6. 数据安全

我们实施了适当的技术和组织措施，以保护您的个人信息不被意外或非法破坏、丢失、更改、未经授权的披露或访问。

## 7. 数据保留

我们仅在需要实现本隐私政策中描述的目的期间，或遵守法律要求的期间保留您的个人信息。

## 8. 儿童隐私

我们的服务不面向13岁以下的儿童。如果您是父母或监护人，并认为您的孩子向我们提供了个人信息，请联系我们。

## 9. 隐私政策的变更

我们可能会不时更新本隐私政策。我们会通过在我们的网站上发布更新后的政策通知您任何变更。

## 10. 联系我们

如果您对本隐私政策有任何问题，请联系我们：

- 邮箱：privacy@example.com
- 电话：+86 123 4567 8910
- 地址：中国北京市朝阳区XXX大厦X层

感谢您阅读我们的隐私政策。您的信任对我们至关重要，我们将竭尽全力保护您的个人信息安全。
`,
  };
}

export default async function PrivacyPage() {
  const privacy = await getPrivacyContent();

  return (
    <main className="max-w-3xl mx-auto px-4 py-6 md:py-8">
      <Suspense fallback={<ArticleSkeleton />}>
        <ArticleHeader
          title={privacy.title}
          publishDate={privacy.publishDate}
        />
        <ArticleContent content={privacy.content} />
      </Suspense>
    </main>
  );
} 