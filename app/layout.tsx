import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "文章平台",
  description: "展示各类文章的平台",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
