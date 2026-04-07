"use client";

import { Building2, Menu, Shield, Waypoints, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import type { SiteVariant } from "@/types/site";

export type HeaderVariant = SiteVariant;

const securityBase = "/products/security-gateway";
const modelBase = "/products/model-gateway";

const securityAnchors = [
  { href: `${securityBase}#pain-points`, label: "挑战" },
  { href: `${securityBase}#features`, label: "能力" },
  { href: `${securityBase}#architecture`, label: "架构" },
  { href: `${securityBase}#trust`, label: "部署" },
] as const;

const modelAnchors = [
  { href: `${modelBase}#value`, label: "价值" },
  { href: `${modelBase}#capabilities`, label: "能力" },
  { href: `${modelBase}#integration`, label: "接入方式" },
  { href: `${modelBase}#trust`, label: "服务" },
] as const;

const companyLinks = [
  { href: securityBase, label: "大模型安全网关" },
  { href: modelBase, label: "大模型聚合平台" },
] as const;

type HeaderProps = {
  variant?: HeaderVariant;
};

export function Header({ variant = "company" }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const nav =
    variant === "company"
      ? companyLinks
      : variant === "security-gateway"
        ? securityAnchors
        : modelAnchors;

  const ctaHref =
    variant === "company" ? "/#contact" : `${variant === "security-gateway" ? securityBase : modelBase}#cta`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] glass-panel">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-slate-100 transition hover:text-white"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-finance/40 bg-finance/10 text-finance">
            {variant === "company" ? (
              <Building2 className="h-5 w-5" aria-hidden />
            ) : variant === "security-gateway" ? (
              <Shield className="h-5 w-5" aria-hidden />
            ) : (
              <Waypoints className="h-5 w-5" aria-hidden />
            )}
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide sm:text-base">
              哲玄科技
            </span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-500 sm:text-[11px]">
              {variant === "company"
                ? "企业级 AI 基础设施"
                : variant === "security-gateway"
                  ? "安全网关"
                  : "聚合平台"}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="主导航">
          {variant !== "company" ? (
            <Link
              href="/"
              className="text-sm text-slate-500 transition hover:text-slate-200"
            >
              首页
            </Link>
          ) : null}
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-400 transition hover:text-slate-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            className="rounded-lg border border-finance/50 bg-finance/15 px-4 py-2 text-sm font-medium text-finance transition duration-200 hover:-translate-y-0.5 hover:bg-finance/25"
          >
            {variant === "company" ? "商务咨询" : "预约演示"}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:bg-white/5 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.08] bg-navy/95 px-4 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {variant !== "company" ? (
              <Link
                href="/"
                className="rounded-lg px-3 py-2.5 text-slate-400 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                首页
              </Link>
            ) : null}
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-slate-300 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="mt-2 rounded-lg bg-finance/20 py-2.5 text-center text-sm font-medium text-finance"
              onClick={() => setOpen(false)}
            >
              {variant === "company" ? "商务咨询" : "预约演示"}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
