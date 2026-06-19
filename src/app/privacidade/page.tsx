import type { Metadata } from "next";

import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Informacoes de privacidade do site institucional Hyper Galaxy.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Documento em preparacao" title="Privacidade">
      <p>
        Esta rota foi preparada para receber a política de privacidade revisada antes da
        publicação da plataforma autenticada.
      </p>
      <p>
        A experiencia atual nao possui cadastro, login, pagamentos ou coleta de dados por
        formulário. Nenhuma política jurídica definitiva é simulada nesta página.
      </p>
      <p>
        Para assuntos relacionados à privacidade, use o canal institucional indicado no
        rodape da homepage.
      </p>
    </LegalPage>
  );
}
