import { Building2 } from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import type { SiteVariant } from "@/types/site";

const securityBase = "/products/security-gateway";
const modelBase = "/products/model-gateway";

const securityLinks = [
  { href: `${securityBase}#pain-points`, label: "挑战" },
  { href: `${securityBase}#features`, label: "能力" },
  { href: `${securityBase}#architecture`, label: "架构" },
  { href: `${securityBase}#trust`, label: "部署" },
  { href: `${securityBase}#cta`, label: "联系" },
] as const;

const modelLinks = [
  { href: `${modelBase}#value`, label: "价值" },
  { href: `${modelBase}#capabilities`, label: "能力" },
  { href: `${modelBase}#integration`, label: "接入方式" },
  { href: `${modelBase}#trust`, label: "服务" },
  { href: `${modelBase}#cta`, label: "联系" },
] as const;

const companyLinks = [
  { href: "/", label: "首页" },
  { href: securityBase, label: "大模型安全网关" },
  { href: modelBase, label: "统一模型转发" },
  { href: "/#contact", label: "联系" },
] as const;

type FooterProps = {
  variant?: SiteVariant;
};

export function Footer({ variant = "company" }: FooterProps) {
  const links =
    variant === "company"
      ? companyLinks
      : variant === "security-gateway"
        ? securityLinks
        : modelLinks;

  const title =
    variant === "company"
      ? "哲玄科技 · 企业级 AI 基础设施与网关服务"
      : variant === "security-gateway"
        ? "大模型企业安全网关"
        : "企业级大模型统一转发服务";

  const blurb =
    variant === "company"
      ? "为多模型时代提供可私有化部署的安全网关与托管式统一 API 转发能力。"
      : variant === "security-gateway"
        ? "面向金融、政务及强合规行业的私有化大模型安全网关。"
        : "OpenAI 兼容端点，一端触达多家顶级与国产模型。";

  return (
    <footer className="border-t border-white/[0.08] py-14 sm:py-16">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3 text-slate-400">
            <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-finance/80" aria-hidden />
            <div>
              <p className="text-sm font-medium tracking-wide text-slate-300">
                {title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {blurb}
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-500">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="transition hover:text-slate-300"
              >
                {l.label}
              </Link>
            ))}
            {variant !== "company" ? (
              <Link href="/" className="transition hover:text-slate-300">
                返回首页
              </Link>
            ) : null}
          </nav>
        </div>
        <p className="mt-12 border-t border-white/[0.06] pt-8 text-center text-xs tracking-wide text-slate-600 sm:text-left">
          © {new Date().getFullYear()} 哲玄科技. 页面内容用于产品与能力展示，不构成法律或合规承诺。
        </p>
      </Container>
    </footer>
  );
}
