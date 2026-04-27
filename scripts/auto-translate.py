#!/usr/bin/env python3
"""Auto-translate extracted Lingui strings using free translation APIs."""
import re
import sys
import requests
import time

def translate_with_mymemory(text: str, source: str = "en", target: str = "es") -> str:
    """Free translation via MyMemory API (5000 words/day free)."""
    url = "https://api.mymemory.translated.net/get"
    params = {"q": text, "langpair": f"{source}|{target}"}
    try:
        r = requests.get(url, params=params, timeout=10)
        data = r.json()
        if data.get("responseStatus") == 200:
            return data["responseData"]["translatedText"]
    except Exception as e:
        print(f"  Translation error: {e}")
    return ""

def parse_po_file(path: str) -> list:
    """Parse PO file into list of (msgid, msgstr) tuples."""
    entries = []
    current_msgid = ""
    current_msgstr = ""
    in_msgid = False
    in_msgstr = False

    with open(path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line.startswith('msgid "'):
                in_msgid = True
                in_msgstr = False
                current_msgid = line[7:-1]
            elif line.startswith('msgstr "'):
                in_msgstr = True
                in_msgid = False
                current_msgstr = line[8:-1]
            elif line.startswith('"') and in_msgid:
                current_msgid += line[1:-1]
            elif line.startswith('"') and in_msgstr:
                current_msgstr += line[1:-1]
            elif line == "" and current_msgid:
                entries.append((current_msgid, current_msgstr))
                current_msgid = ""
                current_msgstr = ""
                in_msgid = False
                in_msgstr = False

        if current_msgid:
            entries.append((current_msgid, current_msgstr))

    return entries

def write_po_file(path: str, entries: list, header: str = ""):
    """Write entries back to PO file."""
    with open(path, 'w', encoding='utf-8') as f:
        if header:
            f.write(header + "\n\n")
        for msgid, msgstr in entries:
            f.write(f'msgid "{msgid}"\n')
            f.write(f'msgstr "{msgstr}"\n\n')

def main():
    en_path = "src/locales/en/messages.po"
    es_path = "src/locales/es/messages.po"

    try:
        entries = parse_po_file(en_path)
    except FileNotFoundError:
        print(f"Error: {en_path} not found. Run 'npx lingui extract' first.")
        sys.exit(1)

    print(f"Found {len(entries)} strings to translate")

    translated = []
    for i, (msgid, _) in enumerate(entries):
        if not msgid:
            translated.append((msgid, ""))
            continue

        print(f"  [{i+1}/{len(entries)}] Translating: {msgid[:60]}...")
        translation = translate_with_mymemory(msgid)
        if translation:
            translated.append((msgid, translation))
            print(f"    -> {translation[:60]}")
        else:
            translated.append((msgid, ""))
            print(f"    -> FAILED")

        time.sleep(0.5)  # Rate limit

    write_po_file(es_path, translated)
    print(f"\nDone! Wrote {len(translated)} translations to {es_path}")

if __name__ == "__main__":
    main()
