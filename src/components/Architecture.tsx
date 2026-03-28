const steps = [
  { label: "业务端 / 员工", short: "业务端" },
  { label: "加密传输层", short: "传输层" },
  { label: "合规网关（私有化）", short: "合规网关" },
  { label: "DLP / 审计插件", short: "DLP / 审计" },
  { label: "全球顶级大模型", short: "大模型" },
];

function FlowArrow({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M2 12h36m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-finance/50"
      />
    </svg>
  );
}

function StepBox({
  label,
  short,
  highlight,
}: {
  label: string;
  short: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative flex min-h-[4.5rem] min-w-[7rem] flex-col items-center justify-center rounded-lg border px-3 py-3 text-center sm:min-w-[8.5rem] ${
        highlight
          ? "border-finance/50 bg-finance/[0.12] shadow-[0_0_24px_-8px_rgba(37,99,235,0.5)]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <span className="hidden text-xs font-medium leading-snug tracking-wide text-slate-200 sm:block sm:text-[0.7rem]">
        {label}
      </span>
      <span className="text-xs font-medium leading-snug tracking-wide text-slate-200 sm:hidden">
        {short}
      </span>
      {highlight ? (
        <span className="absolute -bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-finance to-transparent opacity-80" />
      ) : null}
    </div>
  );
}

export function Architecture() {
  return (
    <section
      id="architecture"
      className="scroll-mt-24 border-t border-white/[0.06] bg-navy-subtle/50 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="animate-fade-in-up text-2xl font-semibold tracking-wide text-slate-100 sm:text-3xl">
            架构示意
          </h2>
          <p className="animate-fade-in-up animate-in-delay-1 mt-3 text-slate-400 leading-relaxed tracking-wide">
            流量经加密信道进入私有化合规网关，统一执行策略与审计后再路由至受控模型侧，全链路可观测、可追溯。
          </p>
        </div>

        {/* Desktop / tablet: horizontal */}
        <div className="hidden animate-fade-in-up animate-in-delay-2 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent p-8 sm:block md:p-10">
          <div className="flex flex-wrap items-center justify-center gap-2 md:flex-nowrap md:gap-1 lg:gap-2">
            {steps.map((s, idx) => (
              <div key={s.label} className="flex items-center gap-1 lg:gap-2">
                <StepBox
                  label={s.label}
                  short={s.short}
                  highlight={idx === 2}
                />
                {idx < steps.length - 1 ? (
                  <FlowArrow className="h-6 w-10 shrink-0 md:w-12" />
                ) : null}
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <svg
              width="100%"
              height="48"
              viewBox="0 0 800 48"
              fill="none"
              className="max-w-3xl text-finance/30"
              aria-hidden
            >
              <path
                d="M40 24h720"
                stroke="currentColor"
                strokeWidth="1"
                strokeDasharray="4 6"
              />
              <circle cx="400" cy="24" r="3" fill="currentColor" />
              <path
                d="M396 8l8 8-8 8"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-center text-xs tracking-wide text-slate-500">
            抽象数据流 · 单向策略执行 · 侧链审计落盘
          </p>
        </div>

        {/* Mobile: vertical stack */}
        <div className="space-y-3 animate-fade-in-up animate-in-delay-2 sm:hidden">
          {steps.map((s, idx) => (
            <div key={s.label}>
              <StepBox
                label={s.label}
                short={s.short}
                highlight={idx === 2}
              />
              {idx < steps.length - 1 ? (
                <div className="flex justify-center py-1 text-finance/50">
                  <svg
                    width="24"
                    height="32"
                    viewBox="0 0 24 32"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M12 2v22m0 0l-6-6m6 6l6-6"
                      stroke="currentColor"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
