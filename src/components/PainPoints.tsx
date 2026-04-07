import { EyeOff, Gavel, Network } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

const items = [
  {
    icon: EyeOff,
    title: "数据泄露风险",
    desc: "员工在对话中无意泄露个人隐私（PII）、内部代码或商业机密。",
    accent: "text-finance",
    border: "border-finance/20",
    glow: "group-hover:shadow-[0_20px_40px_-24px_rgba(37,99,235,0.3)]",
  },
  {
    icon: Gavel,
    title: "合规审计红线",
    desc: "无法满足金融监管（如 JRT 0197-2020）对 AI 交互过程的追溯要求。",
    accent: "text-amber-400",
    border: "border-amber-500/20",
    glow: "group-hover:shadow-[0_20px_40px_-24px_rgba(251,191,36,0.15)]",
  },
  {
    icon: Network,
    title: "影子 AI 治理",
    desc: "企业内部多部门私自接入模型，账号混乱、成本失控，且完全处于监控盲区。",
    accent: "text-safe",
    border: "border-safe/20",
    glow: "group-hover:shadow-[0_20px_40px_-24px_rgba(16,185,129,0.2)]",
  },
] as const;

export function PainPoints() {
  return (
    <section
      id="pain-points"
      className="scroll-mt-24 border-t border-white/[0.06] bg-carbon/30 py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <MotionReveal>
          <SectionHeader
            eyebrow="挑战认知"
            title="规模化采用大模型前的结构性矛盾"
            description="与同业实践一致：多模型各自为政、用量不可见、账单无法分摊，叠加缺省审计与策略空心化，会在成本、稳定性与监管三重压力下集中爆发。以下矛盾应在架构设计阶段显式消解。"
          />
        </MotionReveal>

        <ul className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <MotionReveal key={item.title} delay={0.06 * idx}>
              <li
                className={cn(
                  "glass-panel group h-full rounded-2xl p-8 transition duration-300",
                  "hover:-translate-y-1 hover:border-white/18",
                  item.border,
                  item.glow,
                )}
              >
                <div
                  className={cn(
                    "mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]",
                    item.accent,
                  )}
                >
                  <item.icon className="h-6 w-6" strokeWidth={1.5} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold tracking-wide text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed tracking-wide text-slate-400">
                  {item.desc}
                </p>
                <span className="mt-6 block h-px w-full max-w-[3rem] bg-gradient-to-r from-finance/60 to-transparent opacity-60 transition group-hover:max-w-[5rem] group-hover:opacity-100" />
              </li>
            </MotionReveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
