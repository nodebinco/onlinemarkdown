#!/usr/bin/env node
/**
 * Copy translations from messages/hi.json to another locale (mr, gu, kn, ha).
 * Usage: node scripts/apply-from-hi.mjs <locale>
 * Example: node scripts/apply-from-hi.mjs mr
 * Leaves locale_* keys unchanged (use en.json values).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');
const locale = process.argv[2];
if (!locale || !['mr', 'gu', 'kn', 'ha'].includes(locale)) {
  console.error('Usage: node scripts/apply-from-hi.mjs <locale>');
  console.error('Locale must be one of: mr, gu, kn, ha');
  process.exit(1);
}

const enPath = path.join(messagesDir, 'en.json');
const hiPath = path.join(messagesDir, 'hi.json');
const targetPath = path.join(messagesDir, `${locale}.json`);

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));
const j = JSON.parse(fs.readFileSync(targetPath, 'utf8'));

const localeKeySet = new Set(Object.keys(en).filter((k) => k.startsWith('locale_')));
let applied = 0;
for (const key of Object.keys(j)) {
  if (key.startsWith('$')) continue;
  if (localeKeySet.has(key)) {
    j[key] = en[key];
    continue;
  }
  if (key in hi && j[key] === en[key]) {
    j[key] = hi[key];
    applied++;
  }
}

fs.writeFileSync(targetPath, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log(`Applied ${applied} keys from hi.json to ${locale}.json (locale_* kept from en).`);
console.log(`Note: Content is in Hindi as placeholder. Replace with proper ${locale} translations when ready.`);
