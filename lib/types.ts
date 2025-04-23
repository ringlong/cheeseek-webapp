// 知识库内容类型
export interface KnowledgeContent {
  id: string
  chapter: string
  content: string
  sort: number
}

// 知识库文章类型
export interface Knowledge {
  id: string
  title: string
  enTitle: string
  publishDate: string
  group: string[]
  contents: KnowledgeContent[]
}

// API 响应类型
export interface ApiResponse<T> {
  code: number
  message: string
  result: T
  success: boolean
  timestamp: number
}