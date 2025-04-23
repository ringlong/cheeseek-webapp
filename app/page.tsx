import { redirect } from "next/navigation"

export default function Home() {
  // 重定向到示例文章
  redirect("/article/1")
}
