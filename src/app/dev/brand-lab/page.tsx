import type { Metadata } from "next";

import { BrandLab } from "@/components/brand/BrandLab";

export const metadata: Metadata = {
  title: "Brand Lab",
  robots: { index: false, follow: false },
};

export default function BrandLabPage() {
  return <BrandLab />;
}
