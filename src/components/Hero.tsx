import { ArrowRight, FileDown } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pb-32 sm:pt-36 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.18),transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-[1px] w-[min(90vw,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-finance/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium tracking-wider text-slate-400 sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-safe shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
          企业级 · 金融安全可信
        </p>

        <h1 className="animate-fade-in-up animate-in-delay-1 text-balance text-3xl font-semibold tracking-wide text-slate-50 sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-snug">
          安全拥抱生成式 AI：企业级大模型合规防火墙
        </h1>

        <p className="animate-fade-in-up animate-in-delay-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed tracking-wide text-slate-400 sm:text-lg">
          在效率与安全之间构建坚实桥梁。通过实时脱敏、语义审计与自动化管控，确保企业核心资产不出域。
        </p>

        <div className="animate-fade-in-up animate-in-delay-3 mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
          <Link
            href="#cta"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-finance px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-finance/25 transition hover:bg-blue-600"
          >
            申请私有化演示
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="#cta"
            className="glass-panel inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06]"
          >
            <FileDown className="h-4 w-4 text-safe" aria-hidden />
            下载合规白皮书
          </Link>
        </div>
      </div>
    </section>
  );
}
