export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="w-full max-w-3xl border-l border-white/10 pl-6 sm:pl-8">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          Hyper Galaxy
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-6xl">
          Projeto inicializado
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
          Fundacao tecnica criada. O Checkpoint 1 ainda nao foi implementado.
        </p>
      </div>
    </main>
  );
}
