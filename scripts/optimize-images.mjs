import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../src/assets");
const quality = 80;
const minFileSize = 100 * 1024;

const extensions = [".png", ".jpg", ".jpeg"];
const skipped = [];

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / 1024 / 1024).toFixed(2) + " MB";
}

function getRelativePath(absolutePath) {
  return path.relative(assetsDir, absolutePath);
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!extensions.includes(ext)) return;

  const stats = fs.statSync(filePath);
  if (stats.size < minFileSize) return;

  const webpPath = filePath.replace(ext, ".webp");
  const relativePath = getRelativePath(filePath);
  const webpRelative = getRelativePath(webpPath);

  try {
    const info = await sharp(filePath)
      .webp({ quality, effort: 6 })
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const savings = ((stats.size - webpStats.size) / stats.size * 100).toFixed(1);

    console.log(
      `  ✓ ${relativePath}` +
      `\n    ${formatBytes(stats.size)} → ${formatBytes(webpStats.size)} (${savings}% saved)` +
      `\n    → ${webpRelative}`
    );
  } catch (err) {
    skipped.push({ file: relativePath, error: err.message });
    console.log(`  ✗ ${relativePath} — ${err.message}`);
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else if (entry.isFile()) {
      await optimizeFile(fullPath);
    }
  }
}

console.log("═".repeat(56));
console.log("  Biosoftech Image Optimization Script");
console.log("  WebP quality: " + quality + "%");
console.log("  Min file size: " + formatBytes(minFileSize));
console.log("═".repeat(56));
console.log("");

let startTime = Date.now();

walkDir(assetsDir).then(() => {
  let elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log("");
  console.log("═".repeat(56));
  console.log("  Done in " + elapsed + "s");

  if (skipped.length > 0) {
    console.log("");
    console.log("  Skipped files:");
    skipped.forEach((s) => console.log("    • " + s.file + " — " + s.error));
  }

  console.log("═".repeat(56));
  console.log("");
  console.log("  Next steps:");
  console.log("  1. Run: node scripts/update-imports.mjs");
  console.log("  2. This will update all .jsx imports to use .webp");
  console.log("  3. Then manually delete the old .png/.jpg files");
  console.log("");
});
