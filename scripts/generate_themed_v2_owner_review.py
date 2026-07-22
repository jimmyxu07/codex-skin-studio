#!/usr/bin/env python3
"""Themed first-3 v2 Owner Review generation: Idol Stage / Anime Hero / Football Arena.

Upgrades design-xiu-themed-v1 (pure CSS abstract silhouettes) to Stitch-generated
illustrative art per docs/PRD-codexskin-official-v1-2026-07-22.md P0.6.

Per slug:
  - marketplace-preview.jpg  (1376x768, Codex-like workspace window + right emotional art zone)
  - live-background.jpg      (2560x1440 fetched, UI-free atmospheric art w/ right hero zone)
Prompts are IP-safe originals: no real celebrity/character/team/flag/crest/FIFA marks.

Reads proxy from env (ALL_PROXY / HTTPS_PROXY). Key from STITCH_API_KEY env or
~/.hermes/credentials/stitch_api_key.txt.
"""
import json
import os
import pathlib
import ssl
import sys
import time
import urllib.error
import urllib.request

ROOT = pathlib.Path("/Users/leyantech/Projects/codex-personalization-kits")
OUT = ROOT / "design-xiu-themed-v2"
OUT.mkdir(parents=True, exist_ok=True)
KEY = (os.environ.get("STITCH_API_KEY", "").strip()
       or (pathlib.Path.home() / ".hermes/credentials/stitch_api_key.txt").read_text().strip())

PROXY = (os.environ.get("HTTPS_PROXY") or os.environ.get("ALL_PROXY")
         or os.environ.get("https_proxy") or "")
MCP_URL = "https://stitch.googleapis.com/mcp"
PROJECTS_URL = "https://stitch.googleapis.com/v1/projects"

if PROXY:
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({"https": PROXY, "http": PROXY}))
    urllib.request.install_opener(opener)
print("proxy:", "env" if PROXY else "(direct)", flush=True)

WORKSPACE_RULES = (
    "CRITICAL COMPOSITION: a complete desktop-app-style workspace window occupies the "
    "left 55-62 percent of the composition, floating over the artwork with a soft "
    "shadow. The window MUST include ALL of: a rounded title bar with three macOS-style "
    "window dots at top-left, a left navigation sidebar with 5-6 menu items and one "
    "highlighted active item, a central main area with exactly FOUR task cards in a 2x2 "
    "grid, a right AI chat panel column with abstract chat bubbles, and a bottom prompt "
    "composer bar with an input area and a round send button. All UI text is abstract "
    "unreadable strokes/bars only: NO readable words, NO logos, NO real brand marks "
    "anywhere in the UI. The right 38-45 percent of the composition is a full-bleed "
    "emotional art zone described below, bleeding slightly behind the window edge. "
    "Horizontal 16:9 only. Premium desktop skin marketplace product preview, strong "
    "thumbnail contrast, sharp rendering, high detail illustration quality — the art "
    "zone MUST be a real painted scene, NOT flat geometric silhouettes."
)

NEGATIVE_COMMON = (
    "Absolutely NO real celebrity or real person likeness, NO known anime/game/movie "
    "character, NO franchise costume or weapon, NO national flag, NO club or national "
    "team crest, NO FIFA or World Cup marks, NO real player likeness, NO sponsor logos, "
    "NO readable text or typography in the artwork, NO watermark, NO competitor "
    "screenshots, NO photorealistic human faces."
)

THEMES = {
    "idol-stage-skin": {
        "name": "Idol Stage Skin",
        "category": "idol-stage",
        "accent": "#E83E8C",
        "palette": {
            "canvas": "#FFF5FB", "panelSoft": "#F8E8F3", "panelWhite": "#FFFFFF",
            "textPrimary": "#251326", "mutedText": "#735C72",
            "accent": "#E83E8C", "accentAlt": "#7C3AED", "glow": "#FFD2EA",
            "border": "#E8CFE0", "heroInk": "#3A1736",
        },
        "art_zone": (
            "Art zone: an ORIGINAL fictional cyber idol performer on a round glowing "
            "concert stage platform — a stylized anime-illustration girl with a short "
            "asymmetric bob haircut and a small star hairpin, wearing an original "
            "white-and-pink futuristic stage jacket with holographic trim, singing into "
            "a slim microphone, one arm raised. Dramatic pink and violet concert "
            "spotlight beams cut through soft haze above her; below the stage, a sea of "
            "out-of-focus pink-and-violet glow sticks as bokeh light dots; floating "
            "holographic fan-card shapes and confetti light particles around her. The "
            "workspace window shell uses soft pink-tinted frosted panels, magenta "
            "accent (#E83E8C) active states and violet (#7C3AED) highlights. Mood: "
            "premium concert-stage energy, fan-light warmth, collectible backstage-pass "
            "feel. The idol is a fully original character design, not any real or "
            "existing virtual singer."
        ),
        "background": (
            "Wide 16:9 cinematic anime-style illustration of an original fictional "
            "cyber idol concert stage for a desktop skin live wallpaper. An original "
            "stylized idol girl (short asymmetric bob, star hairpin, white-pink "
            "futuristic stage jacket with holographic trim) stands on a round glowing "
            "stage platform at the RIGHT third of the frame, singing into a slim "
            "microphone with one arm raised; dramatic pink and violet spotlight beams "
            "cut through haze; a sea of blurred glow-stick bokeh fills the lower "
            "right; floating holographic fan cards and confetti light particles. The "
            "LEFT two-thirds of the frame is much calmer: deep violet-pink stage haze "
            "with soft radial glow and gentle light rays, low detail, suitable for a "
            "desktop UI sidebar overlay. Rich atmospheric depth, premium anime "
            "illustration quality, high detail on the character, calm negative space "
            "on the left. NO UI elements, NO text, NO logos. "
        ),
    },
    "anime-hero-desk": {
        "name": "Anime Hero Desk",
        "category": "anime-hero",
        "accent": "#0EA5E9",
        "palette": {
            "canvas": "#F4FBFF", "panelSoft": "#E3F1FA", "panelWhite": "#FFFFFF",
            "textPrimary": "#102033", "mutedText": "#4D657C",
            "accent": "#0EA5E9", "accentAlt": "#F97316", "glow": "#BDEBFF",
            "border": "#C9DFEC", "heroInk": "#102A4A",
        },
        "art_zone": (
            "Art zone: an ORIGINAL anime-style heroic coder at a training-room desk — "
            "a stylized anime-illustration teenage protagonist with messy dark-blue "
            "hair and a confident determined expression, wearing an original "
            "white-and-sky-blue tech jacket with orange trim, sitting at a sleek desk "
            "with a glowing laptop, one hand raised toward floating holographic "
            "training cards and task panels around them. Through a large window behind "
            "them, a dawn cyber-city skyline glows in soft blue and warm orange "
            "morning light. The workspace window shell uses ice-blue frosted panels, "
            "sky-blue accent (#0EA5E9) active states and warm orange (#F97316) "
            "highlights. Mood: morning training-room confidence, shonen-protagonist "
            "energy, school-desk-meets-cyber-city. The character is a fully original "
            "design with no known costume, pose, or franchise elements."
        ),
        "background": (
            "Wide 16:9 cinematic anime-style illustration of an original hero coder "
            "training room for a desktop skin live wallpaper. At the RIGHT third of "
            "the frame: an original anime teenage protagonist (messy dark-blue hair, "
            "white-and-sky-blue tech jacket with orange trim) sits at a sleek desk "
            "with a glowing laptop, reaching toward floating holographic training "
            "cards; behind them a large window reveals a dawn cyber-city skyline in "
            "soft blue and warm orange. The LEFT two-thirds is much calmer: a quiet "
            "room interior gradient of morning light, pale blue wall tones with soft "
            "volumetric sun rays and low detail, suitable for a desktop UI sidebar "
            "overlay. Premium anime background-art quality (makoto-shinkai-like light "
            "but fully original), high detail on the right, calm negative space on "
            "the left. NO UI elements, NO text, NO logos. "
        ),
    },
    "football-nation-arena": {
        "name": "Football Nation Arena",
        "category": "sports-arena",
        "accent": "#16A34A",
        "palette": {
            "canvas": "#F6FFF8", "panelSoft": "#E4F4E9", "panelWhite": "#FFFFFF",
            "textPrimary": "#102418", "mutedText": "#506B58",
            "accent": "#16A34A", "accentAlt": "#F59E0B", "glow": "#D6F8DE",
            "border": "#C8E4CF", "heroInk": "#073D21",
        },
        "art_zone": (
            "Art zone: a generic night football stadium during a tournament match — "
            "towering floodlight arrays blasting white-green light through light "
            "haze, a glowing emerald pitch with crisp white line geometry in the "
            "lower right, a distant UNIDENTIFIABLE player in mid-kick motion seen "
            "from far behind (no face, no number, no sponsor), a roaring crowd "
            "rendered purely as bokeh light dots, abstract flowing jersey-stripe "
            "ribbons in green-white-amber sweeping across the sky, and a softly "
            "glowing abstract scoreboard block with no readable text. The workspace "
            "window shell uses pale-mint frosted panels, pitch-green accent "
            "(#16A34A) active states and amber (#F59E0B) highlights. Mood: "
            "tournament-night adrenaline, national-color energy without any real "
            "nation. Every element is generic and original."
        ),
        "background": (
            "Wide 16:9 cinematic sports illustration of a generic night football "
            "arena for a desktop skin live wallpaper. At the RIGHT third of the "
            "frame: a glowing emerald pitch with crisp white line geometry, towering "
            "floodlights cutting white-green beams through haze, one distant "
            "unidentifiable player in mid-kick seen from far behind (no face, no "
            "number), crowd rendered as bokeh light dots, abstract green-white-amber "
            "jersey-stripe ribbons sweeping across a deep night sky. The LEFT "
            "two-thirds is much calmer: deep green-black stadium atmosphere with "
            "soft radial floodlight glow and low detail, suitable for a desktop UI "
            "sidebar overlay. Premium sports-broadcast cinematic quality, high "
            "detail on the right, calm negative space on the left. NO flags, NO "
            "crests, NO readable scoreboard text, NO UI elements, NO logos. "
        ),
    },
}


def stitch_request(method, url, payload=None):
    data = json.dumps(payload).encode() if payload else None
    h = {"X-Goog-Api-Key": KEY, "Accept": "application/json, text/event-stream"}
    if payload:
        h["Content-Type"] = "application/json"
    req = urllib.request.Request(url, data=data, method=method, headers=h)
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(req, timeout=300, context=ctx) as resp:
        body = resp.read().decode()
    if body.startswith("event:") or "\ndata:" in body or body.startswith("data:"):
        lines = [l[5:].strip() for l in body.splitlines() if l.startswith("data:")]
        body = "".join(lines)
    return body


def create_project(title):
    body = stitch_request("POST", PROJECTS_URL, payload={"title": title})
    data = json.loads(body)
    if "error" in data:
        raise RuntimeError(f"create project error: {data['error']}")
    return str(data.get("name", "")).replace("projects/", "")


def generate_screen(project_id, prompt):
    req = {
        "jsonrpc": "2.0", "id": 1, "method": "tools/call",
        "params": {"name": "generate_screen_from_text", "arguments": {
            "projectId": project_id, "prompt": prompt,
            "deviceType": "DESKTOP", "modelId": "GEMINI_3_1_PRO"}},
    }
    body = stitch_request("POST", MCP_URL, payload=req)
    data = json.loads(body)
    if "error" in data:
        raise RuntimeError(f"generate error: {data['error']}")
    screens = []
    for c in data.get("result", {}).get("content", []):
        t = c.get("text", "")
        if not t:
            continue
        try:
            parsed = json.loads(t)
        except Exception:
            continue
        for comp in parsed.get("outputComponents", []):
            dd = comp.get("design")
            if dd:
                screens.extend(dd.get("screens", []))
        if parsed.get("screens"):
            screens.extend(parsed.get("screens", []))
    return screens


def fetch_image(url, dest, size):
    if "=" in url.split("/")[-1]:
        url = url.rsplit("=", 1)[0]
    full = f"{url}={size}" if size else url
    req = urllib.request.Request(full, headers={"Accept": "image/*"})
    ctx = ssl.create_default_context()
    with urllib.request.urlopen(req, timeout=300, context=ctx) as resp:
        with open(dest, "wb") as f:
            f.write(resp.read())


def gen_with_retry(project_id, prompt, dest, size, attempts=2):
    for i in range(attempts):
        try:
            screens = generate_screen(project_id, prompt)
            url = (screens[0].get("screenshot") or {}).get("downloadUrl") if screens else None
            if not url:
                print(f"  attempt {i+1}: no screens returned", flush=True)
                time.sleep(8)
                continue
            fetch_image(url, dest, size)
            print(f"  saved -> {dest.name} ({dest.stat().st_size} bytes)", flush=True)
            return True
        except Exception as e:
            print(f"  attempt {i+1} error: {type(e).__name__}: {e}", flush=True)
            time.sleep(10)
    return False


def main():
    only = sys.argv[1:] or list(THEMES.keys())
    project_id = create_project("CodexSkin themed first3 v2 Owner Review")
    (OUT / "project_id.txt").write_text(project_id)
    print(f"project_id={project_id}", flush=True)

    results = {}
    for slug in only:
        t = THEMES[slug]
        ddir = OUT / slug
        ddir.mkdir(parents=True, exist_ok=True)
        results[slug] = {}

        preview_prompt = (
            f"Marketplace preview for an original Codex Desktop skin named '{t['name']}'. "
            + WORKSPACE_RULES + " " + t["art_zone"] + " " + NEGATIVE_COMMON
        )
        (ddir / "preview_prompt.txt").write_text(preview_prompt)
        print(f"[{slug}] preview gen...", flush=True)
        results[slug]["preview"] = gen_with_retry(
            project_id, preview_prompt, ddir / "marketplace-preview.jpg", "w1376-h768")
        time.sleep(6)

        bg_prompt = t["background"] + NEGATIVE_COMMON
        (ddir / "background_prompt.txt").write_text(bg_prompt)
        print(f"[{slug}] background gen...", flush=True)
        results[slug]["background"] = gen_with_retry(
            project_id, bg_prompt, ddir / "live-background.jpg", "w2560-h1440")
        time.sleep(6)

    print(json.dumps(results, indent=2), flush=True)
    print("ALL DONE", flush=True)


if __name__ == "__main__":
    main()
