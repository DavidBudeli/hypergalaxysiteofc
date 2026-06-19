# Motion Audit

Status: Checkpoint 3 concluído.

Data: 2026-06-18

Branch: `feat/checkpoint-3-ecosystem`

## Resultado

- Entradas de conteúdo não reduzem mais o contraste do texto.
- Reservas imprecisas de `content-visibility`/`contain-intrinsic-size` foram removidas.
- Animações de métricas e Agent Core preservam contraste em todos os estados.
- Flip cards mantêm transição curta, faces corretamente ocultas e tabulação coerente.
- Marketplace suporta drag, controles explícitos e setas do teclado.
- Menu mobile tem transição modal, foco inicial e Escape.
- Nova mantém movimento decorativo somente quando permitido.

## Movimento reduzido

Com `prefers-reduced-motion: reduce`:

- preloader visual não é renderizado;
- cursor customizado não é ativado;
- Lenis não é iniciado;
- marquee usa duração de 1 ms e uma iteração;
- movimento automático da Nova é removido;
- Framer Motion recebe `reducedMotion="user"` globalmente;
- transições CSS contínuas são reduzidas.

## Performance final

| Alvo | Performance | CLS | TBT |
| --- | ---: | ---: | ---: |
| Desktop | 100 | 0 | 0 ms |
| Mobile | 89 | 0,018 | 110 ms |

Evidência completa: `docs/checkpoint-3-screenshots/validation-results.json`.
