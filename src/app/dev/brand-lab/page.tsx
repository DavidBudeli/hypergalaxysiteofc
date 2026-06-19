import type { Metadata } from "next";

import { BrandLab } from "@/components/brand/BrandLab";

export const metadata: Metadata = {
  title: "Brand Lab",
  robots: { index: false, follow: false },
};

export default async function BrandLabPage({
  searchParams,
}: {
  searchParams: Promise<{ capture?: string }>;
}) {
  const { capture } = await searchParams;
  return <BrandLab capture={capture} />;
}
