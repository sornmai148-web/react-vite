import fs from "fs";
import path from "path";

export function syncLocales() {
  const SRC = path.resolve("src/locales");
  const DEST = path.resolve("public/locales");

  if (!fs.existsSync(DEST)) fs.mkdirSync(DEST, { recursive: true });

  const langs = fs.readdirSync(SRC).filter((f) => {
    const dir = path.join(SRC, f);
    return fs.statSync(dir).isDirectory();
  });

  langs.forEach((lang) => {
    const srcFile = path.join(SRC, lang, "translation.json");
    const langDest = path.join(DEST, lang);
    if (!fs.existsSync(langDest)) fs.mkdirSync(langDest, { recursive: true });
    const destFile = path.join(langDest, "translation.json");

    if (fs.existsSync(srcFile)) {
      fs.copyFileSync(srcFile, destFile);
      console.log(`Synced ${srcFile} → ${destFile}`);
    }
  });
}

// Run directly
if (import.meta.url === `file://${process.cwd()}/scripts/sync-locales.mjs`) {
  syncLocales();
}
