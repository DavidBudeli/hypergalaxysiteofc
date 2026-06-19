# Correção de paridade visual — Hyper Galaxy

Data: 2026-06-18

Branch: `feat/checkpoint-3-ecosystem`

Referência de arquitetura de experiência: Up Digital. Nenhum texto, imagem, projeto ou asset da referência será reutilizado.

## Diagnóstico antes da correção

| Seção | Escala e altura | Densidade e vazio | Tipografia | Interação e motion | Entrada e saída | Mobile | Diferença para a referência | Correção necessária |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Impacto adequado; sticky de 172vh | Boa relação texto/objeto | Editorial forte | Planetas, cursor e transição radial | Entrada cinematográfica; saída conecta ao reveal | Boa hierarquia, swipe presente | Próximo da referência | Preservar; reduzir sensação de página parada após o hero |
| Reveal | 118vh com sobreposição | Denso, sem vazio morto | Headline editorial | Máscara, drag, range e botões | Entra durante a saída do hero | Painel compacto, funcional | Mecânica própria equivalente | Preservar e garantir transição rápida para institucional |
| Institucional | Altura moderada | Composição equilibrada | Texto grande + objeto | Reveal de texto e Nova orbital | Entrada escalonada | Boa leitura | Próximo da alternância editorial | Reduzir padding vertical e fortalecer contraste de composição |
| Marquee | Curta | Conteúdo contínuo | Mono editorial | Movimento contínuo | Funciona como ponte | Adequado | Próximo da referência | Preservar; remover linguagem de planejamento da copy |
| Métricas | Alta, porém formada por quatro linhas soltas | Muito vazio entre números | Escala excessiva; API/CLOUD vulneráveis a corte | Scale discreto, pouca narrativa | Linhas entram isoladas, sem conexão | Números dominam demais | Desvio crítico | Reconstruir como sequência editorial sticky de 160vh, com composição ativa, escala limitada, alternância, cor e progresso |
| Serviços | Altura compatível com seis itens | Boa densidade | Headline editorial | Flip, hover, tilt e teclado | Entrada por máscara | Cards empilhados, legíveis | Mecânica própria equivalente | Preservar; reduzir linguagem explicativa e manter ação comercial |
| Agent Core | 1,2–1,4 viewport | Boa densidade, objeto central | Forte | Abertura e categorias conectadas | Entrada clara | Funcional | Próximo da referência | Intensificar resposta de abertura e encurtar copy |
| Marketplace | Cerca de 1,5 viewport | Cards densos | Hierarquia clara | Drag, setas e progresso | Próximo item antecipa continuidade | Arraste horizontal | Próximo da referência | Trocar “demonstração” por “conceito” e reduzir texto técnico |
| Plataforma | 430vh desktop | Sticky longo; risco de scroll morto | Boa, mas repetitiva | Storytelling por scroll e seleção | Sete módulos prolongam a permanência | Stack longo de sete cards | Mais longa que a referência | Reduzir para 320vh desktop e compactar cards/mobile; remover “preview” da copy pública |
| Diferenciais | 5 × 68vh | Ritmo repetitivo, mas visualmente forte | Escala marcante | Troca de cor, clip e alinhamento | Bandas encadeadas | Boa leitura | Próximo da alternância de composição | Reduzir bandas para 58–62vh e preservar mudança de fundo |
| Nova | Cerca de 1,5 viewport | Boa presença de personagem | Headline menor que as seções anteriores | Flutuação e conversa | Entrada clara | Personagem alonga a seção | Próximo da referência | Tornar copy comercial e identificar respostas como exemplo ilustrativo |
| CTA/Footer | Encerramento alto | Boa densidade | Headline forte | Planeta e marquee | Final claro | Funcional | Próximo da referência | Remover CTA “preview” e substituir por caminho comercial |
| Header | 58–64px | Centro congestionado por seis links + “Preview” | Legível, mas provisório | Sticky simples | Entrada correta | Menu modal acessível | Mais provisório que a referência | Remover “Preview”, ajustar gaps, CTA e hierarquia de idioma; aguardar aprovação da nova marca |

## Critérios de correção

- Nenhuma palavra cortada em 1920×1080, 1440×900, 1366×768, 430×932 e 390×844.
- `document.documentElement.scrollWidth === window.innerWidth` em todos os viewports.
- Evento visual ou interativo a cada 0,5–1,5 viewport.
- Motion por transform, clip-path, scale, drag, flip, mudança de fundo e progresso; nunca somente opacity.
- Copy pública comercial, curta e sem nomes internos de desenvolvimento.
- Brand Lab com opções A, B e C; nenhuma aplicada ao header sem aprovação visual.
