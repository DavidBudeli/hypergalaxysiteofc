import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Wordmark } from "@/components/navigation/Wordmark";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#050507] px-6 py-8 text-[#F6F4EF] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[960px]">
        <div className="flex items-center justify-between border-b border-white/12 pb-6">
          <Link href="/">
            <Wordmark />
          </Link>
          <Link
            href="/"
            className="inline-flex h-11 items-center gap-2 border border-white/14 px-4 text-xs font-black uppercase tracking-[0.12em]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Voltar
          </Link>
        </div>

        <article className="py-20">
          <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#C4B5FD]">
            {eyebrow}
          </p>
          <h1 className="mt-7 text-[clamp(3rem,10vw,7rem)] font-black uppercase leading-[0.86]">
            {title}
          </h1>
          <div className="mt-12 grid gap-7 text-base leading-8 text-white/65">{children}</div>
        </article>
      </div>
    </main>
  );
}
