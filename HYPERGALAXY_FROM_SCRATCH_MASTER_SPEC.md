# HYPER GALAXY — REBUILD TOTAL DO ZERO

## 1. Direção principal

Crie um projeto novo da Hyper Galaxy do zero.

Ignore completamente o projeto antigo, seus componentes, layouts, backgrounds, motions, vídeos, planetas, dashboards, estrutura visual, arquivos e decisões anteriores.

O projeto antigo não deve ser usado como base.

A única coisa que pode ser reaproveitada, depois de revisão, é parte da copy institucional da Hyper Galaxy.

A principal referência de experiência, composição, ritmo e motion é:

https://www.helloupdigital.com/

A nova Hyper Galaxy deve usar a Up Digital como base de:

- estrutura visual;
- hierarquia;
- proporções;
- ritmo;
- intensidade de motion;
- tipografia editorial;
- distribuição de objetos;
- sistema de planetas;
- custom cursor;
- preloader;
- interações;
- hover;
- drag;
- transições;
- scroll;
- mobile;
- sensação geral de qualidade.

Não copiar:

- código proprietário;
- bundles compilados;
- textos;
- marca;
- logo;
- imagens;
- projetos;
- clientes;
- personagem;
- assets;
- identidade verde.

Reconstrua os padrões observáveis com código próprio, componentes próprios, assets próprios e identidade Hyper Galaxy.

A meta é:

> Uma experiência visual e comportamental muito próxima da Up Digital, reinterpretada de forma original para a Hyper Galaxy.

---

# 2. Posicionamento da Hyper Galaxy

A Hyper Galaxy é uma empresa de tecnologia, software, inteligência artificial, automação e infraestrutura cloud.

Ela deve ser apresentada como um ecossistema tecnológico completo.

Pilares:

- desenvolvimento de software;
- agentes de IA;
- automação de processos;
- plataformas SaaS;
- infraestrutura cloud;
- APIs e integrações;
- marketplace de agentes;
- plataforma do cliente;
- projetos;
- tickets;
- financeiro;
- serviços recorrentes.

A homepage pública precisa vender:

- capacidade;
- inovação;
- qualidade;
- identidade;
- experiência;
- tecnologia;
- confiança;
- desejo de explorar.

Não deve parecer:

- dashboard;
- sistema administrativo;
- template SaaS;
- landing page genérica;
- site gamer;
- NFT;
- cyberpunk;
- portal cinematográfico;
- wallpaper de galáxia;
- site inteiro roxo.

---

# 3. Objetivo emocional

A experiência precisa gerar:

- curiosidade;
- ritmo;
- descoberta;
- movimento;
- recompensa visual;
- vontade de continuar rolando;
- sensação de marca autoral;
- percepção premium;
- confiança enterprise;
- lembrança de marca.

O usuário deve sentir:

> “Sempre existe algo novo no próximo movimento.”

Não criar uma página estática com animações decorativas.

O motion deve estar:

- nos textos;
- nos objetos;
- nos cards;
- nas transições;
- no cursor;
- no drag;
- na navegação;
- na mudança de seções;
- na resposta ao usuário.

---

# 4. Tecnologia

Criar um projeto novo com:

- Next.js;
- App Router;
- TypeScript;
- Tailwind CSS;
- ESLint;
- pasta `src`;
- npm;
- arquitetura limpa;
- responsividade desde o início.

Instalar somente o necessário:

- framer-motion;
- gsap;
- lenis;
- lucide-react;
- clsx;
- tailwind-merge.

Não instalar inicialmente:

- Three.js;
- React Three Fiber;
- WebGL pesado;
- bibliotecas de carrossel;
- kits completos de UI;
- bibliotecas visuais que limitem a personalização.

O objetivo é alcançar a experiência principalmente com:

- DOM;
- CSS;
- SVG;
- imagens otimizadas;
- Framer Motion;
- GSAP;
- Lenis;
- requestAnimationFrame;
- IntersectionObserver.

---

# 5. Estrutura do projeto

Criar:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css

  components/
    layout/
    navigation/
    preloader/
    hero/
    planets/
    motion/
    sections/
    cards/
    cursor/
    drag/
    nova/
    ui/

  config/
    colors.ts
    motion-tokens.ts
    planets.config.ts
    navigation.config.ts
    homepage.config.ts

  hooks/
    use-pointer-capability.ts
    use-reduced-motion.ts
    use-responsive-motion.ts
    use-scroll-progress.ts

  lib/
    cn.ts
    motion-utils.ts

public/
  assets/
    brand/
    planets/
    nova/
    stars/
    services/
    agents/
    projects/
    icons/
    textures/

docs/
  PROJECT_ARCHITECTURE.md
  UP_REFERENCE_AUDIT.md
  UP_TO_HYPER_MATRIX.md
  ASSET_AUDIT.md
  MOTION_AUDIT.md
  HERO_CHECKPOINT_REPORT.md
  HOMEPAGE_CHECKPOINT_REPORT.md
```

Separar a homepage pública da futura aplicação SaaS.

Não criar agora:

- autenticação;
- banco;
- dashboard real;
- billing real;
- tickets reais;
- marketplace funcional;
- backend.

Primeiro construir a experiência pública.

---

# 6. Auditoria obrigatória da referência

Antes de implementar, abrir:

https://www.helloupdigital.com/

Analisar em:

```txt
1920 × 1080
1440 × 900
1366 × 768
430 × 932
390 × 844
360 × 800
```

Registrar em `docs/UP_REFERENCE_AUDIT.md`:

- altura e comportamento do header;
- largura do container;
- margens laterais;
- proporção entre texto e objetos;
- tamanho da headline;
- line-height;
- tracking;
- combinação tipográfica;
- quantidade de espaço vazio;
- distribuição dos planetas;
- tamanhos e profundidades;
- entrada dos elementos;
- delays;
- springs;
- easings;
- hover;
- custom cursor;
- drag;
- swipe;
- transição entre seções;
- preloader;
- comportamento mobile;
- pausas visuais;
- estratégias de performance.

Criar `docs/UP_TO_HYPER_MATRIX.md`.

Para cada região da referência, registrar:

- função visual;
- função de UX;
- comportamento;
- motion;
- equivalente Hyper Galaxy;
- assets necessários;
- status;
- nota de fidelidade.

Não implementar antes de concluir a auditoria.

---

# 7. Identidade visual

## Paleta

Usar:

```txt
Cosmic Black: #050507
Deep Space: #090A10
Graphite: #17181E
Warm White: #F6F4EF
Silver: #B9BBC5
Hyper Purple: #6D28D9
Electric Purple: #8B5CF6
Lavender: #C4B5FD
Electric Blue: #2563EB
Ice Blue: #93C5FD
Magenta: #EC4899
Orange: #F97316
Teal: #14B8A6
Lime funcional: #A3E635
Warning: #F4B860
Error: #FF647C
```

Distribuição aproximada:

- 45% preto e tons escuros;
- 25% branco e cinza;
- 15% roxo;
- 10% azul;
- 5% acentos.

O roxo é assinatura, não tinta aplicada em toda a página.

Não criar:

- fundo roxo + card roxo + borda roxa + texto roxo;
- glow roxo em tudo;
- degradê roxo em todas as seções;
- página monocromática.

Usar mudanças de fundo para criar ritmo:

- preto;
- grafite;
- branco quente;
- lavanda clara;
- azul profundo;
- roxo concentrado apenas em momentos estratégicos.

## Tipografia

Criar quatro papéis:

- display sans;
- display serif;
- body sans;
- mono para labels.

A headline precisa combinar:

- serif ou outline;
- sans bold;
- contraste de peso;
- contraste de cor;
- escala editorial.

---

# 8. Motion system

Criar `src/config/motion-tokens.ts`:

```ts
export const motionTokens = {
  easings: {
    enter: [0.16, 1, 0.3, 1],
    route: [0.76, 0, 0.24, 1],
    smooth: [0.22, 1, 0.36, 1],
    standard: [0.25, 0.46, 0.45, 0.94],
  },

  durations: {
    instant: 0.18,
    fast: 0.30,
    pageEnter: 0.52,
    routeOverlay: 0.68,
    slow: 0.85,
    sweep: 1.10,
    blast: 1.40,
  },

  springs: {
    headline: {
      stiffness: 260,
      damping: 14,
      mass: 0.4,
    },

    hover: {
      stiffness: 180,
      damping: 20,
      mass: 0.5,
    },

    soft: {
      stiffness: 120,
      damping: 18,
      mass: 0.8,
    },
  },

  stagger: {
    letters: 0.028,
    words: 0.06,
    lines: 0.12,
    planets: 0.16,
    cards: 0.10,
    menu: 0.06,
  },

  drag: {
    timeConstant: 750,
    bounceStiffness: 200,
    bounceDamping: 40,
    restDelta: 1,
    restSpeed: 10,
  },
}
```

Criar componentes:

- `SplitTextReveal`;
- `SpringTextReveal`;
- `ScrollTextReveal`;
- `ScrambleText`;
- `MaskReveal`;
- `VelocityShift`;
- `MagneticButton`;
- `CustomCursor`;
- `AnimationPauser`;
- `SmoothScrollProvider`;
- `DragRail`;
- `FlipCard`;
- `SectionTransition`;
- `Marquee`;
- `CounterReveal`.

Não usar o mesmo efeito em todas as regiões.

Cada seção deve possuir uma mecânica principal diferente.

---

# 9. Performance

Criar `AnimationPauser` com:

- `IntersectionObserver`;
- `rootMargin: "15% 0px 15% 0px"`;
- pausa de animações fora da viewport;
- `MutationObserver` para sections dinâmicas;
- `prefers-reduced-motion`;
- cleanup completo.

Usar:

- transform;
- opacity;
- clip-path controlado;
- WebP;
- AVIF;
- SVG;
- lazy loading;
- preload somente do essencial;
- content-visibility abaixo da dobra;
- requestAnimationFrame apenas quando necessário.

Não usar:

- múltiplos canvas;
- milhares de partículas;
- blur gigante;
- vídeo de fundo pesado;
- imagens acima da resolução natural;
- filtros pesados;
- animações contínuas em elementos invisíveis.

Metas:

Desktop:

```txt
Lighthouse ≥ 90
CLS ≤ 0.05
TBT ≤ 150 ms
```

Mobile:

```txt
Lighthouse ≥ 75
CLS ≤ 0.05
TBT ≤ 200 ms
```

---

# 10. Preloader

Criar um preloader novo.

Não usar:

- vídeo;
- galáxia;
- portal;
- fundo azul;
- Nova em quadrado;
- logo duplicada;
- barra horizontal genérica.

Composição:

- fundo preto;
- um planeta central;
- estrelas mínimas;
- nome Hyper Galaxy;
- progresso;
- rotação suave;
- surface motion;
- atmosfera discreta.

O planeta do preloader deve ser o mesmo componente visual usado na hero.

Transição:

1. progresso chega a 100;
2. texto desaparece;
3. planeta aumenta;
4. planeta se desloca para a hero;
5. header entra;
6. headline entra;
7. demais planetas entram em stagger.

Usar:

- shared layout;
- `layoutId`;
- elemento persistente;
- técnica equivalente.

Não esconder a transição com corte preto.

---

# 11. Header

Não usar navbar em cápsula.

Desktop:

- logo pequena e nítida à esquerda;
- links centralizados;
- idioma, login e CTA à direita.

Links:

```txt
Projetos
Soluções
Agentes IA
Plataforma
Nova
Contato
```

Ações:

```txt
PT-BR / EN-US
Entrar
Iniciar projeto
```

Estado inicial:

- transparente;
- integrado ao fundo;
- sem borda pesada;
- sem glow.

No scroll:

- reduzir altura;
- fundo preto translúcido;
- blur moderado;
- borda inferior discreta.

Mobile:

- logo;
- botão de menu;
- menu fullscreen;
- links grandes;
- entrada escalonada;
- CTA.

---

# 12. Hero

A hero precisa seguir fortemente a arquitetura da referência.

Não usar:

- dashboard;
- card branco;
- mockup SaaS;
- wallpaper de galáxia;
- vídeo;
- portal;
- interface de nave;
- fundo inteiro roxo.

Desktop:

- altura mínima de 100vh;
- 52% a 56% para texto;
- 44% a 48% para planetas;
- composição assimétrica;
- espaço negativo;
- estrelas discretas;
- planetas distribuídos pela metade direita.

Copy inicial:

Label:

```txt
AI · SOFTWARE · CLOUD · AUTOMATION
```

Headline:

```txt
CONSTRUÍMOS
SISTEMAS
PARA EMPRESAS
IREM ALÉM.
```

Tratamento:

- `CONSTRUÍMOS`: serif ou outline;
- `SISTEMAS`: roxo;
- demais linhas: branco;
- line-height curto;
- alinhamento à esquerda;
- tipografia dominante.

Descrição:

```txt
Software, agentes de IA, automação e infraestrutura cloud para operações que querem crescer.
```

CTA principal:

```txt
INICIAR PROJETO →
```

CTA secundário:

```txt
EXPLORAR PLATAFORMA
```

Motion:

- linhas escondidas por overflow;
- entrada vertical;
- spring;
- stagger;
- CTA entra por último;
- planetas entram individualmente;
- estrelas surgem gradualmente;
- cometa ocasional.

---

# 13. Sistema de planetas

Os planetas precisam parecer planetas.

Não usar:

- círculos CSS;
- radial-gradient simples;
- listras;
- mesma textura com hue-rotate;
- mesma imagem com cores diferentes;
- blur;
- box-shadow como volume;
- assets pequenos ampliados.

Criar sete planetas:

```txt
01 — Nova
02 — Hyper Agents
03 — Hyper Cloud
04 — Hyper Flow
05 — Hyper Dev
06 — Hyper Support
07 — Hyper Connect
```

Cada planeta deve possuir:

- asset individual;
- textura própria;
- luz lateral;
- sombra hemisférica;
- terminador;
- atmosfera;
- highlight;
- movimento interno;
- float individual;
- tamanho individual;
- profundidade individual;
- label;
- hover;
- estado ativo;
- preview.

Criar diversidade:

- planeta gasoso;
- planeta rochoso;
- planeta com anel;
- planeta com lua;
- planeta com nuvens;
- planeta energético;
- planeta oceânico.

Cores:

- magenta;
- azul;
- turquesa;
- laranja;
- lavanda;
- azul profundo;
- verde azulado.

Criar:

```txt
Planet.tsx
PlanetSurface.tsx
PlanetAtmosphere.tsx
PlanetLabel.tsx
PlanetPreview.tsx
PlanetSystem.tsx
```

Criar:

```txt
src/config/planets.config.ts
```

Cada planeta deve ter:

- posição;
- tamanho;
- profundidade;
- duração;
- amplitude;
- direção;
- delay;
- surface speed;
- rotation speed;
- accent color;
- atmosphere color.

Não sincronizar os movimentos.

---

# 14. Custom cursor

Criar cursor somente no desktop.

Estados:

- default;
- link;
- CTA;
- planeta;
- drag;
- preview.

Criar:

- cursor-dot;
- cursor-ring.

Implementação:

- refs;
- requestAnimationFrame;
- lerp;
- sem setState por pixel;
- pointer-events none;
- ocultar em pointer coarse;
- ocultar no mobile.

Labels:

```txt
EXPLORAR
ARRASTE
ABRIR
```

---

# 15. Transição após hero

Não usar fade simples.

No início do scroll:

1. headline se desloca em camadas;
2. planetas secundários se afastam;
3. planeta ativo cresce;
4. expansão radial acontece;
5. sweep atravessa a viewport;
6. próxima seção aparece;
7. fundo muda de cor.

Essa transição precisa conectar a hero à segunda experiência.

---

# 16. Estrutura completa da homepage

## Região 1 — Hero

- headline editorial;
- planetas;
- cursor;
- CTA;
- preloader conectado;
- motion forte;
- fundo preto.

## Região 2 — Reveal interativo

Título:

```txt
SEU PRÓXIMO
NÍVEL ESTÁ
AQUI DENTRO.
```

Criar comparação interativa:

Lado A:

- processos manuais;
- ferramentas desconectadas;
- tarefas repetitivas;
- operação lenta.

Lado B:

- agentes;
- automações;
- sistemas conectados;
- operação inteligente.

Interação:

- máscara;
- cursor;
- drag;
- swipe no mobile.

## Região 3 — Apresentação da empresa

Label:

```txt
MAIS QUE UMA SOFTWARE HOUSE
```

Headline:

```txt
SOMOS A EQUIPE
DE TECNOLOGIA
DA SUA OPERAÇÃO.
```

Texto curto e CTA.

## Região 4 — Marquee

Mostrar tecnologias:

- OpenAI;
- Next.js;
- TypeScript;
- Node.js;
- Python;
- PostgreSQL;
- Supabase;
- Docker;
- Vercel;
- Hostinger;
- WhatsApp;
- Telegram.

Deixar claro que são tecnologias e integrações, não clientes.

## Região 5 — Métricas

Não inventar números comerciais.

Usar capacidades:

```txt
24/7
Agentes disponíveis

1
Ecossistema conectado

API
Integrações abertas

CLOUD
Infraestrutura escalável
```

Usar tipografia grande, não cards de dashboard.

## Região 6 — Serviços com flip

Título:

```txt
O QUE
CONSTRUÍMOS.
```

Serviços:

```txt
01 — Desenvolvimento de Software
02 — Agentes de IA
03 — Automação
04 — Plataformas SaaS
05 — Cloud e Infraestrutura
06 — APIs e Integrações
```

Cada card deve ter:

- frente;
- verso;
- imagem;
- número;
- título;
- descrição;
- CTA;
- cor própria;
- motion próprio.

Mobile:

- primeiro toque revela;
- segundo toque abre.

## Região 7 — Objeto central explorável

Criar:

```txt
HYPER VAULT
```

ou:

```txt
AGENT CORE
```

Representar:

- núcleo de agentes;
- cofre tecnológico;
- cápsula;
- gateway para o marketplace.

Interação:

- reage ao cursor;
- abre;
- expande;
- revela categorias;
- conduz para a próxima área.

## Região 8 — Marketplace com drag

Título:

```txt
AGENTES QUE
TRABALHAM COM VOCÊ.
```

Texto:

```txt
Arraste para explorar.
```

Agentes:

- Atendimento IA;
- SDR IA;
- Jurídico IA;
- Clínicas IA;
- Financeiro IA;
- Desenvolvedor IA;
- WhatsApp IA;
- Automação IA.

Implementar:

- drag real;
- swipe;
- momentum;
- snap;
- contador;
- progress bar;
- card ativo;
- item seguinte parcialmente visível;
- cursor grab.

Não usar autoplay.

## Região 9 — Plataforma

Apresentar progressivamente:

- agentes;
- serviços contratados;
- projetos;
- tickets;
- financeiro;
- automações;
- notificações.

Não mostrar tudo de uma vez.

Usar sticky storytelling com limite de duração.

## Região 10 — Diferenciais

Criar composição tipográfica:

```txt
AI-FIRST
24 / 7
CONNECTED
CUSTOM
CLOUD
```

Cada palavra entra com composição e fundo diferentes.

Não usar cinco cards iguais.

## Região 11 — Nova

Título:

```txt
CONHEÇA NOVA,
SUA ASSISTENTE
HYPER GALAXY.
```

A Nova deve:

- estar em alta resolução;
- ter fundo transparente;
- reagir ao cursor;
- mover o visor;
- piscar;
- demonstrar conversa;
- ter status online;
- abrir chat;
- ser útil.

Não usar quadrado preto.

## Região 12 — CTA final

Título:

```txt
VAMOS CONSTRUIR
O QUE VEM DEPOIS.
```

CTAs:

```txt
INICIAR PROJETO
ACESSAR PLATAFORMA
```

Criar:

- tipografia gigante;
- planeta reaparecendo;
- marquee final;
- transição para footer;
- assinatura Hyper Galaxy.

---

# 17. Mobile

O mobile precisa ser uma experiência própria.

Não apenas empilhar o desktop.

Implementar:

- headline adaptada;
- tipografia forte;
- planetas por swipe;
- cards parcialmente visíveis;
- flip por toque;
- drag;
- transições menores;
- motion reduzido, mas perceptível;
- sem cursor;
- sem hover obrigatório;
- sem WebGL;
- sem vídeo pesado;
- sem scroll sequestrado;
- sem overflow horizontal.

Testar:

```txt
430 × 932
390 × 844
360 × 800
```

---

# 18. Assets

Criar `docs/ASSET_AUDIT.md`.

Registrar:

- nome;
- formato;
- resolução;
- peso;
- tamanho renderizado;
- qualidade;
- uso.

Reprovar:

- asset borrado;
- screenshot;
- crop;
- fundo incorreto;
- compressão excessiva;
- imagem acima da resolução natural.

Logo:

- SVG;
- transparente;
- nítida.

Nova:

- PNG/WebP transparente;
- alta resolução;
- sem fundo embutido.

Planetas:

- mínimo 1024 × 1024;
- fundo transparente;
- WebP/AVIF;
- alta nitidez.

---

# 19. Desenvolvimento em checkpoints

## Checkpoint 1

Implementar somente:

- estrutura;
- design tokens;
- motion tokens;
- preloader;
- header;
- hero;
- planetas;
- cursor;
- primeira transição;
- mobile da hero.

Parar.

Validar.

## Checkpoint 2

Implementar:

- reveal;
- apresentação da empresa;
- marquee;
- métricas;
- serviços.

Parar.

Validar.

## Checkpoint 3

Implementar:

- objeto central;
- marketplace;
- plataforma;
- diferenciais;
- Nova;
- CTA final;
- footer.

Parar.

Validar.

Não construir tudo em uma única execução.

---

# 20. Validação visual

Criar screenshots:

```txt
1920 × 1080
1440 × 900
1366 × 768
430 × 932
390 × 844
360 × 800
```

Gravar vídeos:

- preloader;
- hero;
- headline;
- planetas;
- custom cursor;
- primeira transição;
- reveal;
- cards flip;
- drag;
- mobile;
- swipe.

Criar relatórios:

```txt
docs/HERO_CHECKPOINT_REPORT.md
docs/HOMEPAGE_CHECKPOINT_REPORT.md
```

Dar notas de 0 a 10 para:

- preloader;
- continuidade;
- header;
- headline;
- composição;
- planetas;
- assets;
- motion;
- cursor;
- transições;
- cards;
- drag;
- mobile;
- performance;
- fidelidade à referência;
- identidade Hyper Galaxy.

Não considerar aprovado se qualquer item essencial estiver abaixo de 8.

---

# 21. Git

Criar projeto e repositório novos.

Sugestão:

```txt
hypergalaxy-v2
```

Criar branch:

```txt
rebuild/hypergalaxy-v2
```

Ao concluir cada checkpoint:

```bash
npm run lint
npm run build
git status
git add .
git commit -m "<mensagem do checkpoint>"
git push
```

Não fazer deploy sem aprovação visual.

Não alterar DNS.

Não substituir o site atual antes da aprovação final.

---

# 22. Primeira execução

Nesta primeira execução:

1. criar o projeto novo;
2. criar a branch;
3. criar a estrutura;
4. instalar dependências;
5. criar documentação;
6. auditar a referência;
7. criar design tokens;
8. criar motion tokens;
9. apresentar o plano do Checkpoint 1;
10. parar.

Não implementar ainda a homepage completa.

No final, informar:

- caminho do projeto;
- branch;
- dependências;
- estrutura;
- auditoria criada;
- decisões visuais;
- decisões técnicas;
- plano do Checkpoint 1;
- riscos;
- dúvidas bloqueantes.

Não fazer deploy.
Não fazer merge.
Não continuar sem aprovação.
