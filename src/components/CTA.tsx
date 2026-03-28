import { Mail } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 px-4 pb-24 pt-4 sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-finance/25 bg-gradient-to-br from-finance/15 via-navy-subtle to-carbon/80 p-10 sm:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-finance/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-safe/10 blur-3xl" />

        <div className="relative text-center">
          <h2 className="text-2xl font-semibold tracking-wide text-slate-50 sm:text-3xl">
            启动您的合规评估
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300 leading-relaxed tracking-wide">
            留下联络方式，安全架构师将在一个工作日内与您确认场景边界与部署路径。演示环境可选隔离沙箱。
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:demo@example.com?subject=私有化演示申请"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-finance px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-finance/30 transition hover:bg-blue-600 sm:w-auto"
            >
              <Mail className="h-4 w-4" aria-hidden />
              申请私有化演示
            </Link>
            <Link
              href="mailto:whitepaper@example.com?subject=合规白皮书下载"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:bg-white/10 sm:w-auto"
            >
              下载合规白皮书
            </Link>
          </div>
          <p className="mt-6 text-xs tracking-wide text-slate-500">
            示例邮箱仅为占位，上线前请替换为企业正式联络信息。
          </p>
        </div>
      </div>
    </section>
  );
}
