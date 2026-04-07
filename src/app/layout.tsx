import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "哲玄科技 · 企业级 AI 网关与基础设施",
    template: "%s · 哲玄科技",
  },
  description:
    "哲玄科技提供大模型企业安全网关（私有化合规）与企业级统一模型转发（OpenAI 兼容托管）两大产品线。",
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
