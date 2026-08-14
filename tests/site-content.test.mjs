import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports the academic profile for GitHub Pages", async () => {
  const html = await readFile(new URL("dist/client/index.html", root), "utf8");

  assert.match(html, /Shou-Tzu Han/);
  assert.match(html, /Trustworthy AI/);
  assert.match(html, /Selected publications/);
  assert.match(html, /Wayne State University/);
  assert.match(html, /Boston University/);
  assert.match(html, /Soochow University/);
  assert.match(html, /Exploring postdoctoral research beginning in 2028/);
  assert.match(html, />Scholar/);
  assert.match(html, />Résumé/);
  assert.match(html, />Email</);
  assert.match(html, /hero-actions[\s\S]*Google Scholar[\s\S]*Email me/);
  assert.match(html, /Switch to dark theme/);
  assert.match(html, />Light</);
  assert.match(html, />Dark</);
  assert.doesNotMatch(html, /University of South Dakota/i);
  assert.doesNotMatch(html, /teaching-focused opportunities/i);

  await access(new URL("dist/client/og.png", root));
  await access(new URL("dist/client/Shou-Tzu-Han-Resume.pdf", root));
});
