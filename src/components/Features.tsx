import {
  Activity,
  Coins,
  GitBranch,
  ShieldCheck,
  Wallet,
  Waypoints,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: Waypoints,
    title: "多模型统一接入与智能分发",
    body: "OpenAI 兼容的统一北向接口，支持多模型池、动态路由、健康检查与降级调度；按租户、应用与场景精细化切流，告别模型碎片化与单点故障。",
    tag: "接入",
  },
  {
    icon: Activity,
    title: "全链路可观测",
    body: "从模型视角、路由视角到组织与人员维度，统一展示 Token 消耗、耗时、错误与异常；对话与防护日志可关联追踪，沉淀为运营与排障依据。",
    tag: "观测",
  },
  {
    icon: ShieldCheck,
    title: "安全合规治理",
    body: "覆盖网络、内容与数据多维策略：动态 DLP 脱敏、语义安全围栏、Prompt 与输出治理；可与现有合规框架对齐，降低监管与舆情风险。",
    tag: "合规",
  },
  {
    icon: GitBranch,
    title: "审计流水与合规导出",
    body: "全量交互留痕，支持密文存储与按项目期的审计导出，便于内外部稽核与监管取证（如交互过程追溯类要求）。",
    tag: "审计",
  },
  {
    icon: Coins,
    title: "Token 配额与限流管控",
    body: "按组织、部门、应用密钥与模型维度配置配额、并发与速率；实时熔断与预警，防止超预算与模型滥用导致的成本失控。",
    tag: "配额",
  },
  {
    icon: Wallet,
    title: "账单与成本管理",
    body: "多维度账单分摊、用量对账与成本归因；支持按模型、业务线或成本中心导出，支撑财务结算与 FinOps 看板。",
    tag: "账单",
  },
] as const;

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <MotionReveal>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <SectionHeader
              eyebrow="核心能力"
              title="接入、观测、合规与运营，四条主线一体交付"
              description="产品能力不只「管住模型」：先解决统一接入与分发，再叠加可观测与计费闭环，并以安全合规治理收口。可按路线图分阶段上线，避免一次性大而全却无法运营。"
              className="lg:max-w-2xl"
            />
            <p className="max-w-md text-sm leading-relaxed text-slate-500 lg:text-right">
              控制台集成路由配置、策略编排、观测大盘、配额与账单模块；也可通过 API 对接计费与财务系统。
            </p>
          </div>
        </MotionReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {cards.map((c, idx) => (
            <MotionReveal key={c.title} delay={0.05 * idx}>
              <article
                className={cn(
                  "glass-panel group relative h-full overflow-hidden rounded-2xl p-8 lg:p-8",
                  "transition duration-300",
                  "hover:-translate-y-1 hover:border-finance/35 hover:shadow-[0_24px_56px_-28px_rgba(37,99,235,0.38)]",
                )}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-finance/12 blur-2xl transition group-hover:bg-finance/18" />
                <div className="relative flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-safe/30 bg-safe/10 text-safe transition group-hover:scale-105">
                      <c.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                    </div>
                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      {c.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold tracking-wide text-slate-100 sm:text-lg">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed tracking-wide text-slate-400">
                      {c.body}
                    </p>
                  </div>
                </div>
              </article>
            </MotionReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
