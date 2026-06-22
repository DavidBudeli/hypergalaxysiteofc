"use client";

import { Check, Clipboard, ExternalLink, Send } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";

const projectTypes = [
  "Software sob medida",
  "Agente de IA",
  "Automação",
  "Plataforma SaaS",
  "Integração/API",
  "Site institucional premium",
  "E-commerce",
  "Ainda não sei",
] as const;

const budgets = [
  "Até R$ 2.000",
  "R$ 2.000 a R$ 5.000",
  "R$ 5.000 a R$ 10.000",
  "R$ 10.000 a R$ 25.000",
  "Acima de R$ 25.000",
  "Ainda não definido",
] as const;

const deadlines = [
  "Urgente",
  "Até 15 dias",
  "30 dias",
  "60 dias",
  "Sem prazo definido",
] as const;

const goals = [
  "Vender mais",
  "Automatizar operação",
  "Reduzir trabalho manual",
  "Criar produto digital",
  "Melhorar atendimento",
  "Organizar processos",
  "Escalar uma operação",
  "Outro",
] as const;

const fieldClassName =
  "min-h-14 w-full border border-white/14 bg-white/[0.055] px-4 text-base text-[#F5F3EE] outline-none transition placeholder:text-white/30 hover:border-white/24 focus:border-[#7546E8] focus:bg-white/[0.08] focus:ring-2 focus:ring-[#7546E8]/35";

type ProjectBriefingFormProps = {
  whatsappUrl: string;
};

export function ProjectBriefingForm({ whatsappUrl }: ProjectBriefingFormProps) {
  const resultRef = useRef<HTMLDivElement>(null);
  const [briefing, setBriefing] = useState("");
  const [formError, setFormError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCopied(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      projectType: String(formData.get("projectType") ?? "").trim(),
      budget: String(formData.get("budget") ?? "").trim(),
      deadline: String(formData.get("deadline") ?? "").trim(),
      problem: String(formData.get("problem") ?? "").trim(),
      goal: String(formData.get("goal") ?? "").trim(),
    };

    const missingField = Object.entries(values).find(([, value]) => !value);
    if (missingField) {
      setFormError("Preencha todos os campos obrigatórios para gerar o briefing.");
      form.querySelector<HTMLElement>(`[name="${missingField[0]}"]`)?.focus();
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      setFormError("Informe um e-mail válido.");
      form.querySelector<HTMLElement>('[name="email"]')?.focus();
      return;
    }

    const summary = [
      "BRIEFING — HYPER GALAXY",
      "",
      `Nome: ${values.name}`,
      `Empresa: ${values.company}`,
      `WhatsApp: ${values.whatsapp}`,
      `E-mail: ${values.email}`,
      `Tipo de projeto: ${values.projectType}`,
      `Orçamento estimado: ${values.budget}`,
      `Prazo desejado: ${values.deadline}`,
      `Objetivo principal: ${values.goal}`,
      "",
      "Descrição do problema:",
      values.problem,
    ].join("\n");

    setFormError("");
    setBriefing(summary);
    window.requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }));

    if (whatsappUrl) {
      const separator = whatsappUrl.includes("?") ? "&" : "?";
      window.open(`${whatsappUrl}${separator}text=${encodeURIComponent(summary)}`, "_blank", "noopener,noreferrer");
    }
  };

  const copyBriefing = async () => {
    if (!briefing) return;

    try {
      await navigator.clipboard.writeText(briefing);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = briefing;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const fallbackCopied = document.execCommand("copy");
      textarea.remove();

      setCopied(fallbackCopied);
      if (!fallbackCopied) {
        setFormError("Não foi possível copiar automaticamente. Selecione o resumo e copie manualmente.");
      }
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start">
      <form
        className="border border-white/12 bg-[#0B0C12]/88 p-5 shadow-2xl backdrop-blur-xl sm:p-7 lg:p-9"
        onSubmit={handleSubmit}
        noValidate
      >
        <FormStep number="01" label="Contexto">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nome" name="name" autoComplete="name" />
            <Field label="Empresa" name="company" autoComplete="organization" />
            <Field label="WhatsApp" name="whatsapp" type="tel" autoComplete="tel" />
            <Field label="E-mail" name="email" type="email" autoComplete="email" />
          </div>
        </FormStep>

        <FormStep number="02" label="Escopo">
          <div className="grid gap-5 sm:grid-cols-2">
            <SelectField label="Tipo de projeto" name="projectType" options={projectTypes} />
            <SelectField label="Orçamento estimado" name="budget" options={budgets} />
            <SelectField label="Prazo desejado" name="deadline" options={deadlines} />
            <SelectField label="Objetivo principal" name="goal" options={goals} />
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-semibold text-white/72">Descrição do problema</span>
            <textarea
              name="problem"
              required
              rows={7}
              placeholder="Conte o que acontece hoje, o que já foi tentado e onde está o maior impacto."
              className={`${fieldClassName} resize-y py-4 leading-7`}
            />
          </label>
        </FormStep>

        {formError ? (
          <p className="mt-6 border-l-2 border-[#FF7A45] bg-[#FF7A45]/8 px-4 py-3 text-sm text-[#FFD5C5]" role="alert">
            {formError}
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-[#F5F3EE] px-6 text-sm font-black uppercase tracking-[0.08em] text-[#050507] transition hover:bg-[#C4B5FD] sm:w-auto"
          data-cursor="cta"
        >
          Gerar briefing
          <Send size={18} aria-hidden="true" />
        </button>
      </form>

      <aside className="lg:sticky lg:top-28">
        <div className="border border-white/12 bg-white/[0.045] p-6">
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-[#93C5FD]">
            Como funciona
          </p>
          <ol className="mt-6 grid gap-5 text-sm leading-6 text-white/58">
            <li className="flex gap-3"><span className="text-[#7546E8]">01</span> Você organiza o contexto do projeto.</li>
            <li className="flex gap-3"><span className="text-[#7546E8]">02</span> A página gera um resumo pronto para compartilhar.</li>
            <li className="flex gap-3"><span className="text-[#7546E8]">03</span> Você copia ou envia pelo canal configurado.</li>
          </ol>
          <p className="mt-7 border-t border-white/10 pt-5 text-xs leading-5 text-white/38">
            Nenhum dado é salvo em banco nesta etapa.
          </p>
        </div>
      </aside>

      {briefing ? (
        <div
          ref={resultRef}
          className="border border-[#7546E8]/45 bg-[#7546E8]/8 p-5 sm:p-7 lg:col-span-2"
          aria-live="polite"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C4B5FD]">
                <Check size={18} aria-hidden="true" />
                {whatsappUrl
                  ? "Briefing preparado. Vamos abrir o WhatsApp para envio."
                  : "Briefing gerado. Copie ou envie pelo canal configurado."}
              </span>
              <pre className="mt-5 max-h-[30rem] overflow-auto whitespace-pre-wrap font-sans text-sm leading-7 text-white/72">
                {briefing}
              </pre>
            </div>
            <button
              type="button"
              onClick={copyBriefing}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 border border-white/18 px-5 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:border-[#C4B5FD] hover:text-[#C4B5FD]"
            >
              {copied ? <Check size={16} aria-hidden="true" /> : <Clipboard size={16} aria-hidden="true" />}
              {copied ? "Copiado" : "Copiar briefing"}
            </button>
          </div>
          {whatsappUrl ? (
            <a
              href={`${whatsappUrl}${whatsappUrl.includes("?") ? "&" : "?"}text=${encodeURIComponent(briefing)}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#93C5FD] hover:text-white"
            >
              Abrir WhatsApp novamente
              <ExternalLink size={15} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

function FormStep({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="border-0 p-0 [&+&]:mt-10">
      <legend className="mb-6 flex w-full items-center gap-4">
        <span className="font-mono text-xs font-black tracking-[0.2em] text-[#7546E8]">{number}</span>
        <span className="text-lg font-semibold text-[#F5F3EE]">{label}</span>
        <span className="h-px flex-1 bg-white/10" />
      </legend>
      {children}
    </fieldset>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: "text" | "tel" | "email";
  autoComplete: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/72">{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className={fieldClassName}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/72">{label}</span>
      <select name={name} required defaultValue="" className={fieldClassName}>
        <option value="" disabled className="bg-[#0B0C12]">Selecione</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0B0C12]">{option}</option>
        ))}
      </select>
    </label>
  );
}
