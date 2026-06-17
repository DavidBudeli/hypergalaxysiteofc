from __future__ import annotations

import math
import random
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
PLANET_DIR = ROOT / "public" / "assets" / "planets"
STAR_DIR = ROOT / "public" / "assets" / "stars"
BRAND_DIR = ROOT / "public" / "assets" / "brand"

SIZE = 1024
MOBILE = 640
THUMB = 256


PLANETS = [
    {
        "slug": "nova",
        "title": "Nova",
        "kind": "energy intelligence planet",
        "colors": ((236, 72, 153), (109, 40, 217), (196, 181, 253)),
        "seed": 101,
        "feature": "energy",
    },
    {
        "slug": "hyper-agents",
        "title": "Hyper Agents",
        "kind": "network activity planet",
        "colors": ((37, 99, 235), (21, 41, 118), (147, 197, 253)),
        "seed": 202,
        "feature": "network",
    },
    {
        "slug": "hyper-cloud",
        "title": "Hyper Cloud",
        "kind": "volumetric cloud planet",
        "colors": ((20, 184, 166), (12, 88, 106), (147, 197, 253)),
        "seed": 303,
        "feature": "clouds",
    },
    {
        "slug": "hyper-flow",
        "title": "Hyper Flow",
        "kind": "ringed flow planet",
        "colors": ((249, 115, 22), (126, 45, 20), (244, 184, 96)),
        "seed": 404,
        "feature": "rings",
    },
    {
        "slug": "hyper-dev",
        "title": "Hyper Dev",
        "kind": "engineered rocky planet",
        "colors": ((196, 181, 253), (236, 72, 153), (109, 40, 217)),
        "seed": 505,
        "feature": "craters",
    },
    {
        "slug": "hyper-support",
        "title": "Hyper Support",
        "kind": "deep stable planet with moon",
        "colors": ((37, 99, 235), (9, 10, 16), (147, 197, 253)),
        "seed": 606,
        "feature": "moon",
    },
    {
        "slug": "hyper-connect",
        "title": "Hyper Connect",
        "kind": "connected teal planet",
        "colors": ((20, 184, 166), (23, 24, 30), (163, 230, 53)),
        "seed": 707,
        "feature": "orbit",
    },
]


def mix(a: tuple[int, int, int], b: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    t = max(0.0, min(1.0, t))
    return tuple(round(a[i] * (1 - t) + b[i] * t) for i in range(3))


def add_sphere(plan: dict) -> Image.Image:
    random.seed(plan["seed"])
    base, shadow, accent = plan["colors"]
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    pix = img.load()
    cx = cy = SIZE // 2
    radius = 388
    light = (-0.62, -0.46, 0.64)

    for y in range(cy - radius - 2, cy + radius + 3):
        for x in range(cx - radius - 2, cx + radius + 3):
            nx = (x - cx) / radius
            ny = (y - cy) / radius
            rr = nx * nx + ny * ny
            if rr > 1:
                continue
            z = math.sqrt(max(0.0, 1 - rr))
            lambert = max(0.0, nx * light[0] + ny * light[1] + z * light[2])
            terminator = max(0.0, min(1.0, (lambert + 0.08) / 1.08))
            bands = math.sin((ny * 8.0 + math.sin(nx * 5.0)) * math.pi)
            currents = math.sin((nx * 7.0 + ny * 4.0) * math.pi + plan["seed"])
            grain = random.Random((x * 73856093) ^ (y * 19349663) ^ plan["seed"]).random()
            n = (bands * 0.25 + currents * 0.22 + (grain - 0.5) * 0.35 + 0.5)

            if plan["feature"] == "clouds":
                n = max(n, math.sin((nx * 13.0 + ny * 9.0) * math.pi) * 0.35 + 0.58)
            if plan["feature"] == "network":
                grid = min(abs(math.sin(nx * 26)), abs(math.sin(ny * 22)))
                n += 0.18 if grid < 0.06 else 0
            if plan["feature"] == "craters":
                n -= 0.12 if math.sin((nx * 16 + ny * 12) * math.pi) > 0.85 else 0

            color = mix(shadow, base, n)
            color = mix(color, accent, lambert * 0.28)
            shade = 0.2 + terminator * 0.92
            rim = max(0.0, (math.sqrt(rr) - 0.72) / 0.28)
            rgb = tuple(max(0, min(255, round(c * shade + accent[i] * rim * 0.08))) for i, c in enumerate(color))
            alpha = 255
            pix[x, y] = (*rgb, alpha)

    surface = img.filter(ImageFilter.GaussianBlur(0.45))
    img.alpha_composite(surface)

    draw = ImageDraw.Draw(img, "RGBA")
    # Hemispheric shadow and terminator.
    shadow_layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow_layer, "RGBA")
    sd.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=(0, 0, 0, 0))
    sd.ellipse((cx - radius * 0.16, cy - radius * 0.96, cx + radius * 1.18, cy + radius * 1.08), fill=(0, 0, 0, 88))
    shadow_layer = shadow_layer.filter(ImageFilter.GaussianBlur(28))
    img.alpha_composite(shadow_layer)

    # Highlight.
    highlight = Image.new("RGBA", img.size, (0, 0, 0, 0))
    hd = ImageDraw.Draw(highlight, "RGBA")
    hd.ellipse((cx - 230, cy - 285, cx - 84, cy - 146), fill=(255, 255, 255, 78))
    hd.ellipse((cx - 180, cy - 245, cx - 132, cy - 201), fill=(255, 255, 255, 98))
    highlight = highlight.filter(ImageFilter.GaussianBlur(11))
    img.alpha_composite(highlight)

    # Atmosphere.
    atmosphere = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ad = ImageDraw.Draw(atmosphere, "RGBA")
    for i in range(14):
        inset = i * 4
        ad.ellipse(
            (cx - radius - inset, cy - radius - inset, cx + radius + inset, cy + radius + inset),
            outline=(*accent, max(8, 52 - i * 4)),
            width=3,
        )
    atmosphere = atmosphere.filter(ImageFilter.GaussianBlur(5))
    img.alpha_composite(atmosphere)

    add_feature(img, plan, radius)
    return img


def add_feature(img: Image.Image, plan: dict, radius: int) -> None:
    random.seed(plan["seed"] + 77)
    cx = cy = SIZE // 2
    base, shadow, accent = plan["colors"]
    draw = ImageDraw.Draw(img, "RGBA")
    feature = plan["feature"]

    if feature == "energy":
        for _ in range(34):
            angle = random.random() * math.tau
            dist = random.uniform(0.12, 0.78) * radius
            x = cx + math.cos(angle) * dist
            y = cy + math.sin(angle) * dist
            size = random.uniform(2, 8)
            draw.ellipse((x - size, y - size, x + size, y + size), fill=(*accent, random.randint(120, 230)))
        for i in range(5):
            y = cy - 170 + i * 82
            draw.arc((cx - 310, y - 38, cx + 310, y + 86), start=186, end=352, fill=(*accent, 80), width=4)

    if feature == "network":
        nodes = []
        for _ in range(22):
            angle = random.random() * math.tau
            dist = random.uniform(0.15, 0.78) * radius
            nodes.append((cx + math.cos(angle) * dist, cy + math.sin(angle) * dist))
        for a, b in zip(nodes, nodes[1:]):
            draw.line((a[0], a[1], b[0], b[1]), fill=(*accent, 78), width=2)
        for x, y in nodes:
            draw.ellipse((x - 5, y - 5, x + 5, y + 5), fill=(*accent, 180))

    if feature == "clouds":
        cloud = Image.new("RGBA", img.size, (0, 0, 0, 0))
        cd = ImageDraw.Draw(cloud, "RGBA")
        for _ in range(60):
            x = random.randint(cx - radius, cx + radius)
            y = random.randint(cy - radius, cy + radius)
            if (x - cx) ** 2 + (y - cy) ** 2 > radius * radius:
                continue
            w = random.randint(80, 210)
            h = random.randint(32, 92)
            cd.ellipse((x - w // 2, y - h // 2, x + w // 2, y + h // 2), fill=(230, 255, 255, random.randint(20, 56)))
        cloud = cloud.filter(ImageFilter.GaussianBlur(12))
        img.alpha_composite(cloud)

    if feature == "rings":
        back = Image.new("RGBA", img.size, (0, 0, 0, 0))
        bd = ImageDraw.Draw(back, "RGBA")
        ring_box = (cx - 500, cy - 165, cx + 500, cy + 165)
        for width, alpha in [(18, 50), (10, 95), (4, 130)]:
            bd.ellipse(ring_box, outline=(*accent, alpha), width=width)
        back = back.rotate(-12, resample=Image.Resampling.BICUBIC, center=(cx, cy))
        img.alpha_composite(back)
        storm = Image.new("RGBA", img.size, (0, 0, 0, 0))
        sd = ImageDraw.Draw(storm, "RGBA")
        sd.ellipse((cx + 95, cy + 70, cx + 208, cy + 136), fill=(75, 20, 16, 94))
        sd.ellipse((cx + 120, cy + 84, cx + 174, cy + 118), fill=(*accent, 72))
        storm = storm.filter(ImageFilter.GaussianBlur(4))
        img.alpha_composite(storm)

    if feature == "craters":
        for _ in range(22):
            angle = random.random() * math.tau
            dist = random.uniform(0.1, 0.76) * radius
            x = cx + math.cos(angle) * dist
            y = cy + math.sin(angle) * dist
            r = random.randint(12, 34)
            draw.ellipse((x - r, y - r, x + r, y + r), outline=(20, 8, 28, 90), width=4)
            draw.arc((x - r, y - r, x + r, y + r), 210, 340, fill=(*accent, 68), width=3)
        for _ in range(9):
            pts = []
            x = random.randint(cx - 260, cx + 220)
            y = random.randint(cy - 250, cy + 250)
            for i in range(5):
                pts.append((x + random.randint(-70, 70), y + random.randint(-45, 45)))
            draw.line(pts, fill=(*accent, 42), width=2, joint="curve")

    if feature == "moon":
        mx, my, mr = cx + 276, cy - 246, 56
        draw.ellipse((mx - mr, my - mr, mx + mr, my + mr), fill=(126, 165, 214, 230))
        draw.ellipse((mx - mr * 0.05, my - mr * 0.95, mx + mr * 1.1, my + mr * 1.05), fill=(8, 14, 35, 78))
        for _ in range(7):
            cr = random.randint(4, 10)
            x = mx + random.randint(-28, 22)
            y = my + random.randint(-26, 28)
            draw.ellipse((x - cr, y - cr, x + cr, y + cr), outline=(20, 30, 60, 70), width=2)
        draw.arc((cx - 410, cy - 250, cx + 560, cy + 330), 188, 348, fill=(*accent, 64), width=3)

    if feature == "orbit":
        draw.arc((cx - 450, cy - 300, cx + 450, cy + 300), 18, 242, fill=(*accent, 86), width=3)
        for _ in range(28):
            angle = random.random() * math.tau
            dist = random.uniform(0.2, 0.78) * radius
            x = cx + math.cos(angle) * dist
            y = cy + math.sin(angle) * dist
            draw.ellipse((x - 3, y - 3, x + 3, y + 3), fill=(*accent, 150))
        sx, sy = cx + 342, cy - 74
        draw.rounded_rectangle((sx - 22, sy - 12, sx + 22, sy + 12), radius=7, fill=(*accent, 210))
        draw.line((sx - 46, sy, sx + 46, sy), fill=(*accent, 130), width=2)


def save_versions(plan: dict) -> None:
    master = add_sphere(plan)
    for suffix, size in [("", SIZE), ("-mobile", MOBILE), ("-thumb", THUMB)]:
        image = master if size == SIZE else master.resize((size, size), Image.Resampling.LANCZOS)
        out = PLANET_DIR / f"{plan['slug']}{suffix}.webp"
        image.save(out, "WEBP", quality=92, method=6, lossless=False)


def write_brand() -> None:
    svg = """<svg width="220" height="64" viewBox="0 0 220 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hyper Galaxy">
  <path d="M24 9C32.8366 9 40 16.1634 40 25C40 33.8366 32.8366 41 24 41C15.1634 41 8 33.8366 8 25C8 16.1634 15.1634 9 24 9Z" stroke="#8B5CF6" stroke-width="3"/>
  <path d="M7 34C24 48 46 50 58 38" stroke="#93C5FD" stroke-width="3" stroke-linecap="round"/>
  <path d="M19 25H30M24.5 17V33" stroke="#F6F4EF" stroke-width="3" stroke-linecap="round"/>
  <text x="74" y="28" fill="#F6F4EF" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" letter-spacing="2">HYPER</text>
  <text x="74" y="50" fill="#B9BBC5" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="800" letter-spacing="2">GALAXY</text>
</svg>
"""
    (BRAND_DIR / "hyper-galaxy-wordmark.svg").write_text(svg, encoding="utf-8")


def write_stars() -> None:
    random.seed(808)
    points = []
    for _ in range(130):
        x = random.random() * 1600
        y = random.random() * 1000
        r = random.choice([0.7, 0.9, 1.1, 1.4])
        opacity = random.uniform(0.18, 0.68)
        points.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="#F6F4EF" opacity="{opacity:.2f}"/>')
    svg = f"""<svg width="1600" height="1000" viewBox="0 0 1600 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1600" height="1000" fill="none"/>
  {' '.join(points)}
</svg>
"""
    (STAR_DIR / "hero-stars.svg").write_text(svg, encoding="utf-8")


def main() -> None:
    PLANET_DIR.mkdir(parents=True, exist_ok=True)
    STAR_DIR.mkdir(parents=True, exist_ok=True)
    BRAND_DIR.mkdir(parents=True, exist_ok=True)
    for plan in PLANETS:
        save_versions(plan)
    write_brand()
    write_stars()
    print("Generated planet, brand, and star assets.")


if __name__ == "__main__":
    main()
