import { Architecture } from "@/components/Architecture";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { Trust } from "@/components/Trust";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-grid-faint [background-size:32px_32px] opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_100%_0%,rgba(17,24,39,0.9),transparent)]"
        aria-hidden
      />

      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Architecture />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
