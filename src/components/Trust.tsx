import { Building2, Lock, Server } from "lucide-react";

export function Trust() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="glass-panel overflow-hidden rounded-2xl border-safe/15">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-safe/30 bg-safe/10 px-3 py-1 text-xs font-medium tracking-wider text-safe">
                <Lock className="h-3.5 w-3.5" aria-hidden />
                私有化优先
              </div>
              <h2 className="text-2xl font-semibold tracking-wide text-slate-100 sm:text-3xl">
                支持 100% 私有化部署
              </h2>
              <p className="mt-4 leading-relaxed tracking-wide text-slate-400">
                数据、日志与模型访问流量均在企业内网受控运行，不与公网裸奔。满足金融机构对数据主权与边界隔离的硬性要求。
              </p>
              <ul className="mt-8 space-y-4">
                <li className="flex gap-3 text-sm leading-relaxed tracking-wide text-slate-400">
                  <Server
                    className="mt-0.5 h-5 w-5 shrink-0 text-finance"
                    aria-hidden
                  />
                  <span>
                    网关与审计存储可部署于专有 VPC / 物理机房，对接现有 IAM 与密钥管理体系。
                  </span>
                </li>
                <li className="flex gap-3 text-sm leading-relaxed tracking-wide text-slate-400">
                  <Building2
                    className="mt-0.5 h-5 w-5 shrink-0 text-finance"
                    aria-hidden
                  />
                  <span>
                    团队由来自顶尖金融机构与网络安全大厂的资深专家打造，深谙监管话术与攻防实战。
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative flex flex-col justify-center bg-gradient-to-br from-finance/[0.06] to-transparent p-8 lg:p-10">
              <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:24px_24px] opacity-60" />
              <div className="relative space-y-6">
                <div className="rounded-lg border border-white/10 bg-navy/80 p-5">
                  <p className="text-xs font-medium uppercase tracking-widest text-slate-500">
                    信任要素
                  </p>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-2">
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
                        软件 + 订阅更新
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
