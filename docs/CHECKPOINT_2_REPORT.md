# Checkpoint 2 Report

Status: implemented and ready for visual approval.

Date: 2026-06-17

Branch: `feat/checkpoint-2-experience`

## Escopo Entregue

- Region 2: reveal interativo com estado fragmentado e estado de ecossistema inteligente.
- Region 3: apresentacao institucional editorial.
- Region 4: marquee de tecnologias e integracoes.
- Region 5: metricas e capacidades verificaveis.
- Region 6: servicos com flip.
- Responsividade em desktop e mobile.
- Acessibilidade basica para controles, teclado, touch e reduced motion.
- Evidencias visuais e JSON de validacao.
- Relatorios atualizados.

Nao foi iniciado Checkpoint 3.

## Arquivos Criados

- `src/config/checkpoint-two.config.ts`
- `src/components/motion/MaskReveal.tsx`
- `src/components/drag/DragReveal.tsx`
- `src/components/motion/Marquee.tsx`
- `src/components/motion/CounterReveal.tsx`
- `src/components/cards/FlipCard.tsx`
- `src/components/motion/ScrollTextReveal.tsx`
- `src/components/motion/SectionTransition.tsx`
- `src/components/sections/RevealSection.tsx`
- `src/components/sections/CompanySection.tsx`
- `src/components/sections/TechnologyMarqueeSection.tsx`
- `src/components/sections/MetricsSection.tsx`
- `src/components/sections/ServicesSection.tsx`
- `src/components/sections/CheckpointTwoExperience.tsx`
- `docs/checkpoint-2-screenshots/`
- `docs/CHECKPOINT_2_REPORT.md`

## Componentes Criados

- `CheckpointTwoExperience`
- `RevealSection`
- `CompanySection`
- `TechnologyMarqueeSection`
- `MetricsSection`
- `ServicesSection`
- `DragReveal`
- `MaskReveal`
- `Marquee`
- `CounterReveal`
- `FlipCard`
- `ScrollTextReveal`
- `SectionTransition`

## Assets

- Nenhum asset proprietario externo foi copiado.
- Nenhum video, WebGL ou biblioteca de carrossel foi adicionado.
- Planetas do Checkpoint 1 foram preservados.
- Nova aparece apenas como presenca sutil na secao institucional.
- Servicos usam glyphs SVG originais gerados em `FlipCard`.
- Evidencias PNG e JSON foram adicionadas em `docs/checkpoint-2-screenshots/`.

## Motion

- Reveal: mascara, cursor, drag, range input e botoes acessiveis.
- Institucional: text reveal editorial.
- Marquee: duas linhas com direcoes opostas, velocidade moderada, pausa em hover e reduced motion.
- Metricas: counters quando aplicavel e reveal/escala ligada ao scroll.
- Servicos: flip, tilt moderado, hover, tap e foco por teclado.
- Reduced motion validado com marquee reduzido para `0.001s`.

## Desktop

Validado em 1440 x 900 com capturas obrigatorias.

Resultados:

- Sem console errors.
- Sem assets 404.
- Sem imagens visiveis quebradas.
- Sem overflow horizontal.
- Cursor customizado ativo.
- Reveal, marquee, metricas e flip respondem.
- Lighthouse desktop: Performance 99, CLS 0, TBT 0 ms.

## Mobile

Validado em:

- 430 x 932
- 390 x 844
- 360 x 800

Resultados:

- Sem overflow horizontal.
- Cursor customizado desativado.
- Reveal controlavel por range/swipe/touch.
- Cards funcionam por toque.
- Titulo mobile de servicos corrigido para nao cortar texto.
- Espaco mobile da hero reservado para reduzir CLS.
- Lighthouse mobile: Performance 92, CLS 0.0181, TBT 40.5 ms.

## Acessibilidade

- Reveal possui range input e botoes alternativos.
- Flip cards usam `button` nativo na frente.
- Controles do verso saem da ordem de tabulacao ate o card ser revelado.
- CTAs sao links reais.
- Reduced motion preservado.
- Mobile nao depende de hover.

## Performance

Metas:

| Target | Meta | Resultado |
| --- | ---: | ---: |
| Desktop Lighthouse | >= 90 | 99 |
| Desktop CLS | <= 0.05 | 0 |
| Desktop TBT | <= 150 ms | 0 ms |
| Mobile Lighthouse | >= 75 | 92 |
| Mobile CLS | <= 0.05 | 0.0181 |
| Mobile TBT | <= 200 ms | 40.5 ms |

Observacao: o Lighthouse CLI retornou erro `EPERM` na limpeza do diretorio temporario do Chrome depois de escrever os JSONs. Os arquivos foram gerados, lidos e usados para os resultados acima.

## Problemas Encontrados

- Reveal desktop inicialmente cortava a headline. Corrigido com nova proporcao de grid e type scale.
- Marquee foi medido como pausado por reduced motion/hover no validador. Corrigido no fluxo de validacao e confirmado como `running` no estado normal.
- Mobile services cortava `CONSTRUIMOS.` em 390px. Corrigido com escala mobile separada.
- Console dev alertou LCP em `nova.webp`. Corrigido com `priority` no uso institucional.
- Flip card tinha controles do verso acessiveis por tab antes do reveal. Corrigido com `tabIndex`.
- Lighthouse mobile CLS inicial era `0.0796`. Corrigido para `0.0181`.

## Limitacoes

- Sem video de evidencia commitado.
- Service glyphs sao visuais originais em SVG/codigo, nao ilustracoes bitmap detalhadas.
- Reveal mobile e denso por natureza em 360px, mas permanece controlavel e sem overflow.
- Duas vulnerabilidades moderadas de `npm audit` seguem pendentes; `npm audit fix --force` nao foi executado.
- Checkpoint 3 permanece fora de escopo.

## Evidencias

- `docs/checkpoint-2-screenshots/reveal-1440x900.png`
- `docs/checkpoint-2-screenshots/reveal-active-1440x900.png`
- `docs/checkpoint-2-screenshots/company-1440x900.png`
- `docs/checkpoint-2-screenshots/marquee-1440x900.png`
- `docs/checkpoint-2-screenshots/metrics-1440x900.png`
- `docs/checkpoint-2-screenshots/services-front-1440x900.png`
- `docs/checkpoint-2-screenshots/services-flip-1440x900.png`
- `docs/checkpoint-2-screenshots/checkpoint-2-mobile-390x844.png`
- `docs/checkpoint-2-screenshots/services-mobile-390x844.png`
- `docs/checkpoint-2-screenshots/validation-results.json`
- `docs/checkpoint-2-screenshots/lighthouse-desktop.json`
- `docs/checkpoint-2-screenshots/lighthouse-mobile.json`

## Notas Reais

| Area | Nota | Motivo |
| --- | ---: | --- |
| Reveal interativo | 8.4 | Interacao narrativa entregue com mascara, drag, range e fallback. |
| Institucional | 8.3 | Composicao editorial distinta e sem grid SaaS. |
| Marquee | 8.2 | Conteudo correto, movimento moderado e reduced motion validado. |
| Metricas | 8.1 | Usa capacidades reais e tipografia editorial; pode ganhar mais coreografia futura. |
| Servicos flip | 8.4 | Seis cards com personalidade, flip, touch, teclado e CTA. |
| Desktop | 8.6 | Visual e performance passam com folga. |
| Mobile | 8.2 | Sem overflow e com correcoes de texto/CLS; reveal segue compacto. |
| Acessibilidade | 8.2 | Bons controles nativos e reduced motion; ainda sem auditoria manual completa de leitor de tela. |
| Performance | 8.8 | Lighthouse e metas CLS/TBT passaram. |
| Evidencias | 8.7 | Capturas obrigatorias e JSONs gerados. |

Nenhum item essencial ficou abaixo de 8. Checkpoint 2 esta aprovado tecnicamente e pronto para aprovacao visual.
