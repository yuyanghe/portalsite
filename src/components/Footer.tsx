import { Shield } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-slate-400">
          <Shield className="h-5 w-5 text-finance/80" aria-hidden />
          <span className="text-sm tracking-wide">
            企业级大模型合规网关 · 仅供演示落地页
          </span>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-slate-500">
          <Link href="#pain-points" className="hover:text-slate-300">
            痛点
          </Link>
          <Link href="#features" className="hover:text-slate-300">
            能力
          </Link>
          <Link href="#architecture" className="hover:text-slate-300">
            架构
          </Link>
          <Link href="#trust" className="hover:text-slate-300">
            信任
          </Link>
          <Link href="#cta" className="hover:text-slate-300">
            联系
          </Link>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs tracking-wide text-slate-600 sm:text-left">
        © {new Date().getFullYear()} 合规网关演示站点。内容用于产品展示，不构成法律或合规承诺。
      </p>
    </footer>
  );
}
