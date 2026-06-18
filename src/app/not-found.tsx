import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050507] px-6 text-center text-[#F6F4EF]">
      <div>
        <p className="font-mono text-xs font-black uppercase tracking-[0.3em] text-[#C4B5FD]">
          Erro 404
        </p>
        <h1 className="mt-6 text-[clamp(3rem,12vw,8rem)] font-black uppercase leading-[0.82]">
          Rota fora de orbita.
        </h1>
        <Link
          href="/"
          className="mt-10 inline-flex h-14 items-center bg-[#F6F4EF] px-6 text-sm font-black uppercase tracking-[0.08em] text-[#050507]"
        >
          Voltar para a homepage
        </Link>
      </div>
    </main>
  );
}
