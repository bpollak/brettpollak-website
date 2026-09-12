#!/usr/bin/env python3
"""Generate per-section OG social cards (1200x630) for brettcpollak.com.

One script, one design system: paper ground, ink type, site palette accents,
IBM Plex Sans/Mono + Newsreader (the site's actual font stack). Each content
section gets a card appropriate to ITS content — not a borrowed product
screenshot and not the generic personal card.

Re-run after a content refresh: python3 scripts/make-og-cards.py
Headlines for the AI Digest card are pulled LIVE from the newest edition in
lib/weeklyAiDigestData.ts (fall back to the workspace digest markdown if the
module lags), so the card never ships stale headlines.

Sections covered:
  ai-digest    -> index-row style card with the 3 newest headlines
  ucsd-ai-news -> campus-briefing card (tool updates, TritonAI, trainings)
  media        -> press-index card (format chips + count line)
  speaking     -> speaker card (topics + CTA)
  products     -> project-shelf card (three flagship app names)
  podcasts     -> podcast card (three podcast names)
  now          -> now-page card (working-on snapshot framing)
  home         -> site card with the current slogan + golden-hour portrait
  about        -> landscape about card with portrait crop
"""
import glob
import os
import re
import sys

from PIL import Image, ImageDraw, ImageFont, ImageFilter

RESAMPLE = Image.Resampling.LANCZOS if hasattr(Image, "Resampling") else Image.LANCZOS  # type: ignore[attr-defined]

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(REPO, "public")
FONTS = "/tmp/og-fonts"

W, H = 1200, 630
PAPER = "#fffef9"
INK = "#17201b"
GOLD = "#c97712"
BLUE = "#1f5a8a"
GREEN = "#366c5a"
CORAL = "#b8503f"
BODY = "#4a5350"
LINE = "#d9dfd3"
BASE = "#f7f9f5"


def font(kind, size, weight=None):
    if kind == "news":
        return ImageFont.truetype(f"{FONTS}/newsreader-{weight or 500}.ttf", size=size)
    if kind == "mono":
        return ImageFont.truetype(f"{FONTS}/plexmono-500.ttf", size=size)
    return ImageFont.truetype(f"{FONTS}/plexsans-{weight or 600}.ttf", size=size)


def canvas():
    img = Image.new("RGB", (W, H), PAPER)
    return img, ImageDraw.Draw(img)


def accent_strip(d, color=GOLD):
    d.rectangle([0, 0, W, 8], fill=color)


def kicker(d, text, color=GOLD, x=80, y=56):
    d.text((x, y), text, font=font("sans", 24, 700), fill=color)


def url_line(d, path, y=576, color=GOLD):
    d.text((80, y), f"brettcpollak.com{path}", font=font("mono", 22), fill=color)


def wrap(text, fnt, max_w, d):
    words = text.split()
    lines, cur = [], ""
    for w_ in words:
        trial = f"{cur} {w_}".strip()
        if d.textlength(trial, font=fnt) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w_
    if cur:
        lines.append(cur)
    return lines


def latest_digest_headlines(n=3):
    """Pull the newest edition's headlines. Check BOTH sources and use whichever
    edition is newer: the site's data module and the newest workspace digest
    markdown (the 6:35 AM cron writes the markdown before the module updates).
    Returns (iso, [headlines])."""
    best = (None, [])
    module = os.path.join(REPO, "lib", "weeklyAiDigestData.ts")
    try:
        data = open(module).read()
        days_m = re.search(r'"days":\s*\[', data)
        chunk = data[days_m.start(): days_m.start() + 60000] if days_m else ""
        entries = re.findall(
            r'\{\s*"isoDate":\s*"(\d{4}-\d{2}-\d{2})"[^]]*?"headlines":\s*\[(.*?)\]',
            chunk, re.S)
        if entries:
            newest = sorted(entries, key=lambda e: e[0], reverse=True)[0]
            hl = re.findall(r'"([^"]+)"', newest[1])
            if hl:
                best = (newest[0], hl[:n])
    except Exception:
        pass
    files = sorted(glob.glob(os.path.expanduser(
        "~/.hermes/workspace/docs/ai-news-digest-*.md")))
    if files:
        txt = open(files[-1]).read()
        hl = re.findall(r"• \*\*(.+?)\*\*", txt)
        iso = os.path.basename(files[-1]).replace("ai-news-digest-", "").replace(".md", "")
        if hl and (best[0] is None or iso > best[0]):
            best = (iso, hl[:n])
    return best


def shorten_headline(h, max_chars=58):
    h = h.strip()
    if len(h) <= max_chars:
        return h
    cut = h[: max_chars - 1].rstrip(" ,.;:-")
    # cut at a word boundary for a clean editorial ellipsis
    if " " in cut:
        cut = cut.rsplit(" ", 1)[0].rstrip(" ,.;:-")
    return cut + "…"


def card_ai_digest():
    img, d = canvas()
    accent_strip(d, GOLD)
    kicker(d, "BRETT POLLAK  ·  AI DIGEST")
    d.text((80, 104), "The daily AI briefing for", font=font("news", 58, 600), fill=INK)
    d.text((80, 176), "higher education technology.", font=font("news", 58, 600), fill=INK)

    d.text((80, 268), "Product launches, enterprise moves, and campus AI policy —",
           font=font("sans", 27, 400), fill=BODY)
    d.text((80, 306), "each with key takeaways and source links.",
           font=font("sans", 27, 400), fill=BODY)

    d.line([80, 372, W - 80, 372], fill=LINE, width=2)

    iso, heads = latest_digest_headlines(3)
    if not heads:
        heads = ["Fresh AI coverage every morning", "", ""]
    month_names = {"09": "SEP", "10": "OCT", "11": "NOV", "12": "DEC"}
    y = 396
    for i, h in enumerate(heads):
        if iso:
            m = month_names.get(iso[5:7], iso[5:7].upper())
            day = iso[8:10]
            d.text((80, y + 7), f"{m} {day}", font=font("mono", 22), fill=GOLD)
        d.text((212, y), shorten_headline(h), font=font("sans", 29, 600), fill=INK)
        y += 56

    url_line(d, "/ai-digest", y=552)
    img.save(f"{OUT}/ai-digest-og.png", optimize=True)
    print("ai-digest-og.png", "(edition", iso + ")" if iso else "(no edition found)", flush=True)


def card_ucsd_ai_news():
    img, d = canvas()
    accent_strip(d, BLUE)
    kicker(d, "BRETT POLLAK  ·  UC SAN DIEGO AI WEEKLY", color=BLUE)
    d.text((80, 104), "What's new with UC San Diego's", font=font("news", 54, 600), fill=INK)
    d.text((80, 172), "supported AI services.", font=font("news", 54, 600), fill=INK)

    d.text((80, 262), "Tool release notes, TritonAI updates, and upcoming",
           font=font("sans", 27, 400), fill=BODY)
    d.text((80, 300), "trainings — one email, every week.",
           font=font("sans", 27, 400), fill=BODY)

    # three section chips like the newsletter's sections
    chips = [("TOOL RELEASE NOTES", BLUE), ("TRITONAI UPDATES", GOLD), ("TRAININGS & WORKSHOPS", GREEN)]
    y = 348
    for label, color in chips:
        d.rounded_rectangle([80, y, 80 + d.textlength(label, font=font("mono", 21)) + 44, y + 50],
                            radius=25, fill=color)
        d.text((102, y + 13), label, font=font("mono", 21), fill="#fffef9")
        y += 62

    url_line(d, "/ucsd-ai-news", y=552, color=BLUE)
    img.save(f"{OUT}/ucsd-ai-news-og.png", optimize=True)
    print("ucsd-ai-news-og.png", flush=True)


def card_media():
    img, d = canvas()
    accent_strip(d, CORAL)
    kicker(d, "BRETT POLLAK  ·  MEDIA & APPEARANCES", color=CORAL)

    d.text((80, 104), "Coverage, interviews,", font=font("news", 58, 600), fill=INK)
    d.text((80, 176), "and conference talks.", font=font("news", 58, 600), fill=INK)

    d.text((80, 268), "An index of articles, sessions, whitepapers, and",
           font=font("sans", 27, 400), fill=BODY)
    d.text((80, 306), "external recognition, newest first.",
           font=font("sans", 27, 400), fill=BODY)

    # format chips row
    formats = [("ARTICLES", BLUE), ("INTERVIEWS", GOLD), ("TALKS", GREEN), ("AWARDS", CORAL)]
    x = 80
    for label, color in formats:
        tw = d.textlength(label, font=font("mono", 20))
        d.rounded_rectangle([x, 380, x + tw + 40, 430], radius=25, outline=color, width=3)
        d.text((x + 20, 391), label, font=font("mono", 20), fill=color)
        x += tw + 40 + 18

    url_line(d, "/media", y=552, color=CORAL)
    img.save(f"{OUT}/media-og.png", optimize=True)
    print("media-og.png", flush=True)


def card_speaking():
    img, d = canvas()
    accent_strip(d, GREEN)
    kicker(d, "BRETT POLLAK  ·  SPEAKING", color=GREEN)

    d.text((80, 104), "AI in higher education,", font=font("news", 58, 600), fill=INK)
    d.text((80, 176), "from the operator's seat.", font=font("news", 58, 600), fill=INK)

    d.text((80, 268), "Keynotes and conference sessions on agentic workflows,",
           font=font("sans", 27, 400), fill=BODY)
    d.text((80, 306), "AI governance, and what actually ships on campus.",
           font=font("sans", 27, 400), fill=BODY)

    # topic rows
    topics = ["Agent architecture that survives production",
              "Governance without killing adoption",
              "Real deployment stories, real numbers"]
    y = 386
    for t in topics:
        d.ellipse([80, y + 10, 92, y + 22], fill=GREEN)
        d.text((116, y), t, font=font("sans", 27, 600), fill=INK)
        y += 56

    url_line(d, "/speaking", y=552, color=GREEN)
    img.save(f"{OUT}/speaking-og.png", optimize=True)
    print("speaking-og.png", flush=True)


def card_products():
    img, d = canvas()
    accent_strip(d, GOLD)
    kicker(d, "BRETT POLLAK  ·  PROJECTS")

    d.text((80, 104), "Software I've built —", font=font("news", 58, 600), fill=INK)
    d.text((80, 176), "from campus services to family apps.", font=font("news", 44, 600), fill=INK)

    d.text((80, 258), "Case studies with real status, boundaries, and what",
           font=font("sans", 26, 400), fill=BODY)
    d.text((80, 294), "each product actually does — no marketing polish.",
           font=font("sans", 26, 400), fill=BODY)

    # flagship app rows
    apps = [("RESOLUTION COMPANION", "iOS · habit & resolution tracking", BLUE),
            ("HORSE RACING COMPANION", "iOS · race-day companion", GREEN),
            ("STEEL CITY GAMEDAY", "iOS · Steelers game-day crew app", GOLD)]
    y = 342
    for name, desc, color in apps:
        d.rounded_rectangle([80, y, 96, y + 40], radius=4, fill=color)
        d.text((124, y + 1), name, font=font("sans", 28, 700), fill=INK)
        d.text((124, y + 34), desc, font=font("mono", 19), fill=BODY)
        y += 66

    url_line(d, "/products", y=552)
    img.save(f"{OUT}/products-og.png", optimize=True)
    print("products-og.png", flush=True)


def card_podcasts():
    img, d = canvas()
    accent_strip(d, BLUE)
    kicker(d, "BRETT POLLAK  ·  PODCAST DISCOVERY", color=BLUE)

    d.text((80, 104), "The podcasts worth", font=font("news", 58, 600), fill=INK)
    d.text((80, 176), "your listening time.", font=font("news", 58, 600), fill=INK)

    d.text((80, 268), "A curated index of AI and technology shows,",
           font=font("sans", 27, 400), fill=BODY)
    d.text((80, 306), "with transcripts and takeaways.",
           font=font("sans", 27, 400), fill=BODY)

    # podcast list rows
    shows = [("Hard Fork", "NYT · the week in tech"),
             ("Latent Space", "AI engineering, weekly"),
             ("a16z Podcast", "ventures & builders")]
    y = 352
    for name, desc in shows:
        # native play-button: filled circle with a paper-colored triangle notch
        d.ellipse([80, y + 6, 112, y + 38], fill=BLUE)
        d.polygon([(94, y + 15), (94, y + 29), (105, y + 22)], fill=PAPER)
        d.text((132, y), name, font=font("sans", 28, 700), fill=INK)
        d.text((132, y + 34), desc, font=font("mono", 19), fill=BODY)
        y += 58

    url_line(d, "/podcasts", y=552, color=BLUE)
    img.save(f"{OUT}/podcasts-og.png", optimize=True)
    print("podcasts-og.png", flush=True)


def card_now():
    img, d = canvas()
    accent_strip(d, GREEN)
    kicker(d, "BRETT POLLAK  ·  NOW", color=GREEN)

    d.text((80, 104), "What I'm working", font=font("news", 58, 600), fill=INK)
    d.text((80, 176), "on right now.", font=font("news", 58, 600), fill=INK)

    d.text((80, 268), "Current projects, releases, and focus — a dated,",
           font=font("sans", 27, 400), fill=BODY)
    d.text((80, 306), "honest snapshot that updates itself.",
           font=font("sans", 27, 400), fill=BODY)

    # status rows like the now page's index
    rows = [("CAMPUS", "TritonAI · production AI platform", BLUE),
            ("APPS", "Resolution Companion · v5 in the App Store", GOLD),
            ("INFRA", "A three-agent memory ecosystem", GREEN)]
    y = 380
    for label, desc, color in rows:
        d.text((80, y + 4), label, font=font("mono", 20), fill=color)
        d.text((240, y), desc, font=font("sans", 26, 600), fill=INK)
        y += 56

    url_line(d, "/now", y=552, color=GREEN)
    img.save(f"{OUT}/now-og.png", optimize=True)
    print("now-og.png", flush=True)


def card_home():
    img, d = canvas()
    accent_strip(d, GOLD)

    # Right side: golden-hour portrait in a framed card, like the hero panel
    portrait_path = os.path.join(OUT, "brettpollak-portrait-golden-hour.webp")
    pr = None
    if os.path.exists(portrait_path):
        pr = Image.open(portrait_path).convert("RGB")
        # portrait is 849x1280; crop to a 4:5 window centered on the face (upper third)
        target_ratio = 4 / 5
        pw, ph = pr.size
        crop_h = int(pw / target_ratio)
        top = int(ph * 0.10)
        pr = pr.crop((0, top, pw, top + crop_h))
        # scale to card height
        card_h = H - 96
        pr = pr.resize((int(card_h * target_ratio), card_h), RESAMPLE)
        px = W - pr.size[0] - 80
        py = 48
        # shadow
        shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        sd = ImageDraw.Draw(shadow)
        sd.rectangle([px + 10, py + 12, px + pr.size[0] + 10, py + card_h + 12],
                     fill=(23, 32, 27, 60))
        shadow = shadow.filter(ImageFilter.GaussianBlur(14))
        img.paste(Image.alpha_composite(img.convert("RGBA"), shadow).convert("RGB"), (0, 0))
        d = ImageDraw.Draw(img)
        # white frame + photo
        frame = Image.new("RGB", (pr.size[0] + 18, card_h + 18), "#ffffff")
        img.paste(frame, (px - 9, py - 9))
        img.paste(pr, (px, py))
        d = ImageDraw.Draw(img)
    else:
        px = W

    kicker(d, "DAY JOB, SIDE PROJECTS")

    # Slogan in Newsreader, wrapped to the left column
    left_w = (px - 80) - 90 if pr else W - 160
    f_h1 = font("news", 52, 600)
    lines = wrap("Technology leadership at UC San Diego, and the apps I build outside it.",
                 f_h1, left_w, d)
    y = 120
    for ln in lines:
        d.text((80, y), ln, font=f_h1, fill=INK)
        y += 64

    # color palette squares — the site's four signal tones
    x = 80
    for color in (BLUE, GOLD, GREEN, CORAL):
        d.rounded_rectangle([x, y + 24, x + 34, y + 58], radius=6, fill=color)
        x += 46
    y += 92

    d.text((80, y), "TritonAI · agentic workflows · campus AI, shipped.", 
           font=font("sans", 24, 400), fill=BODY)

    d.text((80, 576), "brettcpollak.com", font=font("mono", 22), fill=GOLD)

    img.save(f"{OUT}/brett-pollak-og-card.png", optimize=True)
    print("brett-pollak-og-card.png (home)", flush=True)


def card_about():
    img, d = canvas()
    accent_strip(d, BLUE)
    kicker(d, "BRETT POLLAK  ·  ABOUT", color=BLUE)

    # portrait strip on the right
    portrait_path = os.path.join(OUT, "brett-pollak-about.jpg")
    if os.path.exists(portrait_path):
        pr = Image.open(portrait_path).convert("RGB")
        pw, ph = pr.size
        crop_h = int(pw / (H / (H - 0)))  # full-height strip
        strip_w = 380
        ratio = strip_w / pw
        pr = pr.resize((strip_w, int(ph * ratio)), RESAMPLE)
        crop_h = min(pr.size[1], H)
        pr = pr.crop((0, 0, strip_w, crop_h))
        img.paste(pr, (W - strip_w, 0))
        d = ImageDraw.Draw(img)

    d.text((80, 104), "Technology leadership,", font=font("news", 52, 600), fill=INK)
    d.text((80, 172), "in practice.", font=font("news", 52, 600), fill=INK)

    d.text((80, 262), "Executive director for workplace technology &",
           font=font("sans", 26, 400), fill=BODY)
    d.text((80, 298), "infrastructure at UC San Diego. Enterprise AI,",
           font=font("sans", 26, 400), fill=BODY)
    d.text((80, 334), "cloud & on-prem, data, service management.",
           font=font("sans", 26, 400), fill=BODY)

    rows = [("PORTFOLIO", "Hybrid infra · AI platforms · collaboration", BLUE),
            ("APPROACH", "Ship, measure, iterate - in production", GOLD)]
    y = 404
    for label, desc, color in rows:
        d.text((80, y + 4), label, font=font("mono", 20), fill=color)
        d.text((240, y), desc, font=font("sans", 25, 600), fill=INK)
        y += 54

    url_line(d, "/about", y=552, color=BLUE)
    img.save(f"{OUT}/about-og.png", optimize=True)
    print("about-og.png", flush=True)


def main():
    which = sys.argv[1] if len(sys.argv) > 1 else "all"
    cards = {
        "ai-digest": card_ai_digest,
        "ucsd-ai-news": card_ucsd_ai_news,
        "media": card_media,
        "speaking": card_speaking,
        "products": card_products,
        "podcasts": card_podcasts,
        "now": card_now,
        "home": card_home,
        "about": card_about,
    }
    if which == "all":
        for fn in cards.values():
            fn()
    else:
        cards[which]()


if __name__ == "__main__":
    main()
