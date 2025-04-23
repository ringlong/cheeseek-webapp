import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

interface ArticleContentProps {
  content: string;
}

export default function ArticleContent({ content }: ArticleContentProps) {
  // 自定义组件渲染
  const components: Components = {
    // 自定义内联代码渲染
    code({ node, className, children, ...props }) {
      return (
        <code
          className={`${className} px-1 py-0.5 bg-gray-100 rounded text-red-600`}
          {...props}
        >
          {children}
        </code>
      );
    },
    // 自定义代码块渲染
    pre({ node, children, ...props }) {
      return (
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto" {...props}>
          {children}
        </pre>
      );
    },
    // 自定义表格渲染
    table({ node, children, ...props }) {
      return (
        <div className="overflow-x-auto my-6">
          <table
            className="w-full border-collapse border border-gray-300"
            {...props}
          >
            {children}
          </table>
        </div>
      );
    },
    thead({ node, children, ...props }) {
      return (
        <thead className="bg-gray-50" {...props}>
          {children}
        </thead>
      );
    },
    tbody({ node, children, ...props }) {
      return <tbody {...props}>{children}</tbody>;
    },
    tr({ node, children, ...props }) {
      return (
        <tr className="border-b border-gray-300" {...props}>
          {children}
        </tr>
      );
    },
    th({ node, children, ...props }) {
      return (
        <th
          className="border border-gray-300 px-4 py-2 text-left font-semibold"
          {...props}
        >
          {children}
        </th>
      );
    },
    td({ node, children, ...props }) {
      return (
        <td className="border border-gray-300 px-4 py-2" {...props}>
          {children}
        </td>
      );
    },
  };

  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </article>
  );
}
