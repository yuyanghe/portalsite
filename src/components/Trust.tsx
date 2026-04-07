import { Building2, Lock, Server } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/ui/MotionReveal";

export function Trust() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 border-t border-white/[0.06] bg-carbon/25 py-24 sm:py-28 lg:py-32"
    >
      <Container>
        <MotionReveal>
          <div className="glass-panel overflow-hidden rounded-2xl border-safe/20">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r lg:p-12">
                <div className="mb-8 inline-flex items-center gap-2 rounded-lg border border-safe/30 bg-safe/10 px-3 py-1.5 text-xs font-semibold tracking-widest text-safe">
                  <Lock className="h-3.5 w-3.5" aria-hidden />
                  部署形态
                </div>
                <h2 className="text-3xl font-semibold tracking-wide text-slate-100 sm:text-4xl">
                  支持 100% 私有化部署
                </h2>
                <p className="mt-6 text-base leading-relaxed tracking-wide text-slate-400">
                  数据、日志与模型访问流量均在企业内网受控运行。可为金融、政务及关键基础设施客户提供等保与关保视角下的边界隔离与验收材料支撑。
                </p>
                <ul className="mt-10 space-y-5">
                  <li className="flex gap-4 text-sm leading-relaxed tracking-wide text-slate-400">
                    <Server
                      className="mt-0.5 h-5 w-5 shrink-0 text-finance"
                      aria-hidden
                    />
                    <span>
                      网关与审计存储可部署于专有 VPC、双活机房或国产化环境，对接现有 IAM、HSM 与密钥治理流程。
                    </span>
                  </li>
                  <li className="flex gap-4 text-sm leading-relaxed tracking-wide text-slate-400">
                    <Building2
                      className="mt-0.5 h-5 w-5 shrink-0 text-finance"
                      aria-hidden
                    />
                    <span>
                      团队来自顶尖金融机构与网络安全大厂，熟悉攻防演练、渗透测试与监管问询的表述口径。
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative flex flex-col justify-center bg-gradient-to-br from-finance/[0.07] via-transparent to-safe/[0.05] p-10 lg:p-12">
                <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:26px_26px] opacity-55" />
                <div className="relative">
                  <div className="rounded-xl border border-white/10 bg-navy/85 p-8 backdrop-blur-sm">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                      交付检查项（摘录）
                    </p>
                    <dl className="mt-6 grid gap-6 sm:grid-cols-2">
                      <div>
                        <dt className="text-sm text-slate-500">数据驻留</dt>
                        <dd className="mt-1 font-medium text-slate-200">
                          客户环境内闭环
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-slate-500">审计取证</dt>
                        <dd className="mt-1 font-medium text-slate-200">
                          全链路密文留存
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-slate-500">模型路由</dt>
                        <dd className="mt-1 font-medium text-slate-200">
                          统一配额与策略
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm text-slate-500">交付形态</dt>
                        <dd className="mt-1 font-medium text-slate-200">
                          软件订阅 + 专业服务
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
