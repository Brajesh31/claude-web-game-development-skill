#!/usr/bin/env node
/**
 * Static smoke test for a small browser game.
 * Usage: node scripts/smoke_test.mjs [path/to/index.html]
 * This does not launch a browser or test gameplay.
 */
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const entry = path.resolve(process.argv[2] ?? "index.html");
try {
  const html = await readFile(entry, "utf8");
  const checks = [
    ["HTML doctype", /<!doctype\s+html/i.test(html)],
    ["Viewport meta", /<meta\s+name=["']viewport["']/i.test(html)],
    ["Canvas or main landmark", /<canvas\b|<main\b/i.test(html)],
    ["Script reference", /<script\b/i.test(html)]
  ];
  console.log(`Smoke test: ${entry}`);
  for (const [label, passed] of checks) {
    console.log(`${passed ? "PASS" : "WARN"}  ${label}`);
  }
  if (!checks[2][1]) {
    console.error("Expected a <canvas> element or <main> landmark.");
    process.exitCode = 1;
  } else {
    console.log("Static checks complete. Validate gameplay in a browser.");
  }
} catch (error) {
  console.error(`Unable to read entry file: ${error.message}`);
  process.exitCode = 1;
}
