import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

function LayerConnector() {
  return (
    <div className="relative flex h-10 w-full items-center justify-center py-1" aria-hidden>
      <svg width="32" height="40" viewBox="0 0 32 40" className="text-finance/45">
        <path
          d="M16 4v24"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeDasharray="4 6"
          className="animate-flow-dash"
        />
        <path
          d="M10 28l6 6 6-6"
          stroke="currentColor"
          strokeWidth="1.25"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function AccessNode({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center transition hover:border-finance/35 hover:bg-white/[0.05] sm:text-left">
      <p className="text-sm font-semibold tracking-wide text-slate-200">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</p>
    </div>
  );
}

function LogicPill({ label }: { label: string }) {
  return (
    <span className="rounded-lg border border-finance/25 bg-finance/[0.08] px-3 py-2 text-center text-xs font-medium tracking-wide text-slate-200">
      {label}
    </span>
  );
}

function DataColumn({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-navy/60 px-4 py-5 transition hover:border-safe/35">
      <p className="text-sm font-semibold text-safe">{title}</p>
      <p className="mt-2 text-xs leading-relaxed text-slate-400">{body}</p>
    </div>
  );
}

export function Architecture() {
  return (
    <section
      id="architecture"
      className="scroll-mt-24 border-t border-white/[0.06] bg-gradient-to-b from-navy-subtle/80 via-navy to-navy py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <MotionReveal>
          <SectionHeader
            eyebrow="产品架构"
            title="分层解耦的治理拓扑：从接入到审计的逻辑闭环"
            description="参照企业级网关惯用的三层模型，将南北向流量、策略平面与数据平面清晰分离。每一层均可独立扩缩与验收，便于安全团队与平台团队分工协作。"
          />
        </MotionReveal>

        {/* Desktop / tablet diagram */}
        <MotionReveal delay={0.08} className="mt-16 lg:mt-20">
          <div className="relative hidden overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] via-transparent to-finance/[0.03] p-6 sm:block md:p-10">
            <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:28px_28px] opacity-50" />

            {/* 接入层 */}
            <div className="relative rounded-2xl border border-white/10 bg-navy/40 p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-2 border-b border-white/[0.07] pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-finance">
                    接入层
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    多形态客户端与协议统一收敛至网关北向接口
                  </p>
                </div>
                <span className="text-xs text-slate-600">Northbound</span>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <AccessNode title="Web / 桌面应用" desc="员工门户、内嵌组件与 SSO 会话" />
                <AccessNode title="OpenAPI & SDK" desc="与现有微服务、批处理任务集成" />
                <AccessNode title="业务编排 / 中台" desc="BPM、工单与客服系统经统一出口调用" />
              </div>
            </div>

            <LayerConnector />

            {/* 逻辑层 - 核心 */}
            <div
              className={cn(
                "relative rounded-2xl border-2 border-finance/40 bg-gradient-to-br from-finance/[0.12] via-navy/70 to-navy/90 p-6 shadow-[0_0_80px_-30px_rgba(37,99,235,0.45)] md:p-8",
              )}
            >
              <div className="mb-6 flex flex-col gap-2 border-b border-finance/20 pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-finance">
                    逻辑层 · AI 网关控制平面
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    统一接入与智能分发之上，调度路由、观测计量、Token 配额、账单与策略审计在同一平面编排。
                  </p>
                </div>
                <span className="text-xs font-medium text-finance/80">Control Plane</span>
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    入向策略
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    <LogicPill label="身份与租户隔离" />
                    <LogicPill label="Token 配额 & 限流" />
                    <LogicPill label="用量计量" />
                    <LogicPill label="动态 DLP" />
                  </div>
                </div>

                <div className="relative hidden h-40 w-px bg-gradient-to-b from-transparent via-finance/50 to-transparent lg:block" />

                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    出向治理
                  </p>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    <LogicPill label="语义安全围栏" />
                    <LogicPill label="多模型智能路由" />
                    <LogicPill label="全链路可观测" />
                    <LogicPill label="审计流水固化" />
                    <LogicPill label="账单与成本归因" />
                  </div>
                </div>
              </div>

              {/* Center flow SVG */}
              <div className="mt-8 flex justify-center">
                <svg
                  width="100%"
                  height="56"
                  viewBox="0 0 520 56"
                  className="mx-auto w-full max-w-xl text-finance/40"
                  aria-hidden
                >
                  <path
                    d="M20 28h480"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="5 8"
                    className="animate-flow-dash"
                  />
                  <polygon
                    points="492,20 508,28 492,36"
                    fill="rgb(37 99 235 / 0.85)"
                  />
                  <text
                    x="260"
                    y="22"
                    textAnchor="middle"
                    fill="#64748b"
                    style={{ fontSize: 10, letterSpacing: "0.14em" }}
                  >
                    加密信道 · 策略与观测 · 计量账单 · 审计落盘
                  </text>
                </svg>
              </div>
            </div>

            <LayerConnector />

            {/* 数据层 */}
            <div className="relative rounded-2xl border border-white/10 bg-navy/40 p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-2 border-b border-white/[0.07] pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-safe">
                    数据层
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    审计可信存储、密钥与模型侧资源的标准化承载
                  </p>
                </div>
                <span className="text-xs text-slate-600">Data Plane</span>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <DataColumn
                  title="审计与日志仓"
                  body="密文或哈希留存交互明细，支持监管导出与时间线回放。"
                />
                <DataColumn
                  title="KMS / 凭据保险库"
                  body="与 HSM、云厂商 KMS 对接，保护南北向密钥与模型凭证。"
                />
                <DataColumn
                  title="多模型集群"
                  body="公网 API、专有云与私有化权重统一纳管，健康检查与降级路由。"
                />
              </div>
            </div>
          </div>
        </MotionReveal>

        {/* Mobile simplified stack */}
        <MotionReveal delay={0.06} className="mt-10 space-y-3 sm:hidden">
          <div className="rounded-xl border border-white/10 bg-navy/50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-finance">接入层</p>
            <p className="mt-2 text-xs text-slate-400">
              Web、OpenAPI、业务中台统一接入网关北向。
            </p>
          </div>
          <LayerConnector />
          <div className="rounded-xl border-2 border-finance/45 bg-finance/[0.1] p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-finance">
              逻辑层
            </p>
            <p className="mt-2 text-xs text-slate-300">
              智能路由、配额与用量、可观测、账单、DLP / 语义护栏与审计。
            </p>
          </div>
          <LayerConnector />
          <div className="rounded-xl border border-safe/30 bg-navy/50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-safe">数据层</p>
            <p className="mt-2 text-xs text-slate-400">
              日志仓、KMS、模型集群 — 南向落地。
            </p>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
