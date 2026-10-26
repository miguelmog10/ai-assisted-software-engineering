// Renders carousel.html to one PDF per theme, plus PNG previews (PREVIEW=1).
// Usage: node render.js [outDir]   (needs Playwright with Chromium)
const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const out = process.argv[2] || path.join(__dirname, "pdf");
const themes = ["neutral", "light", "dark"];

(async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
  const src = "file://" + path.join(__dirname, "carousel.html");
  for (const theme of themes) {
    await page.goto(`${src}?theme=${theme}`);
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({
      path: path.join(out, `carousel-${theme}.pdf`),
      width: "1080px", height: "1350px", printBackground: true, preferCSSPageSize: true,
    });
    if (process.env.PREVIEW) {
      const slides = await page.$$(".slide");
      for (let i = 0; i < slides.length; i++) {
        await slides[i].screenshot({ path: path.join(out, `${theme}-${String(i + 1).padStart(2, "0")}.png`) });
      }
    }
    console.log("rendered", theme);
  }
  // GitHub social preview (Settings > General > Social preview), 1280 x 640
  const card = await browser.newPage({ viewport: { width: 1280, height: 640 } });
  await card.goto("file://" + path.join(__dirname, "social-preview.html"));
  await card.evaluate(() => document.fonts.ready);
  await card.screenshot({ path: path.join(__dirname, "social-preview.png") });
  console.log("rendered social-preview.png");
  await browser.close();
})();
