from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
source = ROOT / "public" / "assets" / "brand" / "favicon-64.png"
target = ROOT / "public" / "favicon.ico"

with Image.open(source) as image:
    image.save(target, format="ICO", sizes=[(16, 16), (24, 24), (32, 32), (48, 48), (64, 64)])

print(f"Generated {target}")
