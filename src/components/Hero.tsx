import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

const tonePills = [
  { label: "安全", icon: ShieldCheck },
  { label: "稳定", icon: Zap },
  { label: "智能", icon: Sparkles },
] as const;

const productPillars = [
  "多模型统一接入与智能分发",
  "全链路可观测",
  "安全合规治理",
] as const;

function HeroFlowDiagram() {
  return (
    <div
      className="relative mx-auto aspect-[4/3] max-w-md lg:mx-0 lg:max-w-none"
      aria-hidden
    >
      <svg
        viewBox="0 0 480 360"
        className="h-full w-full text-finance/35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(37, 99, 235)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect
          x="24"
          y="28"
          width="432"
          height="304"
          rx="20"
          stroke="currentColor"
          strokeWidth="1"
          className="text-white/10"
        />
        <path
          d="M120 100h240M120 180h240M120 260h240"
          stroke="url(#hero-grad)"
          strokeWidth="1"
          strokeDasharray="6 10"
          className="animate-flow-dash"
        />
        <circle cx="120" cy="100" r="10" fill="rgb(15 23 42)" stroke="rgb(37 99 235)" strokeWidth="1.5" filter="url(#glow)" />
        <circle cx="240" cy="100" r="10" fill="rgb(15 23 42)" stroke="rgb(37 99 235)" strokeWidth="1.5" />
        <circle cx="360" cy="100" r="10" fill="rgb(15 23 42)" stroke="rgb(37 99 235)" strokeWidth="1.5" />
        <rect
          x="118"
          y="152"
          width="244"
          height="56"
          rx="12"
          stroke="rgb(37 99 235)"
          strokeOpacity="0.55"
          fill="rgb(37 99 235 / 0.08)"
          filter="url(#glow)"
        />
        <text
          x="240"
          y="179"
          textAnchor="middle"
          fill="#cbd5e1"
          style={{ fontSize: 10, letterSpacing: "0.06em" }}
        >
          接入 · 观测 · 合规 · 计费
        </text>
        <text
          x="240"
          y="192"
          textAnchor="middle"
          fill="#64748b"
          style={{ fontSize: 9, letterSpacing: "0.08em" }}
        >
          企业级 AI 网关
        </text>
        <circle cx="120" cy="260" r="8" fill="rgb(15 23 42)" stroke="rgb(16 185 129)" strokeWidth="1.25" />
        <circle cx="240" cy="260" r="8" fill="rgb(15 23 42)" stroke="rgb(16 185 129)" strokeWidth="1.25" />
        <circle cx="360" cy="260" r="8" fill="rgb(15 23 42)" stroke="rgb(16 185 129)" strokeWidth="1.25" />
        <path
          d="M120 118v24M240 118v24M360 118v24M240 208v36"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          className="text-finance/40"
        />
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(37,99,235,0.12),transparent_55%)]" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_10%_-10%,rgba(37,99,235,0.14),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_90%_100%,rgba(16,185,129,0.08),transparent_45%)]" />

      <Container className="relative pb-24 pt-28 sm:pb-28 sm:pt-32 lg:pb-36 lg:pt-40">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12 xl:gap-20">
          <div className="space-y-10">
            <MotionReveal>
              <div className="flex flex-wrap items-center gap-3">
                {tonePills.map(({ label, icon: Icon }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-wide text-slate-300 transition hover:border-finance/35 hover:bg-white/[0.06] sm:text-sm"
                  >
                    <Icon className="h-3.5 w-3.5 text-finance" strokeWidth={1.75} />
                    {label}
                  </span>
                ))}
              </div>
              <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-2 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:text-xs">
                {productPillars.map((p, i) => (
                  <span key={p} className="inline-flex items-center gap-2">
                    {i > 0 ? (
                      <span className="text-finance/40" aria-hidden>
                        |
                      </span>
                    ) : null}
                    <span className="whitespace-nowrap text-slate-400">{p}</span>
                  </span>
                ))}
              </p>
            </MotionReveal>

            <MotionReveal delay={0.06}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                企业级大模型统一平台
              </p>
              <h1 className="mt-4 text-balance text-4xl font-semibold tracking-wide text-slate-50 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
                <span className="text-finance">统一接入</span>与<span className="text-finance">智能分发</span>，
                <br className="hidden sm:block" />
                可观测、可合规、成本可控的 AI 网关
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.12}>
              <p className="max-w-xl text-lg leading-relaxed tracking-wide text-slate-400 sm:text-xl">
                不止是策略与审计：在北向提供 OpenAI 兼容的统一出口，在南向纳管多模型与配额；以全链路观测与账单 / Token 管理支撑运营与财务闭环，再以安全合规治理守住数据与内容边界。
              </p>
            </MotionReveal>

            <MotionReveal delay={0.18}>
              <Link
                href="#cta"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-finance px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-finance/25 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-finance/40"
              >
                申请私有化演示
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.1} className="relative lg:justify-self-end">
            <HeroFlowDiagram />
          </MotionReveal>
        </div>
      </Container>
    </section>
  );
}
