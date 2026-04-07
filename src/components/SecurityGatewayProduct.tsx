import { Architecture } from "@/components/Architecture";
import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PainPoints } from "@/components/PainPoints";
import { SiteBackground } from "@/components/SiteBackground";
import { Trust } from "@/components/Trust";

export function SecurityGatewayProduct() {
  return (
    <div className="relative min-h-screen bg-navy text-foreground">
      <SiteBackground />
      <Header variant="security-gateway" />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Architecture />
        <Trust />
        <CTA />
      </main>
      <Footer variant="security-gateway" />
    </div>
  );
}
