import {
  ArrowRight,
  ChevronRight,
  Layers,
  Shield,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

const products = [
  {
    slug: "/products/security-gateway",
    title: "大模型企业安全网关",
    subtitle: "私有化 / 合规 / 审计",
    description:
      "统一接入与智能分发之上，叠加动态 DLP、语义围栏、全链路可观测与 Token 配额、账单等企业级治理能力，适合金融、政务及对数据主权有硬性要求的团队。",
    icon: Shield,
    accent: "from-finance/20 to-finance/5",
    border: "border-finance/30",
  },
  {
    slug: "/products/model-gateway",
    title: "大模型聚合平台",
    subtitle: "OpenAI 兼容 · 多端点 · 托管服务",
    description:
      "类似 OpenRouter 的聚合型 API：单一 Base URL 与密钥即可接入全球与国内主流大模型，由哲玄托管高可用接入、智能路由与健康检查，您专注业务集成。",
    icon: Layers,
    accent: "from-safe/20 to-safe/5",
    border: "border-safe/25",
  },
] as const;

export function CompanyHome() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-white/[0.06] pb-24 pt-28 sm:pb-32 sm:pt-36 lg:pb-40 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(37,99,235,0.12),transparent_55%)]" />
        <Container className="relative">
          <MotionReveal>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              <Sparkles className="h-3.5 w-3.5 text-finance" />
              哲玄科技 · ZX Technology
            </p>
            <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-wide text-slate-50 sm:text-5xl lg:text-6xl lg:leading-[1.08]">
              企业级 AI 网关
              <span className="text-finance">基础设施</span>
              与聚合平台服务
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed tracking-wide text-slate-400 sm:text-xl">
              我们提供可私有化的安全合规网关与云端大模型聚合平台两条产品线，助您在多模型时代同时守住边界、控住成本、缩短集成路径。
            </p>
          </MotionReveal>

          <MotionReveal delay={0.1} className="mt-20">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              产品矩阵
            </h2>
            <ul className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={p.slug}
                    className={`group relative block overflow-hidden rounded-2xl border bg-gradient-to-br ${p.accent} p-8 transition duration-300 ${p.border} hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_28px_56px_-32px_rgba(37,99,235,0.45)] sm:p-10`}
                  >
                    <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/[0.04] blur-2xl" />
                    <div className="relative flex flex-col gap-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-navy/50 text-finance">
                          <p.icon className="h-6 w-6" strokeWidth={1.5} />
                        </span>
                        <span className="flex items-center gap-1 text-sm font-medium text-finance opacity-80 transition group-hover:opacity-100">
                          了解详情
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                          {p.subtitle}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold tracking-wide text-slate-100">
                          {p.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed tracking-wide text-slate-400">
                          {p.description}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500">
                        <ChevronRight className="h-3 w-3 text-finance" />
                        进入产品介绍
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </Container>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/[0.06] py-20 sm:py-24"
      >
        <Container>
          <MotionReveal>
            <div className="glass-panel mx-auto max-w-2xl rounded-2xl border-white/10 p-10 text-center sm:p-12">
              <h2 className="text-2xl font-semibold tracking-wide text-slate-100 sm:text-3xl">
                商务与方案咨询
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed tracking-wide">
                无论需要私有化安全网关评估，还是大模型聚合平台的用量与报价，均可通过邮件联系我们；我们会在工作日尽快回复。
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="mailto:contact@example.com?subject=哲玄科技%20-%20商务咨询"
                  className="inline-flex items-center justify-center rounded-xl bg-finance px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-finance/25 transition hover:-translate-y-0.5 hover:bg-blue-600"
                >
                  发送邮件
                </a>
                <Link
                  href="/products/security-gateway"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/30 hover:bg-white/[0.08]"
                >
                  先看安全网关
                </Link>
              </div>
              <p className="mt-6 text-xs text-slate-600">
                contact@example.com 为占位地址，上线请替换为正式邮箱。
              </p>
            </div>
          </MotionReveal>
        </Container>
      </section>
    </main>
  );
}
