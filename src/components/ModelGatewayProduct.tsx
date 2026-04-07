import {
  BarChart3,
  Globe,
  KeyRound,
  Mail,
  Server,
  Workflow,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteBackground } from "@/components/SiteBackground";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const values = [
  {
    title: "一端接入，多模型可选",
    body: "在统一 OpenAI 兼容协议下，按模型 ID 切换 GPT-4、Claude、DeepSeek 及国内主流模型，无需为每家厂商维护一套接入与鉴权逻辑。",
  },
  {
    title: "托管高可用接入",
    body: "由哲玄运维多区域接入与链路优化，降低自建代理与限流器的研发与运维负担；支持健康检查与自动降级策略的可配置化。",
  },
  {
    title: "用量透明、账单清晰",
    body: "统一计量 Token 与调用次数，按项目或团队出账；适配企业采购与多成本中心分摊，可与财务流程对齐。",
  },
] as const;

const capabilities = [
  {
    icon: KeyRound,
    title: "单一密钥与 Base URL",
    body: "与您现有 OpenAI 官方 SDK / LangChain / LlamaIndex 等栈对接，仅替换 endpoint 与密钥即可平滑迁移。",
  },
  {
    icon: Workflow,
    title: "智能路由与故障转移",
    body: "按延迟、价格或可用性偏好配置路由策略；主模型不可用时自动切至备选池，减少业务中断时间。",
  },
  {
    icon: BarChart3,
    title: "实时用量与配额",
    body: "控制台查看按模型、按应用的实时消耗；支持阈值告警与软 / 硬限额，防止预算击穿。",
  },
  {
    icon: Globe,
    title: "企业网络友好",
    body: "可选专线或固定出口 IP、账单与合同主体国内落地等交付方式，满足内网与合规采购要求。",
  },
] as const;

export function ModelGatewayProduct() {
  return (
    <div className="relative min-h-screen bg-navy text-foreground">
      <SiteBackground />
      <Header variant="model-gateway" />

      <main>
        <section className="relative overflow-hidden border-b border-white/[0.06] pb-20 pt-28 sm:pb-28 sm:pt-32 lg:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_50%_at_80%_-10%,rgba(16,185,129,0.12),transparent_50%)]" />
          <Container className="relative">
            <MotionReveal>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-safe/90">
                托管服务 · OpenAI 兼容
              </p>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold tracking-wide text-slate-50 sm:text-5xl lg:text-[3.1rem] lg:leading-tight">
                企业级
                <span className="text-safe">大模型聚合平台</span>
                <br className="hidden sm:block" />
                对标 OpenRouter，为您的业务量身定制
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed tracking-wide text-slate-400">
                哲玄提供托管式聚合 API 出口：单一协议接入多家模型，内置路由、计量与账单。适合希望快速扩展模型谱系、又不想单独对接每一家云厂商的团队。
              </p>
            </MotionReveal>
            <MotionReveal delay={0.12} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-xl bg-safe px-7 py-4 text-sm font-semibold text-navy shadow-lg shadow-safe/20 transition hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                获取接入说明
              </a>
              <Link
                href="/products/security-gateway"
                className="text-center text-sm font-medium text-slate-400 underline-offset-4 transition hover:text-slate-200 hover:underline"
              >
                需要私有化合规网关？查看安全网关产品 →
              </Link>
            </MotionReveal>
          </Container>
        </section>

        <section
          id="value"
          className="scroll-mt-24 border-t border-white/[0.06] py-24 sm:py-28"
        >
          <Container>
            <MotionReveal>
              <SectionHeader
                eyebrow="核心价值"
                title="为什么需要聚合平台"
                description="多模型并行试验已是常态，但分散的密钥、计费维度和 SDK 差异会快速吃掉工程与财务效率。聚合平台将这些收口到一层。"
              />
            </MotionReveal>
            <ul className="mt-16 grid gap-8 lg:grid-cols-3">
              {values.map((v, i) => (
                <MotionReveal key={v.title} delay={0.06 * i}>
                  <li className="glass-panel rounded-2xl border-white/[0.08] p-8 transition hover:border-safe/30">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-safe/10 text-safe">
                      <Zap className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-wide text-slate-100">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed tracking-wide text-slate-400">
                      {v.body}
                    </p>
                  </li>
                </MotionReveal>
              ))}
            </ul>
          </Container>
        </section>

        <section
          id="capabilities"
          className="scroll-mt-24 bg-carbon/25 py-24 sm:py-28"
        >
          <Container>
            <MotionReveal>
              <SectionHeader
                eyebrow="平台能力"
                title="为生产环境准备的聚合与控制面"
                description="从接入到观测，能力与哲玄安全网关家族对齐设计理念，便于日后在「云端聚合平台」与「私有化治理」之间平滑演进。"
              />
            </MotionReveal>
            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {capabilities.map((c, i) => (
                <MotionReveal key={c.title} delay={0.05 * i}>
                  <article
                    className={cn(
                      "glass-panel h-full rounded-2xl p-8 transition duration-300",
                      "hover:-translate-y-1 hover:border-safe/25 hover:shadow-[0_24px_48px_-28px_rgba(16,185,129,0.25)]",
                    )}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-safe/25 bg-safe/10 text-safe">
                      <c.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold tracking-wide text-slate-100">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {c.body}
                    </p>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </Container>
        </section>

        <section
          id="integration"
          className="scroll-mt-24 py-24 sm:py-28"
        >
          <Container>
            <MotionReveal>
              <SectionHeader
                eyebrow="接入方式"
                title="与 OpenAI 兼容的集成路径"
                description="大多数情况下，您只需调整 Base URL 与 API Key；复杂场景下我们可提供迁移清单与联调支持。"
              />
            </MotionReveal>
            <MotionReveal delay={0.08} className="mt-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="glass-panel rounded-2xl border border-white/10 p-8 font-mono text-xs text-slate-400 sm:text-sm">
                  <p className="mb-4 text-[11px] font-sans font-semibold uppercase tracking-widest text-slate-500">
                    示例 · 环境变量
                  </p>
                  <pre className="overflow-x-auto leading-relaxed">
                    {`OPENAI_API_BASE=https://api.zhexuan.tech/v1
OPENAI_API_KEY=zx_live_xxxxxxxx`}
                  </pre>
                </div>
                <div className="flex flex-col justify-center space-y-4 text-sm leading-relaxed text-slate-400">
                  <div className="flex gap-3">
                    <Server className="mt-0.5 h-5 w-5 shrink-0 text-safe" />
                    <p>
                      支持标准 Chat Completions、
                      <span className="text-slate-300">Embeddings</span>{" "}
                      等常用接口（具体以合同与版本说明为准）。
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <KeyRound className="mt-0.5 h-5 w-5 shrink-0 text-safe" />
                    <p>
                      子密钥与项目维度隔离、IP 白名单、用量上限等企业特性可在商务开通后启用。
                    </p>
                  </div>
                </div>
              </div>
            </MotionReveal>
          </Container>
        </section>

        <section
          id="trust"
          className="scroll-mt-24 border-t border-white/[0.06] bg-navy-subtle/40 py-24 sm:py-28"
        >
          <Container>
            <MotionReveal>
              <div className="glass-panel rounded-2xl border-safe/20 p-10 lg:p-12">
                <h2 className="text-2xl font-semibold tracking-wide text-slate-100 sm:text-3xl">
                  企业级交付与 SLA
                </h2>
                <p className="mt-4 max-w-2xl text-slate-400 leading-relaxed tracking-wide">
                  我们可就可用性目标、响应与支持渠道、数据驻留与备份策略与您签署服务说明。若后续需要升级为私有化安全网关，架构团队可协助规划割接路径。
                </p>
              </div>
            </MotionReveal>
          </Container>
        </section>

        <section
          id="cta"
          className="scroll-mt-24 px-4 pb-28 pt-6 sm:px-6 lg:px-8 lg:pb-32"
        >
          <Container>
            <MotionReveal>
              <div className="relative overflow-hidden rounded-2xl border border-safe/30 bg-gradient-to-br from-safe/15 via-navy-subtle to-carbon p-10 sm:p-14">
                <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-safe/20 blur-3xl" />
                <div className="relative text-center">
                  <h2 className="text-2xl font-semibold tracking-wide text-slate-50 sm:text-3xl">
                    申请试用或报价单
                  </h2>
                  <p className="mx-auto mt-4 max-w-lg text-slate-300 leading-relaxed">
                    留下公司信息与预估调用量，我们将发送接入文档、模型清单与计价说明。
                  </p>
                  <a
                    href="mailto:model-gateway@example.com?subject=大模型聚合平台%20-%20商务咨询"
                    className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-safe px-8 py-4 text-sm font-semibold text-navy shadow-lg shadow-safe/25 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                  >
                    <Mail className="h-4 w-4" />
                    发送邮件
                  </a>
                  <p className="mt-6 text-xs text-slate-500">
                    示例邮箱，上线请替换；亦可复用公司统一商务邮箱。
                  </p>
                </div>
              </div>
            </MotionReveal>
          </Container>
        </section>
      </main>

      <Footer variant="model-gateway" />
    </div>
  );
}
