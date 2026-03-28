"use client";

import { Menu, Shield, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "#pain-points", label: "行业痛点" },
  { href: "#features", label: "核心能力" },
  { href: "#architecture", label: "架构流程" },
  { href: "#trust", label: "部署与信任" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] glass-panel">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#"
          className="flex items-center gap-2 text-slate-100 transition hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-finance/40 bg-finance/10 text-finance">
            <Shield className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-sm font-semibold tracking-wide sm:text-base">
            合规网关
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="主导航">
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
            href="#cta"
            className="rounded-md border border-finance/50 bg-finance/15 px-4 py-2 text-sm font-medium text-finance transition hover:bg-finance/25"
          >
            预约演示
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-300 md:hidden"
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
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-slate-300 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#cta"
              className="rounded-md bg-finance/20 px-3 py-2 text-center font-medium text-finance"
              onClick={() => setOpen(false)}
            >
              预约演示
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
