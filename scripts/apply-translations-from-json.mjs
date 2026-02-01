#!/usr/bin/env node
/**
 * Apply translations from a JSON file to messages/{locale}.json.
 * Usage: node scripts/apply-translations-from-json.mjs <locale> <path-to-json>
 * Example: node scripts/apply-translations-from-json.mjs ha scripts/translations/ha.json
 * Only keys present in the JSON file are updated; locale_* can be taken from en.json.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const locale = process.argv[2];
const jsonPath = process.argv[3];
if (!locale || !jsonPath) {
  console.error('Usage: node scripts/apply-translations-from-json.mjs <locale> <path-to-json>');
  process.exit(1);
}

const messagesDir = path.join(__dirname, '..', 'messages');
const targetPath = path.join(messagesDir, `${locale}.json`);
const dataPath = path.resolve(__dirname, '..', jsonPath);

const j = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

let count = 0;
for (const [key, value] of Object.entries(data)) {
  if (key.startsWith('$')) continue;
  if (key in j && typeof value === 'string') {
    j[key] = value;
    count++;
  }
}

fs.writeFileSync(targetPath, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log('Applied', count, 'keys from', jsonPath, 'to', locale + '.json');
