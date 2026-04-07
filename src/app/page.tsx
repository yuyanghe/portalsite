import type { Metadata } from "next";
import { CompanyHome } from "@/components/CompanyHome";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteBackground } from "@/components/SiteBackground";

export const metadata: Metadata = {
  description:
    "哲玄科技：企业级大模型安全网关与统一模型转发服务，助力多模型接入、合规治理与成本可控。",
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy text-foreground">
      <SiteBackground />
      <Header variant="company" />
      <CompanyHome />
      <Footer variant="company" />
    </div>
  );
}
