# Homepage Checkpoint Report

Status: Checkpoint 3 concluído; pronto para deploy de preview.

Branch: `feat/checkpoint-3-ecosystem`

Data: 2026-06-18

## Estado atual

A homepage pública reúne hero, reveal interativo, apresentação institucional, marquee de tecnologias, capacidades, serviços, Agent Core, marketplace, plataforma, diferenciais, Nova, CTA final e footer.

O conteúdo comercial foi auditado: previews e dados demonstrativos estão identificados, não há alegações de clientes e nenhum e-mail sem MX é apresentado como contato funcional.

## Validação final

- Lint: aprovado.
- Build: aprovado.
- Console, rede, imagens e hydration: sem falhas.
- Âncoras e CTAs internos: destinos válidos.
- Rotas legais e técnicas: HTTP 200.
- Viewports: 1920 × 1080, 1440 × 900, 430 × 932, 390 × 844 e 360 × 800 sem overflow horizontal.
- Lighthouse desktop: 100 / 100 / 100 / 100, CLS 0, TBT 0 ms.
- Lighthouse mobile: 89 / 100 / 100 / 100, CLS 0,018, TBT 110 ms.

Detalhes e limitações estão em `docs/CHECKPOINT_3_REPORT.md` e `docs/checkpoint-3-screenshots/validation-results.json`.

## Marca

As propostas A e B estão disponíveis apenas em `/dev/brand-lab`. A identidade pública atual permanece preservada até aprovação visual.

## Contato

`NEXT_PUBLIC_CONTACT_URL` é o ponto de configuração para um canal comercial real. Sem essa variável, o preview usa uma issue do GitHub. `contato@hypergalaxy.cloud` não é usado enquanto não houver MX.
