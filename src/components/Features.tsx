import {
  Database,
  GitBranch,
  Layers,
  ShieldCheck,
} from "lucide-react";

const cards = [
  {
    icon: Database,
    title: "动态 DLP 脱敏引擎",
    body: "毫秒级识别并拦截身份证、银行卡、证券代码等 100+ 种敏感数据。",
  },
  {
    icon: ShieldCheck,
    title: "语义安全围栏",
    body: "拦截 Prompt 注入攻击、角色扮演漏洞及非合规语意的输出。",
  },
  {
    icon: GitBranch,
    title: "不可篡改审计流",
    body: "全量存储每一条 AI 交互日志，支持密文存储与审计导出，满足监管回溯。",
  },
  {
    icon: Layers,
    title: "多模型统一路由",
    body: "一个接口无缝对接 GPT-4、Claude 3、DeepSeek 及国内主流大模型，支持配额精准管控。",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-wide text-slate-100 sm:text-3xl">
              核心功能
            </h2>
            <p className="mt-3 text-slate-400 leading-relaxed tracking-wide">
              以网关为中心，串联脱敏、语义策略与审计链路，形成可运营、可取证的企业级 AI 安全栈。
            </p>
          </div>
          <div className="hidden h-px flex-1 max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent md:block md:mb-3" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((c, idx) => (
            <article
              key={c.title}
              className={`glass-panel relative animate-fade-in-up overflow-hidden rounded-xl p-7 transition hover:border-finance/25 ${
                idx === 0
                  ? "animate-in-delay-1"
                  : idx === 1
                    ? "animate-in-delay-2"
                    : idx === 2
                      ? "animate-in-delay-3"
                      : "animate-in-delay-4"
              }`}
            >
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-finance/10 blur-2xl" />
              <div className="relative flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-safe/30 bg-safe/10 text-safe">
                  <c.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-wide text-slate-100">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed tracking-wide text-slate-400">
                    {c.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
