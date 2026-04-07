import { Mail } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function CTA() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 pb-28 pt-8 sm:pb-32"
    >
      <Container>
        <MotionReveal>
          <div className="relative overflow-hidden rounded-2xl border border-finance/30 bg-gradient-to-br from-finance/[0.14] via-navy-subtle to-carbon p-10 sm:p-14 lg:p-16">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-finance/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-safe/15 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-finance/90">
                下一步
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-wide text-slate-50 sm:text-4xl">
                与架构师对齐您的治理边界
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-slate-300 leading-relaxed tracking-wide">
                我们将在一个工作日内与您确认网络拓扑、模型清单与审计留存周期，并可选提供隔离沙箱用于 PoC。
              </p>
              <div className="mt-10 flex justify-center">
                <Link
                  href="mailto:demo@example.com?subject=哲玄科技%20-%20安全网关演示申请"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-finance px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-finance/35 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-finance/45"
                >
                  <Mail className="h-4 w-4" aria-hidden />
                  申请私有化演示
                </Link>
              </div>
              <p className="mt-8 text-xs tracking-wide text-slate-500">
                邮箱为占位符，上线时请替换为哲玄科技正式联络方式。
              </p>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
