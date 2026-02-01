#!/usr/bin/env node
/**
 * Build scripts/translations/sw.json from en.json + Swahili overrides.
 * Run: node scripts/build-sw-translations.mjs
 * Then: node scripts/apply-translations-from-json.mjs sw scripts/translations/sw.json
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enPath = path.join(__dirname, '../messages/en.json');
const outPath = path.join(__dirname, 'translations/sw.json');
const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));

// Swahili overrides (keys not listed keep en value)
const sw = {
  nav_ariaEditor: 'Kihariri cha Markdown',
  nav_brand: 'Markdown Mtandaoni',
  nav_gettingStarted: 'Kuanza',
  nav_syntax: 'Sintaksia',
  nav_cheatSheet: 'Karatasi ya Mwongozo',
  nav_tools: 'Zana',
  nav_openEditor: 'Fungua Kihariri',
  nav_toggleMenu: 'Badilisha menyu',
  footer_tools: 'Zana',
  footer_about: 'Kuhusu Sisi',
  footer_contact: 'Wasiliana',
  footer_privacy: 'Sera ya Faragha',
  footer_terms: 'Masharti na Masharti',
  footer_rights: 'Haki zote zimehifadhiwa',
  home_title: 'Kihariri cha Markdown Mtandaoni - Rahisi, Haraka na Onyo la Moja kwa Moja | OnlineMarkdown.com',
  home_description: 'Andika na uangalie Markdown mara moja na Kihariri chetu cha Markdown Mtandaoni. Inasaidia GitHub Flavored Markdown (GFM), majedwali, vitalu vya msimbo na michoro ya Mermaid. Hakuna usakinishaji—anza kuandika tu!',
  home_keywords: 'kihariri markdown, markdown mtandaoni, angalia markdown, GitHub Flavored Markdown, Markdown kwa HTML, kihariri markdown moja kwa moja, vitalu vya msimbo, majedwali, michoro ya mermaid, zana ya markdown bure',
  home_ogTitle: 'Kihariri cha Markdown Mtandaoni - Rahisi, Haraka na Onyo la Moja kwa Moja',
  home_ogDescription: 'Andika na uangalie Markdown mara moja. Inasaidia GFM, majedwali, vitalu vya msimbo na Mermaid.',
  home_twitterTitle: 'Kihariri cha Markdown Mtandaoni',
  home_twitterDescription: 'Haraka, rahisi na uhariri wa Markdown moja kwa moja na msaada wa GitHub Flavored Markdown.',
  editor_file: 'Faili',
  editor_characters: 'herufi',
  editor_words: 'maneno',
  editor_paragraphs: 'vifungu',
  editor_untitled: 'Hakuna kichwa',
  toolbar_newFile: 'Faili Jipya',
  toolbar_hideSidebar: 'Ficha upau wa pembeni',
  toolbar_showSidebar: 'Onyesha upau wa pembeni',
  toolbar_hidePreview: 'Ficha onyo',
  toolbar_showPreview: 'Onyesha onyo',
  toolbar_undo: 'Tengua',
  toolbar_redo: 'Fanya tena',
  toolbar_headings: 'Vichwa',
  toolbar_heading1: 'Kichwa 1',
  toolbar_heading2: 'Kichwa 2',
  toolbar_heading3: 'Kichwa 3',
  toolbar_heading4: 'Kichwa 4',
  toolbar_heading5: 'Kichwa 5',
  toolbar_heading6: 'Kichwa 6',
  toolbar_bold: 'Nene',
  toolbar_italic: 'Italiki',
  toolbar_strikethrough: 'Piga mstari',
  toolbar_superscript: 'Herufi juu',
  toolbar_subscript: 'Herufi chini',
  toolbar_bulletList: 'Orodha ya vitone',
  toolbar_numberedList: 'Orodha yenye nambari',
  toolbar_quote: 'Nukuu',
  toolbar_code: 'Msimbo',
  toolbar_table: 'Jedwali',
  toolbar_link: 'Kiungo',
  toolbar_image: 'Picha',
  toolbar_print: 'Printi',
  toolbar_fullScreen: 'Skrini kamili',
  toolbar_exitFullScreen: 'Toka skrini kamili',
  toolbar_saveToDisk: 'Hifadhi kwenye diski',
  sidebar_files: 'Mafaili',
  sidebar_newFile: 'Faili Jipya',
  sidebar_noFiles: 'Hakuna mafaili bado. Unda faili jipya kuanza.',
  imageDialog_title: 'Ingiza Picha',
  imageDialog_url: 'URL',
  imageDialog_altText: 'Maandishi Mbadala',
  imageDialog_urlPlaceholder: 'https://example.com/image.jpg',
  imageDialog_altPlaceholder: 'Maelezo ya picha',
  imageDialog_cancel: 'Ghairi',
  imageDialog_insert: 'Ingiza',
  linkDialog_title: 'Ingiza Kiungo',
  linkDialog_text: 'Maandishi',
  linkDialog_url: 'URL',
  linkDialog_textPlaceholder: 'Maandishi ya kiungo',
  linkDialog_urlPlaceholder: 'https://example.com',
  linkDialog_cancel: 'Ghairi',
  linkDialog_insert: 'Ingiza',
  about_title: 'Kuhusu Sisi | OnlineMarkdown.com',
  about_description: 'Jifunze zaidi kuhusu OnlineMarkdown.com, zana ya bure, ya chanzo wazi iliyoundwa kurahisisha kuandika na sintaksia ya Markdown. Jiunge na jamii yetu leo.',
  about_h1: 'Kuhusu Sisi',
  about_intro1: 'Kihariri cha Markdown Mtandaoni (OnlineMarkdown.com) ni zana ya bure, ya chanzo wazi inayokusaidia kuandika na kuangalia maudhui ya Markdown kwa wakati halisi. Dhamira yetu ni kutoa kiolesura rahisi, cha angavu kwa kuunda hati zilizopangwa vyema kwa sintaksia ya Markdown.',
  about_intro2: 'Iwe unapoandika hati, kuunda maudhui kwa blogu yako, au kuchukua maelezo, kihariri chetu kinakurahisisha kuzingatia maudhui yako huku ukihakikisha mpangilio sahihi.',
  about_intro3: 'Tunaamini nguvu ya Markdown kama muundo wa kuandika ulimwenguni unaochanganya urahisi na uwezo wa kupangilia. Zana yetu imeundwa kufanya muundo huu uwe wa kila mtu.',
  about_storyTitle: 'Hadithi Yetu',
  about_story: 'Iliyoanzishwa na shauku ya kuandika safi na kwa ufanisi, Kihariri cha Markdown Mtandaoni kilizaliwa kutokana na tamaa ya kurahisisha jinsi watu wanavyounda na kushiriki mawazo yao. Baada ya muda, tumekua jamii hai ya waandishi, watengenezaji na wanaumbaji wanaotegemea Markdown kwa mwendo na urahisi wake.',
  about_missionTitle: 'Dhamira Yetu',
  about_mission1: 'Dhamira yetu ni kuwawezesha watumiaji na zana inayofanya kuandika na kupangilia maudhui iwe rahisi iwezekanavyo. Tunaahidi uboreshaji endelevu, unaoendeshwa na maoni ya jamii yetu na mabadiliko ya mazingira ya kuandika kidijitali.',
  about_mission2: 'Katika OnlineMarkdown.com, tunaamini ushirikiano wa chanzo wazi, uvumbuzi na demokrasia ya zana za kuandika kidijitali zenye ubora.',
  about_communityTitle: 'Jamii na Ushirikiano',
  about_community1: 'Sio kihariri tu—tuna jamii. Jukwaa letu linahimiza michango kutoka kwa watumiaji ulimwenguni kote, na tunathamini kila maoni na pendekezo. Kwa kufanya kazi pamoja, tunajenga zana inayofaa kila mtu.',
  about_community2: 'Iwe wewe ni mdevelopa mwenye uzoefu au mwandishi mwanafunzi, sauti yako ina maana kwetu. Jiunge na jamii yetu, shiriki mawazo yako na tusaidie kuunda mustakabali wa kuandika kidijitali.',
  about_whyTitle: 'Kwa nini kuchagua Kihariri cha Markdown Mtandaoni?',
  about_why1: 'Onyo la Markdown la wakati halisi kuangalia maudhui yako mara moja',
  about_why2: 'Kiolesura safi, kisicho na usumbufu kwa kuandika kwa umakini',
  about_why3: 'Mradi wa chanzo wazi na jamii hai ya wachangiaji',
  about_why4: 'Kihariri rahisi kutumia, kinachofaa kwa mahitaji yako yote ya kuandika',
  about_contactTitle: 'Wasiliana',
  about_contactPrefix: 'Una maswali au mapendekezo? Wasiliana nasi kupitia "',
  about_contactLink: 'Wasiliana',
  about_contactSuffix: '" ukurasa wetu.',
  contact_title: 'Wasiliana Nasi | OnlineMarkdown.com',
  contact_description: 'Wasiliana na timu inayosimamia OnlineMarkdown.com. Tunafurahi kujibu maswali yako au kusikiliza mapendekezo yako.',
  contact_h1: 'Wasiliana Nasi',
  contact_intro: 'Una maswali au mapendekezo? Tunapenda kusikia kutoka kwako! Unaweza kutufikia kupitia njia zifuatazo:',
  contact_github: 'GitHub',
  contact_githubPrefix: 'Tembelea "',
  contact_githubLink: 'hifadhi yetu ya GitHub',
  contact_githubSuffix: '" kutoa ripoti ya masuala au kuchangia mradi.',
  contact_email: 'Barua pepe',
  contact_emailPrefix: 'Tutumie barua pepe kwa "',
  contact_closing: 'Tunatarajia kujibu maombi yote ndani ya saa 24-48. Asante kwa nia yako kwa Kihariri cha Markdown Mtandaoni!',
  locale_sw: 'Swahili',
};

const out = {};
for (const key of Object.keys(en)) {
  if (key.startsWith('$')) continue;
  out[key] = sw[key] !== undefined ? sw[key] : en[key];
}

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n', 'utf8');
console.log('Built', outPath, 'with', Object.keys(sw).length, 'Swahili overrides.');
