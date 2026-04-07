import type { Metadata } from "next";
import { ModelGatewayProduct } from "@/components/ModelGatewayProduct";

export const metadata: Metadata = {
  title: "大模型聚合平台",
  description:
    "哲玄科技托管服务：OpenAI 兼容聚合 API，一端接入多家大模型，智能路由、计量与账单。",
};

export default function ModelGatewayPage() {
  return <ModelGatewayProduct />;
}
