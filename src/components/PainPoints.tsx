import { EyeOff, Gavel, Network } from "lucide-react";

const items = [
  {
    icon: EyeOff,
    title: "数据泄露风险",
    desc: "员工在对话中无意泄露个人隐私（PII）、内部代码或商业机密。",
    accent: "text-finance",
    border: "border-finance/20",
  },
  {
    icon: Gavel,
    title: "合规审计红线",
    desc: "无法满足金融监管（如 JRT 0197-2020）对 AI 交互过程的追溯要求。",
    accent: "text-amber-400",
    border: "border-amber-500/20",
  },
  {
    icon: Network,
    title: "影子 AI 治理",
    desc: "企业内部多部门私自接入模型，账号混乱、成本失控，且完全处于监控盲区。",
    accent: "text-safe",
    border: "border-safe/20",
  },
] as const;

export function PainPoints() {
  return (
    <section
      id="pain-points"
      className="scroll-mt-24 border-t border-white/[0.06] bg-carbon/40 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-wide text-slate-100 sm:text-3xl">
            行业痛点
          </h2>
          <p className="mt-3 text-slate-400 leading-relaxed tracking-wide">
            生成式 AI 落地越快，数据与合规边界越脆弱。以下为企业在规模化使用前普遍面临的核心挑战。
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <li
              key={item.title}
              className={`glass-panel group animate-fade-in-up rounded-xl p-6 transition hover:border-white/15 ${item.border} ${
                idx === 0
                  ? "animate-in-delay-1"
                  : idx === 1
                    ? "animate-in-delay-2"
                    : "animate-in-delay-3"
              }`}
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] ${item.accent}`}
              >
                <item.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
              </div>
              <h3 className="text-lg font-semibold tracking-wide text-slate-100">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed tracking-wide text-slate-400">
                {item.desc}
              </p>
              <span className="mt-4 block h-px w-12 bg-gradient-to-r from-finance/60 to-transparent opacity-0 transition group-hover:opacity-100" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
