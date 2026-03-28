import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "企业级大模型合规网关 | 安全拥抱生成式 AI",
  description:
    "实时脱敏、语义审计与自动化管控，确保企业核心资产不出域。支持私有化部署，满足金融级合规追溯要求。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} font-sans min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
