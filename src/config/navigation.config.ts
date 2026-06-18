export const navigationLinks = [
  { label: "Projetos", href: "#projetos" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Agentes IA", href: "#agentes-ia" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Nova", href: "#nova" },
  { label: "Contato", href: "#contato" },
] as const;

export const navigationActions = {
  language: {
    current: "PT-BR",
    alternate: "EN-US",
  },
  login: {
    label: "Entrar",
    href: "#plataforma",
  },
  primaryCta: {
    label: "Iniciar projeto",
    href: "#iniciar-projeto",
  },
} as const;
