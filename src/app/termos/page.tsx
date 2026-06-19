import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Termos",
  description: "Informacoes sobre os termos do site institucional Hyper Galaxy.",
  alternates: { canonical: "/termos" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Documento em preparacao" title="Termos de uso">
      <p>
        Esta rota foi preparada para os termos de uso que serão revisados antes da publicação
        de funcionalidades autenticadas ou comerciais.
      </p>
      <p>
        Os agentes, a plataforma e os dados apresentados na homepage são previews ou
        demonstrações de experiência. Eles não representam contas, contratos ou serviços
        ativos.
      </p>
      <p>
        Condições de escopo, prazo, disponibilidade e suporte serão definidas apenas em uma
        proposta comercial válida.
      </p>
    </LegalPage>
  );
}
