#!/usr/bin/env node
/**
 * Adapt Hindi (Devanagari) in hi.json to Gujarati script and vocabulary, write to messages/gu.json.
 * Run: node scripts/adapt-gu-from-hi.mjs
 * Uses transliteration (Devanagari→Gujarati) plus word/phrase substitutions.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiPath = path.join(__dirname, '../messages/hi.json');
const guPath = path.join(__dirname, '../messages/gu.json');
const enPath = path.join(__dirname, '../messages/en.json');
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const j = JSON.parse(fs.readFileSync(guPath, 'utf8'));
const localeKeySet = new Set(Object.keys(en).filter((k) => k.startsWith('locale_')));

// Devanagari → Gujarati character map (vowels, consonants, marks)
const D2G = {
  '\u0905': '\u0A85', '\u0906': '\u0A86', '\u0907': '\u0A87', '\u0908': '\u0A88',
  '\u0909': '\u0A89', '\u090A': '\u0A8A', '\u090B': '\u0A8B', '\u090F': '\u0A8F',
  '\u0910': '\u0A90', '\u0913': '\u0A93', '\u0914': '\u0A94', '\u090D': '\u0A8D',
  '\u0911': '\u0A91', '\u0912': '\u0A92',
  '\u0915': '\u0A95', '\u0916': '\u0A96', '\u0917': '\u0A97', '\u0918': '\u0A98',
  '\u0919': '\u0A99', '\u091A': '\u0A9A', '\u091B': '\u0A9B', '\u091C': '\u0A9C',
  '\u091D': '\u0A9D', '\u091E': '\u0A9E', '\u091F': '\u0A9F', '\u0920': '\u0AA0',
  '\u0921': '\u0AA1', '\u0922': '\u0AA2', '\u0923': '\u0AA3', '\u0924': '\u0AA4',
  '\u0925': '\u0AA5', '\u0926': '\u0AA6', '\u0927': '\u0AA7', '\u0928': '\u0AA8',
  '\u092A': '\u0AAA', '\u092B': '\u0AAB', '\u092C': '\u0AAC', '\u092D': '\u0AAD',
  '\u092E': '\u0AAE', '\u092F': '\u0AAF', '\u0930': '\u0AB0', '\u0932': '\u0AB2',
  '\u0935': '\u0AB5', '\u0936': '\u0AB6', '\u0937': '\u0AB7', '\u0938': '\u0AB8',
  '\u0939': '\u0AB9', '\u0933': '\u0AB3',
  '\u093E': '\u0ABE', '\u093F': '\u0ABF', '\u0940': '\u0AC0', '\u0941': '\u0AC1',
  '\u0942': '\u0AC2', '\u0943': '\u0AC3', '\u0947': '\u0AC7', '\u0948': '\u0AC8',
  '\u094B': '\u0ACB', '\u094C': '\u0ACC', '\u0945': '\u0AC5', '\u0949': '\u0AC9',
  '\u094A': '\u0ACA',
  '\u094D': '\u0ACD', '\u0950': '\u0AD0', '\u0902': '\u0A82', '\u0903': '\u0A83',
  '\u0964': '\u0AF0', '\u0965': '\u0AF1',
  '\u093C': '\u0ABC', '\u0951': '\u0ACD', '\u0952': '\u0ACD',
};
// Extended: some chars
D2G['\u0929'] = '\u0AA9'; D2G['\u092E'] = '\u0AAE'; D2G['\u091E'] = '\u0A9E';

function transliterate(str) {
  if (typeof str !== 'string') return str;
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    out += D2G[c] !== undefined ? D2G[c] : c;
  }
  return out;
}

// Hindi → Gujarati word/phrase substitutions (before transliteration; longer phrases first)
const SUBST = [
  ['हमारे बारे में', 'અમારા વિશે'], ['हमारे', 'અમારા'], ['हमारा', 'અમારું'], ['हमारी', 'અમારી'],
  ['आपके', 'તમારા'], ['आपकी', 'તમારી'], ['आपको', 'તમને'],
  ['आप ', 'તમે '], ['हम ', 'અમે '], ['हमें', 'અમને'],
  ['के साथ', 'સાથે'], ['के लिए', 'માટે'], ['के बारे में', 'વિશે'],
  ['के ज़रिए', 'દ્વારા'], ['की ज़रूरत', 'જરૂર'], ['पेज', 'પૃષ્ઠ'],
  ['शुरू करें', 'શરૂ કરો'], ['शुरू करने', 'શરૂ કરવા'], ['नई फ़ाइल', 'નવી ફાઇલ'],
  ['फ़ाइल', 'ફાઇલ'], ['फ़ाइलें', 'ફાઇલો'], ['रद्द करें', 'રદ કરો'],
  ['दिखाएं', 'દર્શાવો'], ['छिपाएं', 'છુપાવો'], ['सहेजें', 'સાચવો'],
  ['डालें', 'દાખલ કરો'], ['बनाएं', 'બનાવો'], ['खोलें', 'ખોલો'],
  ['हैं', 'છે'], ['है', 'છે'], ['हों', 'હોય'], ['करता है', 'કરે છે'],
  ['करती है', 'કરે છે'], ['और', 'અને'], ['या', 'અથવા'], ['लेकिन', 'પરંતુ'],
  ['सभी', 'બધા'], ['सिर्फ', 'ફક્ત'], ['नहीं', 'નહીં'], ['अभी', 'હમણાં'],
  ['तुरंत', 'તરત'], ['अपनी', 'તમારી'], ['अपने', 'તમારા'],
  ['समुदाय', 'સમુદાય'], ['संपादक', 'સંપાદક'], ['सामग्री', 'સામગ્રી'],
  ['दस्तावेज़', 'દસ્તાવેજ'], ['उपयोगकर्ता', 'ઉપયોગકર્તા'], ['सुझाव', 'સૂચન'],
  ['प्रतिक्रिया', 'પ્રતિસાદ'], ['प्लेटफ़ॉर्म', 'પ્લેટફોર્મ'], ['इंटरफ़ेस', 'ઇન્ટરફેસ'],
  ['मिशन', 'મિશન'], ['टूल', 'ટૂલ'], ['पृष्ठ', 'પૃષ્ઠ'],
];

function substitute(str) {
  let s = str;
  for (const [from, to] of SUBST) {
    s = s.split(from).join(to);
  }
  return s;
}

function adapt(str) {
  return transliterate(substitute(str));
}

let count = 0;
for (const key of Object.keys(j)) {
  if (key.startsWith('$') || localeKeySet.has(key)) continue;
  const source = hi[key];
  if (typeof source === 'string' && source) {
    j[key] = adapt(source);
    count++;
  }
}
for (const key of Object.keys(en)) {
  if (localeKeySet.has(key)) j[key] = en[key];
}

fs.writeFileSync(guPath, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log('Adapted', count, 'keys in gu.json from Hindi to Gujarati.');
