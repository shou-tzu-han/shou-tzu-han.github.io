import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("exports the academic profile for GitHub Pages", async () => {
  const html = await readFile(new URL("dist/client/index.html", root), "utf8");

  assert.match(html, /Shou-Tzu Han/);
  assert.match(html, /Trustworthy AI/);
  assert.match(html, /LLM Agent Safety/);
  assert.match(html, /Mechanistic Interpretability/i);
  assert.match(html, /Research Profile/);
  assert.match(html, /Research Interests/);
  assert.match(html, /Publications/);
  assert.match(html, /Research Experiences/);
  assert.match(html, /Research Projects/);
  assert.match(html, /Technical Skills/);
  assert.match(html, /Wayne State University/);
  assert.match(html, /Boston University/);
  assert.match(html, /Soochow University/);
  assert.match(html, /Aug 2026 – Present/);
  assert.match(html, /Sep 2021 – Sep 2023/);
  assert.match(html, /Sep 2015 – Jun 2020/);
  assert.match(html, /Seeking a research internship/);
  assert.match(html, /github\.com\/shou-tzu-han/);
  assert.match(html, /Google Scholar/);
  assert.match(html, /Live demo/);
  assert.match(html, /debrah1-novelty-aware-research-agent\.hf\.space/);
  assert.match(html, /linkedin\.com\/in\/shou-tzu-debra-h-713724200/);
  assert.match(html, /LinkedIn/);
  assert.match(html, />Résumé/);
  assert.match(html, />Email</);
  assert.match(
    html,
    /hero-actions[\s\S]*GitHub[\s\S]*Google Scholar[\s\S]*LinkedIn[\s\S]*Email me/,
  );
  assert.match(html, /Switch to dark theme/);
  assert.match(html, />Light</);
  assert.match(html, />Dark</);
  assert.doesNotMatch(html, /University of South Dakota/i);
  assert.doesNotMatch(html, /github\.com\/52147/);
  assert.doesNotMatch(html, /857[-)\s]/);

  await access(new URL("dist/client/og.png", root));
  await access(new URL("dist/client/Shou-Tzu-Han-Resume.pdf", root));
});
