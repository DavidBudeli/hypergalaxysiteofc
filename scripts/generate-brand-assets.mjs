import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const brandDir = path.join(root, "public", "assets", "brand");
const publicDir = path.join(root, "public");

const colors = {
  cosmicBlack: "#050507",
  deepSpace: "#0B0B0F",
  graphite: "#1B1C22",
  warmWhite: "#F5F3EE",
  silver: "#B8BBC4",
  hyperPurple: "#7546E8",
  electricPurple: "#8B5CF6",
  electricBlue: "#4A8FFF",
  lavender: "#B9A7FF",
  coral: "#FF745E",
  teal: "#3BC7B1",
  success: "#A8E063",
};

const H_PATH = "M18 14H38V54H66V14H86V61H66V73H38V114H18ZM38 54V73H66V54Z";
const G_PATH = "M81 42C93 42 104 47 112 56L100 68C95 61 89 58 81 58C68 58 58 68 58 81C58 94 68 104 82 104C90 104 97 101 101 95H82V80H120V92C115 109 101 120 81 120C59 120 41 103 41 81C41 59 59 42 81 42Z";

function rect(x, y, width, height) {
  return `M${x} ${y}H${x + width}V${y + height}H${x}Z`;
}

function polygon(points) {
  return `M${points.map(([x, y]) => `${x} ${y}`).join("L")}Z`;
}

const glyphs = {
  H: () => [rect(0, 0, 8, 64), rect(34, 0, 8, 64), rect(8, 28, 26, 8)],
  Y: () => [
    polygon([[0, 0], [10, 0], [21, 25], [21, 38], [16, 38], [0, 12]]),
    polygon([[32, 0], [42, 0], [26, 38], [21, 38], [21, 25]]),
    rect(17, 32, 8, 32),
  ],
  P: () => [rect(0, 0, 8, 64), rect(8, 0, 26, 8), rect(8, 28, 26, 8), rect(34, 8, 8, 20)],
  E: () => [rect(0, 0, 8, 64), rect(8, 0, 34, 8), rect(8, 28, 28, 8), rect(8, 56, 34, 8)],
  R: () => [
    rect(0, 0, 8, 64),
    rect(8, 0, 26, 8),
    rect(8, 28, 26, 8),
    rect(34, 8, 8, 20),
    polygon([[22, 34], [32, 34], [45, 64], [35, 64]]),
  ],
  G: () => [rect(6, 0, 32, 8), rect(0, 8, 8, 48), rect(6, 56, 34, 8), rect(32, 34, 8, 30), rect(22, 28, 18, 8)],
  A: () => [
    polygon([[17, 0], [27, 0], [8, 64], [0, 64]]),
    polygon([[17, 0], [27, 0], [44, 64], [36, 64]]),
    rect(10, 38, 24, 8),
  ],
  L: () => [rect(0, 0, 8, 64), rect(8, 56, 34, 8)],
  X: () => [
    polygon([[0, 0], [10, 0], [42, 64], [32, 64]]),
    polygon([[32, 0], [42, 0], [10, 64], [0, 64]]),
  ],
};

const glyphWidths = { H: 42, Y: 42, P: 42, E: 42, R: 45, G: 40, A: 44, L: 42, X: 42 };

function shiftPathX(pathData, offset) {
  return pathData
    .replace(/([ML])(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g, (_, command, x, y) => `${command}${Number(x) + offset} ${y}`)
    .replace(/H(-?\d+(?:\.\d+)?)/g, (_, x) => `H${Number(x) + offset}`);
}

function wordmarkPath(text = "HYPER GALAXY") {
  let cursor = 0;
  const commands = [];

  for (const character of text) {
    if (character === " ") {
      cursor += 26;
      continue;
    }

    const parts = glyphs[character]();
    commands.push(...parts.map((part) => shiftPathX(part, cursor)));
    cursor += glyphWidths[character] + 9;
  }

  return { d: commands.join(""), width: cursor - 9 };
}

function svgFrame({ width, height, title, body }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="title"><title id="title">${title}</title>${body}</svg>\n`;
}

function symbolMarkup(hColor, gColor, transform = "") {
  const transformAttribute = transform ? ` transform="${transform}"` : "";
  return `<g${transformAttribute}><path fill="${hColor}" d="${H_PATH}"/><path fill="${gColor}" d="${G_PATH}"/></g>`;
}

function horizontalLogo({ background, monochrome }) {
  const { d, width } = wordmarkPath();
  const foreground = background === "dark" ? colors.warmWhite : colors.cosmicBlack;
  const symbolColor = monochrome ? foreground : colors.hyperPurple;
  const totalWidth = 196 + width + 20;

  return svgFrame({
    width: totalWidth,
    height: 144,
    title: "Hyper Galaxy",
    body: `${symbolMarkup(foreground, symbolColor, "translate(8 8)")}<path fill="${foreground}" opacity=".28" d="M157 26H159V118H157Z"/><path fill="${foreground}" d="${d}" transform="translate(190 40)"/>`,
  });
}

function stackedLogo(background) {
  const { d, width } = wordmarkPath();
  const foreground = background === "dark" ? colors.warmWhite : colors.cosmicBlack;
  const scale = 0.72;
  const scaledWidth = width * scale;
  const canvasWidth = Math.ceil(Math.max(360, scaledWidth + 48));
  const wordX = (canvasWidth - scaledWidth) / 2;

  return svgFrame({
    width: canvasWidth,
    height: 282,
    title: "Hyper Galaxy stacked logo",
    body: `${symbolMarkup(foreground, colors.hyperPurple, `translate(${(canvasWidth - 128) / 2} 10)`)}<path fill="${foreground}" d="${d}" transform="translate(${wordX} 184) scale(${scale})"/>`,
  });
}

function symbolSvg(hColor, gColor, title = "Hyper Galaxy HG symbol") {
  return svgFrame({ width: 128, height: 128, title, body: symbolMarkup(hColor, gColor) });
}

function wordmarkSvg(background) {
  const { d, width } = wordmarkPath();
  const foreground = background === "dark" ? colors.warmWhite : colors.cosmicBlack;
  return svgFrame({
    width: width + 24,
    height: 88,
    title: "Hyper Galaxy wordmark",
    body: `<path fill="${foreground}" d="${d}" transform="translate(12 12)"/>`,
  });
}

function sourceSvg() {
  const { d, width } = wordmarkPath();
  return svgFrame({
    width: 196 + width + 20,
    height: 144,
    title: "Hyper Galaxy editable logo source",
    body: `<g id="hg-symbol">${symbolMarkup(colors.warmWhite, colors.hyperPurple, "translate(8 8)")}</g><g id="wordmark"><path fill="${colors.warmWhite}" d="${d}" transform="translate(190 40)"/></g>`,
  });
}

function iconSvg(size, { circular = false } = {}) {
  const radius = circular ? size / 2 : Math.round(size * 0.18);
  const symbolScale = size / 170;
  const symbolOffset = (size - 128 * symbolScale) / 2;
  return svgFrame({
    width: size,
    height: size,
    title: "Hyper Galaxy app icon",
    body: `${circular ? `<circle cx="${size / 2}" cy="${size / 2}" r="${radius}" fill="${colors.cosmicBlack}"/>` : `<rect width="${size}" height="${size}" rx="${radius}" fill="${colors.cosmicBlack}"/>`}<path fill="${colors.electricPurple}" opacity=".12" d="M0 ${size * 0.72}L${size} ${size * 0.42}V${size}H0Z"/>${symbolMarkup(colors.warmWhite, colors.hyperPurple, `translate(${symbolOffset} ${symbolOffset}) scale(${symbolScale})`)}`,
  });
}

function ogSvg() {
  const { d } = wordmarkPath();
  return svgFrame({
    width: 1200,
    height: 630,
    title: "Hyper Galaxy Open Graph image",
    body: `<rect width="1200" height="630" fill="${colors.cosmicBlack}"/><path fill="${colors.hyperPurple}" opacity=".18" d="M0 472L1200 220V630H0Z"/><path fill="${colors.electricBlue}" opacity=".22" d="M0 520L1200 334V350L0 542Z"/>${symbolMarkup(colors.warmWhite, colors.hyperPurple, "translate(70 54) scale(1.05)")}<path fill="${colors.warmWhite}" d="${d}" transform="translate(244 96) scale(1.36)"/><path fill="${colors.silver}" d="M72 244H1128V246H72Z"/><text x="72" y="390" fill="${colors.warmWhite}" font-family="Arial,Helvetica,sans-serif" font-size="64" font-weight="700">INTELLIGENT SYSTEMS.</text><text x="72" y="466" fill="${colors.lavender}" font-family="Arial,Helvetica,sans-serif" font-size="64" font-weight="700">STRONGER OUTCOMES.</text><text x="76" y="564" fill="${colors.silver}" font-family="Arial,Helvetica,sans-serif" font-size="22" letter-spacing="5">SOFTWARE / AI / AUTOMATION / CLOUD</text>`,
  });
}

await mkdir(brandDir, { recursive: true });

const assets = {
  "logo-horizontal-dark.svg": horizontalLogo({ background: "dark", monochrome: false }),
  "logo-horizontal-light.svg": horizontalLogo({ background: "light", monochrome: false }),
  "logo-stacked-dark.svg": stackedLogo("dark"),
  "logo-stacked-light.svg": stackedLogo("light"),
  "logo-symbol-color.svg": symbolSvg(colors.cosmicBlack, colors.hyperPurple),
  "logo-symbol-white.svg": symbolSvg(colors.warmWhite, colors.warmWhite, "Hyper Galaxy white HG symbol"),
  "logo-symbol-black.svg": symbolSvg(colors.cosmicBlack, colors.cosmicBlack, "Hyper Galaxy black HG symbol"),
  "logo-wordmark-dark.svg": wordmarkSvg("dark"),
  "logo-wordmark-light.svg": wordmarkSvg("light"),
  "logo-monochrome-white.svg": horizontalLogo({ background: "dark", monochrome: true }),
  "logo-monochrome-black.svg": horizontalLogo({ background: "light", monochrome: true }),
  "logo-source.svg": sourceSvg(),
};

for (const [filename, contents] of Object.entries(assets)) {
  await writeFile(path.join(brandDir, filename), contents, "utf8");
}

const faviconSvg = svgFrame({
  width: 64,
  height: 64,
  title: "Hyper Galaxy favicon",
  body: `<rect width="64" height="64" rx="13" fill="${colors.cosmicBlack}"/>${symbolMarkup(colors.warmWhite, colors.hyperPurple, "translate(5 5) scale(.42)")}`,
});
await writeFile(path.join(publicDir, "favicon.svg"), faviconSvg, "utf8");

const rasterTargets = [
  { file: path.join(brandDir, "app-icon-512.png"), svg: iconSvg(512), width: 512 },
  { file: path.join(brandDir, "app-icon-1024.png"), svg: iconSvg(1024), width: 1024 },
  { file: path.join(brandDir, "social-avatar.png"), svg: iconSvg(1024, { circular: true }), width: 1024 },
  { file: path.join(brandDir, "og-brand.png"), svg: ogSvg(), width: 1200 },
  { file: path.join(publicDir, "apple-touch-icon.png"), svg: iconSvg(180), width: 180 },
  { file: path.join(brandDir, "favicon-64.png"), svg: faviconSvg, width: 64 },
];

for (const target of rasterTargets) {
  await sharp(Buffer.from(target.svg)).resize(target.width, target.width === 1200 ? 630 : target.width).png().toFile(target.file);
}

console.log(`Generated ${Object.keys(assets).length} SVGs and ${rasterTargets.length} PNG assets.`);
