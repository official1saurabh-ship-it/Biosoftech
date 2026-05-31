import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.resolve(__dirname, "../src");
const assetsDir = path.resolve(srcDir, "assets");

const extensions = [".png", ".jpg", ".jpeg"];
const changed = [];
let skipped = 0;

function collectWebpFiles(dir) {
  const webpMap = {};
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      Object.assign(webpMap, collectWebpFiles(fullPath));
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (ext === ".webp") {
        const origExts = [".png", ".jpg", ".jpeg"];
        for (const orig of origExts) {
          const origName = entry.name.replace(/\.webp$/, orig);
          const origPath = path.join(dir, origName);
          if (fs.existsSync(origPath)) {
            const relPath = path.relative(assetsDir, fullPath).replace(/\\/g, "/");
            const origRel = path.relative(srcDir, origPath).replace(/\\/g, "/");
            webpMap[origRel] = relPath;
          }
        }
      }
    }
  }
  return webpMap;
}

function processFile(filePath, webpMap) {
  let content = fs.readFileSync(filePath, "utf-8");
  let modified = false;

  for (const [origImport, webpPath] of Object.entries(webpMap)) {
    const origExt = path.extname(origImport);
    if (!extensions.includes(origExt)) continue;

    const importRegex = new RegExp(
      `(from\\s+["'\\./]*${origImport.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "g"
    );

    if (importRegex.test(content)) {
      content = content.replace(importRegex, (match) => {
        const webpImportPath = origImport.replace(/\.(png|jpg|jpeg)$/, ".webp");
        const fullWebpPath = path.posix.join("..", "assets", webpPath);
        const webpRelative = webpImportPath.replace(/^src\//, "");
        return match.replace(/\.(png|jpg|jpeg)(["'])/, ".webp$2");
      });
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf-8");
    const relPath = path.relative(srcDir, filePath);
    console.log(`  ✓ ${relPath}`);
    changed.push(relPath);
  }
}

function walkSrc(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith(".") && entry.name !== "node_modules" && entry.name !== "dist") {
      walkSrc(fullPath);
    } else if (entry.isFile() && /\.(jsx|js|tsx|ts)$/.test(entry.name)) {
      processFile(fullPath, webpMap);
    }
  }
}

console.log("═".repeat(56));
console.log("  Updating imports from .png/.jpg → .webp");
console.log("═".repeat(56));
console.log("");

const webpMap = collectWebpFiles(assetsDir);

if (Object.keys(webpMap).length === 0) {
  console.log("  No .webp files found. Run scripts/optimize-images.mjs first.");
  process.exit(0);
}

console.log(`  Found ${Object.keys(webpMap).length} WebP replacements available`);
console.log("");

walkSrc(srcDir);

console.log("");
console.log("═".repeat(56));
if (changed.length > 0) {
  console.log(`  Updated ${changed.length} file(s)`);
} else {
  console.log("  No imports needed updating.");
}
console.log("═".repeat(56));
