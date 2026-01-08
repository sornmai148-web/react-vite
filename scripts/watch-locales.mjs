import chokidar from "chokidar";
import { syncLocales } from "./sync-locales.mjs";

// Initial sync
syncLocales();

// Watch for changes in src/locales
const watcher = chokidar.watch("src/locales", {
  ignoreInitial: true,
});

watcher.on("all", (event, path) => {
  console.log(`[i18n watcher] ${event} detected: ${path}`);
  syncLocales();
});
