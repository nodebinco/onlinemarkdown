#!/usr/bin/env node
/**
 * Apply Croatian translations to hr.json by adapting from Serbian (sr.json).
 * Run: node scripts/apply-hr-from-sr.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const messagesDir = path.join(__dirname, '..', 'messages');
const en = JSON.parse(fs.readFileSync(path.join(messagesDir, 'en.json'), 'utf8'));
const sr = JSON.parse(fs.readFileSync(path.join(messagesDir, 'sr.json'), 'utf8'));
const hr = JSON.parse(fs.readFileSync(path.join(messagesDir, 'hr.json'), 'utf8'));

const prefixOrder = ['about_', 'contact_', 'gettingStarted_', 'tools_', 'cheatSheet_', 'syntax_', 'privacy_', 'terms_', 'markdownToPdf_'];
const keysToCopy = Object.keys(en).filter((k) => prefixOrder.some((p) => k.startsWith(p)));

function srToHr(s) {
  if (typeof s !== 'string') return s;
  return s
    .replace(/\bFajl\b/g, 'Datoteka')
    .replace(/\bfajl\b/g, 'datoteka')
    .replace(/\bfajlove\b/g, 'datoteke')
    .replace(/\bfajlovima\b/g, 'datotekama')
    .replace(/\bSačuvaj\b/g, 'Spremi')
    .replace(/\bsačuvaj\b/g, 'spremi')
    .replace(/\bčuvanje\b/g, 'spremanje')
    .replace(/\bČuvanje\b/g, 'Spremanje')
    .replace(/\bPodeljeni\b/g, 'Podijeljeni')
    .replace(/\blevom\b/g, 'lijevom')
    .replace(/\bPosetite\b/g, 'Posjetite')
    .replace(/\bposetite\b/g, 'posjetite')
    .replace(/\brepozitorijum\b/g, 'repozitorij')
    .replace(/\bverujemo\b/g, 'vjerujemo')
    .replace(/\bVerujemo\b/g, 'Vjerujemo')
    .replace(/\bcenimo\b/g, 'cijenimo')
    .replace(/\bCenimo\b/g, 'Cijenimo')
    .replace(/\bpredloge\b/g, 'prijedloge')
    .replace(/\bpredlog\b/g, 'prijedlog')
    .replace(/\bpredloga\b/g, 'prijedloga')
    .replace(/\binteresovanju\b/g, 'interesu')
    .replace(/\bupite\b/g, 'upite'); // same in HR
}

for (const k of keysToCopy) {
  if (k in sr) hr[k] = srToHr(sr[k]);
}

fs.writeFileSync(path.join(messagesDir, 'hr.json'), JSON.stringify(hr, null, 2) + '\n', 'utf8');
console.log('Applied', keysToCopy.length, 'Croatian translations to hr.json (from sr)');
