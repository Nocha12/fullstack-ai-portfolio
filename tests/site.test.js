const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const root = path.resolve(__dirname, "..");

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

test("site has GitHub Pages static entrypoint with project case studies", () => {
  const html = read("index.html");

  assert.match(html, /<title>Full-Stack AI Portfolio/);
  assert.match(html, /육군 공보 sLM 분석 플랫폼/);
  assert.match(html, /지니티쳐/);
  assert.match(html, /AI Essay Assist/);
  assert.match(html, /CALPASAIDL/);
  assert.match(html, /styles\.css/);
  assert.match(html, /script\.js/);
});

test("site exposes PDF export controls and print-only document title", () => {
  const html = read("index.html");
  const css = read("styles.css");
  const js = read("script.js");

  assert.match(html, /data-action="print"/);
  assert.match(html, /PDF/);
  assert.match(css, /@media print/);
  assert.match(css, /\.no-print/);
  assert.match(css, /\.print-only/);
  assert.match(js, /window\.print\(\)/);
});

test("portfolio page does not include resume narrative content", () => {
  const html = read("index.html");

  assert.doesNotMatch(html, /href="#resume"/);
  assert.doesNotMatch(html, /Resume Narrative/);
  assert.doesNotMatch(html, /이력서에 들어갈 핵심 문장/);
});

test("project screenshots preserve source aspect ratios inside media frames", () => {
  const html = read("index.html");
  const css = read("styles.css");

  assert.match(html, /class="media-frame product-shot"/);
  assert.match(html, /class="media-frame ui-shot"/);
  assert.match(html, /class="media-frame chart-shot"/);
  assert.match(html, /class="media-frame architecture-shot"/);
  assert.match(css, /\.media-frame/);
  assert.match(css, /aspect-ratio/);
  assert.match(css, /object-fit:\s*contain/);
});

test("featured project content can shrink on narrow mobile screens", () => {
  const css = read("styles.css");

  assert.match(css, /\.project-content[\s\S]*min-width:\s*0/);
  assert.match(css, /\.project-visual[\s\S]*min-width:\s*0/);
  assert.match(css, /\.project-card\.featured > \*[\s\S]*max-width:\s*100%/);
  assert.match(css, /\.project-kicker[\s\S]*flex-wrap:\s*wrap/);
  assert.match(css, /\.project-kicker span:last-child[\s\S]*overflow-wrap:\s*anywhere/);
});

test("visual palette uses a brighter air-intelligence color system", () => {
  const css = read("styles.css").toLowerCase();

  assert.match(css, /--sky:\s*#0b82d8/);
  assert.match(css, /--cyan:\s*#00bfff/);
  assert.match(css, /--signal:\s*#ff6f20/);
  assert.doesNotMatch(css, /#334832/);
  assert.doesNotMatch(css, /#718155/);
  assert.doesNotMatch(css, /#ad5940/);
});

test("site documents GitHub Pages deployment without build tooling", () => {
  const readme = read("README.md");

  assert.match(readme, /GitHub Pages/);
  assert.match(readme, /index\.html/);
  assert.match(readme, /PDF/);
});
