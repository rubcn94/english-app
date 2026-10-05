"""Builds data/sherlock.js from tools/sherlock/cards/*.txt.

One file per episode. First line:  @ <section number> | <title>
Card lines:  answer || quote with ___ || English hint || Spanish || usage note

Every card is checked against that episode's English .srt (so a quote can't
be invented) and cards are sorted by first appearance in the episode, which
is the order the per-episode glossary shows.

Usage:  python tools/sherlock/build.py
"""
import re, glob, os, json

HERE = os.path.dirname(os.path.abspath(__file__))
SRT_DIR = r"D:\Media\Subtitulos\Sherlock"
OUT = os.path.join(HERE, "..", "..", "data", "sherlock.js")


def srt_dialogue(path):
    """Plain dialogue text of an .srt: no timestamps, tags, HI cues or speaker labels."""
    raw = open(path, encoding="utf-8", errors="replace").read().replace("\r", "")
    out = []
    for block in re.split(r"\n\s*\n", raw):
        ls = block.strip().split("\n")
        if len(ls) < 3:
            continue
        txt = " ".join(ls[2:])
        txt = re.sub(r"<[^>]+>|\{[^}]+\}", "", txt)
        txt = re.sub(r"\[[^\]]*\]|\([A-Z ]+\)", "", txt)   # HI cues
        txt = re.sub(r"^[A-Z][A-Z .']+:\s*", "", txt)       # speaker labels
        txt = re.sub(r"\s*-\s+", " - ", txt).strip(" -")
        if txt:
            out.append(txt)
    return " | ".join(out)


def norm(t):
    return " " + re.sub(r"\s+", " ", re.sub(r"[^a-z0-9' ]", " ", t.lower())).strip() + " "


sections, problems = [], []
for path in glob.glob(os.path.join(HERE, "cards", "*.txt")):
    ep = os.path.basename(path)[:-4]
    srt = glob.glob(os.path.join(SRT_DIR, f"*{ep}*.srt"))
    if not srt:
        problems.append(f"{ep}: no .srt in {SRT_DIR}")
        continue
    dlg = srt_dialogue(srt[0]).lower()
    dlg = dlg.replace("’", "'").replace("praying on my mind", "preying on my mind")  # sub typo
    ndlg = " " + re.sub(r"\s+", " ", re.sub(r"[^a-z0-9' ]", " ", dlg)) + " "

    lines = [l for l in open(path, encoding="utf-8").read().splitlines() if l.strip()]
    num, title = [s.strip() for s in lines[0][1:].split("|", 1)]
    cards = []
    for l in lines[1:]:
        parts = [p.strip() for p in l.split("||")]
        if len(parts) != 5:
            problems.append(f"{ep}: bad line {l[:60]}")
            continue
        ans, quote, hint, es, note = parts
        if quote.count("___") != 1:
            problems.append(f"{ep}: '{ans}' quote has {quote.count('___')} blanks")
        # Position of first appearance: the quote's sentence with the answer
        # filled in, else a long fragment of the quote, else the answer itself.
        filled = quote.replace("___", ans)
        cand = [norm(p) for p in re.split(r"[.?!—]", filled) if ans.lower() in p.lower() and len(p) > len(ans) + 3]
        cand += [norm(p) for p in re.split(r"[.?!—]|_{3}", quote) if len(p.strip()) >= 15]
        cand += [norm(ans)]
        pos = -1
        for c in cand:
            pos = ndlg.find(c)
            if pos >= 0:
                break
        if pos < 0:
            problems.append(f"{ep}: '{ans}' not found in subtitles")
            pos = 10**9
        back = f"{ans}\n\n{es}" + (f"\n\n📌 {note}" if note else "")
        cards.append((pos, {"front": f"{quote}\n\n💬 {hint}", "back": back}))
    cards.sort(key=lambda t: t[0])
    sec = int(num)
    # Ids come from the answer, not the position, so adding or reordering
    # cards later never moves someone's saved progress onto a different card.
    out = []
    for _, c in cards:
        answer = c["back"].split("\n")[0]
        cid = f"sh{sec:02d}_" + re.sub(r"[^a-z0-9]+", "-", answer.lower()).strip("-")
        if any(o["id"] == cid for o in out):
            problems.append(f"{ep}: duplicate id {cid}")
        out.append({"id": cid, **c})
    sections.append({"section": sec, "title": title, "cards": out})

sections.sort(key=lambda s: s["section"])
total = sum(len(s["cards"]) for s in sections)
header = ("// Sherlock (BBC, 2010-2017) — vocabulario, phrasal verbs e idioms difíciles\n"
          "// extraídos de los subtítulos en inglés de cada episodio. Una sección por\n"
          "// episodio; las tarjetas van en orden de aparición. Generado por\n"
          "// tools/sherlock/build.py (no editar a mano).\n")
open(OUT, "w", encoding="utf-8", newline="\n").write(
    header + "const SHERLOCK_DATA = " + json.dumps(sections, ensure_ascii=False, indent=2) + ";\n")
print(len(sections), "sections,", total, "cards")
print("\n".join(problems) or "no problems")
