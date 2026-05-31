import sharp from "sharp";
import fs from "fs";
import path from "path";

const publicDir = path.resolve("public");
const size = 100;

const placeholders = [
  // Logos
  { dir: "logos", name: "clutch.png", w: 120, h: 48, color: "#333" },
  { dir: "logos", name: "upwork.png", w: 120, h: 48, color: "#6fda44" },
  { dir: "logos", name: "google-review.png", w: 120, h: 48, color: "#4285f4" },
  { dir: "logos", name: "google-partner.png", w: 120, h: 48, color: "#4285f4" },
  // App screenshots
  { dir: "apps", name: "app1.png", w: 210, h: 375, color: "#f0f0f0" },
  { dir: "apps", name: "app2.png", w: 220, h: 390, color: "#e8e8e8" },
  { dir: "apps", name: "app3.png", w: 220, h: 390, color: "#e0e0e0" },
  { dir: "apps", name: "app4.png", w: 210, h: 375, color: "#f0f0f0" },
  // Android phones
  { dir: "android", name: "phone-back.png", w: 250, h: 500, color: "#2a2a2a" },
  { dir: "android", name: "phone-front.png", w: 260, h: 520, color: "#1a1a1a" },
  // Devices
  { dir: "", name: "tablet.png", w: 520, h: 400, color: "#ddd" },
  { dir: "", name: "phone.png", w: 180, h: 360, color: "#ccc" },
  { dir: "", name: "girl.png", w: 480, h: 600, color: "#f5f0e8" },
  // Blog cards
  { dir: "", name: "news-card.png", w: 400, h: 250, color: "#e8e8e8" },
  { dir: "", name: "browser-card.png", w: 400, h: 250, color: "#e0e0e0" },
  { dir: "", name: "megaphone.png", w: 400, h: 250, color: "#e8e8e8" },
  { dir: "", name: "search.png", w: 400, h: 250, color: "#e0e0e0" },
  { dir: "", name: "logo-small.png", w: 200, h: 60, color: "#555" },
  // Service icons (CloudServices)
  { dir: "icons", name: "traffic.png", w: 64, h: 64, color: "#f0f0f0" },
  { dir: "icons", name: "security.png", w: 64, h: 64, color: "#f0f0f0" },
  { dir: "icons", name: "scalability.png", w: 64, h: 64, color: "#f0f0f0" },
  { dir: "icons", name: "load-balancing.png", w: 64, h: 64, color: "#f0f0f0" },
  { dir: "icons", name: "protocol.png", w: 64, h: 64, color: "#f0f0f0" },
  { dir: "icons", name: "analytics.png", w: 64, h: 64, color: "#f0f0f0" },
  // Process images (AppDevelopment)
  { dir: "process", name: "client.png", w: 100, h: 100, color: "#4f1d91" },
  { dir: "process", name: "analysis.png", w: 100, h: 100, color: "#4f1d91" },
  { dir: "process", name: "design.png", w: 100, h: 100, color: "#4f1d91" },
  { dir: "process", name: "ui.png", w: 100, h: 100, color: "#4f1d91" },
  { dir: "process", name: "dev.png", w: 100, h: 100, color: "#4f1d91" },
  { dir: "process", name: "beta.png", w: 100, h: 100, color: "#4f1d91" },
  { dir: "process", name: "store.png", w: 100, h: 100, color: "#4f1d91" },
  { dir: "process", name: "support.png", w: 100, h: 100, color: "#4f1d91" },
  // Services section (AppDevelopment)
  { dir: "services", name: "mobile.jpg", w: 400, h: 300, color: "#555" },
  { dir: "services", name: "website.jpg", w: 400, h: 300, color: "#555" },
  { dir: "services", name: "ecommerce.jpg", w: 400, h: 300, color: "#555" },
  { dir: "services", name: "blockchain.jpg", w: 400, h: 300, color: "#555" },
  { dir: "services", name: "game.jpg", w: 400, h: 300, color: "#555" },
  { dir: "services", name: "salesforce.jpg", w: 400, h: 300, color: "#555" },
  { dir: "services", name: "ai.jpg", w: 400, h: 300, color: "#555" },
  { dir: "services", name: "iot.jpg", w: 400, h: 300, color: "#555" },
];

(async () => {
  for (const p of placeholders) {
    const dir = path.join(publicDir, p.dir);
    fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, p.name);
    const ext = path.extname(p.name).toLowerCase();
    let img;
    if (ext === ".jpg" || ext === ".jpeg") {
      img = sharp({ create: { width: p.w, height: p.h, channels: 3, background: p.color } }).jpeg({ quality: 80 });
    } else {
      img = sharp({ create: { width: p.w, height: p.h, channels: 3, background: p.color } }).png();
    }
    await img.toFile(filePath);
    console.log(`✓ ${path.join(p.dir, p.name)} (${p.w}x${p.h})`);
  }
  console.log("\nDone — all placeholders created.");
})();
