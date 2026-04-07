import type { Metadata } from "next";
import { SecurityGatewayProduct } from "@/components/SecurityGatewayProduct";

export const metadata: Metadata = {
  title: "大模型企业安全网关",
  description:
    "哲玄科技 · 私有化安全合规网关：多模型统一接入、全链路可观测、Token 配额与账单、动态 DLP 与审计。",
};

export default function SecurityGatewayPage() {
  return <SecurityGatewayProduct />;
}
