#!/usr/bin/env node
/**
 * ตรวจสอบความครบของการแปล messages/*.json เทียบกับ en.json
 * Usage: node scripts/check-messages.mjs [locale]
 *   locale: optional, e.g. de, ru. ถ้าไม่ระบุ จะเช็คทุก locale
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');

const en = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf8'));
const keys = Object.keys(en).filter((k) => !k.startsWith('$'));
const inlangSettings = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'project.inlang', 'settings.json'), 'utf8'));
const locales = inlangSettings.locales.filter((l) => l !== 'en');

const target = process.argv[2];
const toCheck = target && locales.includes(target) ? [target] : locales;

console.log('=== ความครบของการแปล (เทียบ en.json) ===\n');

const localeKeySet = new Set(keys.filter((k) => k.startsWith('locale_')));
for (const loc of toCheck) {
  const file = path.join(messagesDir, `${loc}.json`);
  const j = JSON.parse(fs.readFileSync(file, 'utf8'));
  const missing = keys.filter((k) => !(k in j));
  const sameAsEn = keys.filter((k) => k in j && !localeKeySet.has(k) && j[k] === en[k]);
  const empty = keys.filter((k) => k in j && (j[k] === '' || j[k] == null));
  const emptyExclude = empty.filter((k) => k !== 'terms_s11Suffix');

  console.log(`${loc}:`);
  console.log(`  keys: ${Object.keys(j).filter((k) => !k.startsWith('$')).length}/${keys.length}`);
  console.log(`  missing: ${missing.length}`);
  console.log(`  sameAsEn (ยังเป็นภาษาอังกฤษ ไม่รวม locale_*): ${sameAsEn.length}`);
  console.log(`  empty (ไม่รวม terms_s11Suffix): ${emptyExclude.length}`);
  if (missing.length) console.log(`  missing keys: ${missing.slice(0, 20).join(', ')}${missing.length > 20 ? '...' : ''}`);
  if (sameAsEn.length > 0 && sameAsEn.length <= 30) console.log(`  sameAsEn: ${sameAsEn.join(', ')}`);
  else if (sameAsEn.length > 30) console.log(`  sameAsEn (sample): ${sameAsEn.slice(0, 15).join(', ')}...`);
  if (emptyExclude.length) console.log(`  empty: ${emptyExclude.join(', ')}`);
  console.log('');
}

console.log('หมายเหตุ: terms_s11Suffix เป็น "" ตาม en โดยเจตนา');
console.log('ja/ko: markdownToPdf_step1 เป็น "" โดยเจตนา (step1Link มีประโยคเต็ม)');
console.log('locale_*: ใช้ค่าเดียวกันทุกภาษา (ไม่แปลแยก) จาก en.json');
