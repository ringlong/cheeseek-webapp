import type { KnowledgeContent, ApiResponse } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://cv.cheeseek.com/jeecgboot";

/**
 * 统一处理API请求
 */
async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || "API request failed");
  }

  return data;
}

/**
 * 获取知识库文章
 */
export async function getKnowledgeById(
  id: string
): Promise<KnowledgeContent[]> {
  const endpoint = `/robot/aicontent/queryByKnowledgeId?knowledgeId=${id}`;
  const response = await fetchApi<ApiResponse<KnowledgeContent[]>>(endpoint, {
    next: { revalidate: 3600 }, // 缓存1小时
  });

  return response.result;
}
