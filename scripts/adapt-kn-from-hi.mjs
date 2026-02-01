#!/usr/bin/env node
/**
 * Adapt Hindi (Devanagari) in hi.json to Kannada script and vocabulary, write to messages/kn.json.
 * Run: node scripts/adapt-kn-from-hi.mjs
 * Uses transliteration (Devanagari→Kannada) plus word/phrase substitutions.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hiPath = path.join(__dirname, '../messages/hi.json');
const knPath = path.join(__dirname, '../messages/kn.json');
const enPath = path.join(__dirname, '../messages/en.json');
const hi = JSON.parse(fs.readFileSync(hiPath, 'utf8'));
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const j = JSON.parse(fs.readFileSync(knPath, 'utf8'));
const localeKeySet = new Set(Object.keys(en).filter((k) => k.startsWith('locale_')));

// Devanagari → Kannada character map (vowels, consonants, marks)
const D2K = {
  '\u0905': '\u0C85', '\u0906': '\u0C86', '\u0907': '\u0C87', '\u0908': '\u0C88',
  '\u0909': '\u0C89', '\u090A': '\u0C8A', '\u090B': '\u0C8B', '\u090F': '\u0C8F',
  '\u0910': '\u0C90', '\u0913': '\u0C93', '\u0914': '\u0C94', '\u090D': '\u0C8D',
  '\u0911': '\u0C91', '\u0912': '\u0C92',
  '\u0915': '\u0C95', '\u0916': '\u0C96', '\u0917': '\u0C97', '\u0918': '\u0C98',
  '\u0919': '\u0C99', '\u091A': '\u0C9A', '\u091B': '\u0C9B', '\u091C': '\u0C9C',
  '\u091D': '\u0C9D', '\u091E': '\u0C9E', '\u091F': '\u0C9F', '\u0920': '\u0CA0',
  '\u0921': '\u0CA1', '\u0922': '\u0CA2', '\u0923': '\u0CA3', '\u0924': '\u0CA4',
  '\u0925': '\u0CA5', '\u0926': '\u0CA6', '\u0927': '\u0CA7', '\u0928': '\u0CA8',
  '\u092A': '\u0CAA', '\u092B': '\u0CAB', '\u092C': '\u0CAC', '\u092D': '\u0CAD',
  '\u092E': '\u0CAE', '\u092F': '\u0CAF', '\u0930': '\u0CB0', '\u0932': '\u0CB2',
  '\u0935': '\u0CB5', '\u0936': '\u0CB6', '\u0937': '\u0CB7', '\u0938': '\u0CB8',
  '\u0939': '\u0CB9', '\u0933': '\u0CB3',
  '\u093E': '\u0CBE', '\u093F': '\u0CBF', '\u0940': '\u0CC0', '\u0941': '\u0CC1',
  '\u0942': '\u0CC2', '\u0943': '\u0CC3', '\u0947': '\u0CC7', '\u0948': '\u0CC8',
  '\u094B': '\u0CCB', '\u094C': '\u0CCC', '\u0945': '\u0CC5', '\u0949': '\u0CC9',
  '\u094A': '\u0CCA',
  '\u094D': '\u0CCD', '\u0950': '\u0CD0', '\u0902': '\u0C82', '\u0903': '\u0C83',
  '\u0964': '\u0CE4', '\u0965': '\u0CE5',
  '\u093C': '\u0CBC', '\u0929': '\u0CA9',
};

function transliterate(str) {
  if (typeof str !== 'string') return str;
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    out += D2K[c] !== undefined ? D2K[c] : c;
  }
  return out;
}

// Hindi → Kannada word/phrase substitutions (before transliteration; longer phrases first)
const SUBST = [
  ['हमारे बारे में', 'ನಮ್ಮ ಬಗ್ಗೆ'], ['हमारे', 'ನಮ್ಮ'], ['हमारा', 'ನಮ್ಮ'], ['हमारी', 'ನಮ್ಮ'],
  ['आपके', 'ನಿಮ್ಮ'], ['आपकी', 'ನಿಮ್ಮ'], ['आपको', 'ನಿಮಗೆ'],
  ['आप ', 'ನೀವು '], ['हम ', 'ನಾವು '], ['हमें', 'ನಮಗೆ'],
  ['के साथ', 'ಜೊತೆ'], ['के लिए', 'ಗಾಗಿ'], ['के बारे में', 'ಕುರಿತು'],
  ['के ज़रिए', 'ಮೂಲಕ'], ['की ज़रूरत', 'ಅಗತ್ಯ'], ['पेज', 'ಪುಟ'],
  ['शुरू करें', 'ಪ್ರಾರಂಭಿಸಿ'], ['शुरू करने', 'ಪ್ರಾರಂಭಿಸಲು'], ['नई फ़ाइल', 'ಹೊಸ ಫೈಲ್'],
  ['फ़ाइल', 'ಫೈಲ್'], ['फ़ाइलें', 'ಫೈಲ್‌ಗಳು'], ['रद्द करें', 'ರದ್ದು ಮಾಡಿ'],
  ['दिखाएं', 'ತೋರಿಸಿ'], ['छिपाएं', 'ಮರೆಮಾಡಿ'], ['सहेजें', 'ಉಳಿಸಿ'],
  ['डालें', 'ಸೇರಿಸಿ'], ['बनाएं', 'ರಚಿಸಿ'], ['खोलें', 'ತೆರೆಯಿರಿ'],
  ['हैं', 'ಇವೆ'], ['है', 'ಇದೆ'], ['हों', 'ಇರಲಿ'], ['करता है', 'ಮಾಡುತ್ತದೆ'],
  ['करती है', 'ಮಾಡುತ್ತದೆ'], ['और', 'ಮತ್ತು'], ['या', 'ಅಥವಾ'], ['लेकिन', 'ಆದರೆ'],
  ['सभी', 'ಎಲ್ಲಾ'], ['सिर्फ', 'ಕೇವಲ'], ['नहीं', 'ಇಲ್ಲ'], ['अभी', 'ಈಗ'],
  ['तुरंत', 'ತಕ್ಷಣ'], ['अपनी', 'ನಿಮ್ಮ'], ['अपने', 'ನಿಮ್ಮ'],
  ['समुदाय', 'ಸಮುದಾಯ'], ['संपादक', 'ಸಂಪಾದಕ'], ['सामग्री', 'ವಿಷಯ'],
  ['दस्तावेज़', 'ದಾಖಲೆ'], ['उपयोगकर्ता', 'ಬಳಕೆದಾರ'], ['सुझाव', 'ಸಲಹೆ'],
  ['प्रतिक्रिया', 'ಪ್ರತಿಕ್ರಿಯೆ'], ['प्लेटफ़ॉर्म', 'ವೇದಿಕೆ'], ['इंटरफ़ेस', 'ಇಂಟರ್ಫೇಸ್'],
  ['मिशन', 'ಉದ್ದೇಶ'], ['टूल', 'ಉಪಕರಣ'], ['पृष्ठ', 'ಪುಟ'],
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

fs.writeFileSync(knPath, JSON.stringify(j, null, 2) + '\n', 'utf8');
console.log('Adapted', count, 'keys in kn.json from Hindi to Kannada.');
