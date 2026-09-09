#!/usr/bin/env python3
"""Generate the AI Digest OG card (1200x630) in brettcpollak.com's design language.

Design: paper (#fffef9) ground, ink (#17201b) type, gold accent strip on top,
rule-label small caps, three real headlines from the current week, mono date
column — mirrors the site's index-row pattern.
"""
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630
PAPER = "#fffef9"
INK = "#17201b"
GOLD = "#c97712"
BLUE = "#1f5a8a"
BODY = "#4a5350"
LINE = "#dfe3da"

img = Image.new("RGB", (W, H), PAPER)
d = ImageDraw.Draw(img)

# top accent strip (site's .accent-strip, gold tone)
d.rectangle([0, 0, W, 8], fill=GOLD)

SANS = {400: "/tmp/og-fonts/plexsans-400.ttf", 600: "/tmp/og-fonts/plexsans-600.ttf", 700: "/tmp/og-fonts/plexsans-700.ttf"}
sans = lambda s, w=600: ImageFont.truetype(SANS[w], size=s)
mono = ImageFont.truetype("/tmp/og-fonts/plexmono-500.ttf", size=22)

# rule label
d.text((80, 64), "BRETT POLLAK  ·  AI DIGEST", font=sans(24, 700), fill=GOLD)

# headline
d.text((80, 110), "The daily AI briefing for", font=sans(56), fill=INK)
d.text((80, 180), "higher education technology.", font=sans(56), fill=INK)

# subline
d.text((80, 272), "Product launches, enterprise moves, and campus AI policy -", font=sans(28, 400), fill=BODY)
d.text((80, 310), "each with key takeaways and source links.", font=sans(28, 400), fill=BODY)

# divider
d.line([80, 384, W - 80, 384], fill=LINE, width=2)

# three real headlines from this week, index-row style: mono date + headline
rows = [
    ("SEP 08", "Mistral valued at $24B as Samsung leads funding"),
    ("SEP 07", "Gemini 3.8 Flash and 3.8 Flash Cyber introduced"),
    ("SEP 06", "UChicago social sciences went analog. Why?"),
]
y = 412
for date, headline in rows:
    d.text((80, y + 6), date, font=mono, fill=GOLD)
    d.text((210, y), headline, font=sans(30, 600), fill=INK)
    y += 56

# bottom line — gold to match the date column (cohesive warm palette)
d.text((80, 590), "brettcpollak.com/ai-digest", font=mono, fill=GOLD)

img.save("/tmp/ai-digest-og.png", optimize=True)
print("saved", img.size)
