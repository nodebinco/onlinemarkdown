/**
 * Translations for extra locales: nav, footer, syntax (same keys per locale).
 * Used by translate-messages.mjs. Locales: zh-tw, ar, hi, id, pl, uk, ro, hu, cs, el, sv, da, no, fi, he, fa, bn, fil, bg, hr, sk, sr, ca, af, sw, ta, te, mr, gu, ur, pa, kn, ml, am, ha
 */

const SYNTAX_KEYS = [
  'syntax_title', 'syntax_description', 'syntax_keywords', 'syntax_h1', 'syntax_subtitle',
  'syntax_overviewTitle', 'syntax_overview1', 'syntax_overview2', 'syntax_headingsTitle', 'syntax_headingsIntro',
  'syntax_markdown', 'syntax_html', 'syntax_renderedOutput', 'syntax_paragraphsTitle', 'syntax_paragraphsIntro',
  'syntax_lineBreaksTitle', 'syntax_lineBreaksIntro', 'syntax_emphasisTitle', 'syntax_emphasisIntro',
  'syntax_boldTitle', 'syntax_boldIntro', 'syntax_italicTitle', 'syntax_italicIntro', 'syntax_boldItalicTitle', 'syntax_boldItalicIntro',
  'syntax_blockquotesTitle', 'syntax_blockquotesIntro', 'syntax_nestedBlockquotesTitle', 'syntax_nestedBlockquotesIntro',
  'syntax_listsTitle', 'syntax_listsIntro', 'syntax_orderedListsTitle', 'syntax_orderedListsIntro', 'syntax_unorderedListsTitle', 'syntax_unorderedListsIntro',
  'syntax_codeTitle', 'syntax_codeIntro', 'syntax_codeBlocksTitle', 'syntax_codeBlocksIntro',
  'syntax_horizontalRulesTitle', 'syntax_horizontalRulesIntro', 'syntax_linksTitle', 'syntax_linksIntro',
  'syntax_addingTitlesTitle', 'syntax_addingTitlesIntro', 'syntax_imagesTitle', 'syntax_imagesIntro',
  'syntax_escapingTitle', 'syntax_escapingIntro', 'syntax_escapingCharsTitle', 'syntax_escapingCharsIntro',
  'syntax_backslash', 'syntax_backtick', 'syntax_asterisk', 'syntax_underscore', 'syntax_curlyBraces', 'syntax_brackets', 'syntax_parentheses',
  'syntax_poundSign', 'syntax_plusSign', 'syntax_minusSign', 'syntax_dot', 'syntax_exclamationMark', 'syntax_pipe',
  'syntax_tablesTitle', 'syntax_tablesIntro', 'syntax_alignmentTitle', 'syntax_alignmentIntro',
  'syntax_alignLeft', 'syntax_alignCenter', 'syntax_alignRight', 'syntax_left', 'syntax_center', 'syntax_right',
];

const NAV_FOOTER_KEYS = [
  'nav_ariaEditor', 'nav_brand', 'nav_gettingStarted', 'nav_syntax', 'nav_cheatSheet', 'nav_tools', 'nav_openEditor', 'nav_toggleMenu',
  'footer_tools', 'footer_about', 'footer_contact', 'footer_privacy', 'footer_terms', 'footer_rights',
];

function makeTranslations(navFooter, syntaxList) {
  const nav = {};
  NAV_FOOTER_KEYS.forEach((k, i) => { nav[k] = navFooter[i]; });
  const syn = {};
  SYNTAX_KEYS.forEach((k, i) => { syn[k] = syntaxList[i]; });
  return { ...nav, ...syn };
}

// zh-tw: Traditional Chinese
const zhTw = makeTranslations(
  ['Markdown 編輯器', 'Online Markdown', '入門', '語法', 'Cheat Sheet', '工具', '開啟編輯器', '切換選單', '工具', '關於我們', '聯絡我們', '隱私權政策', '條款與條件', '版權所有'],
  ['Markdown 語法指南 | OnlineMarkdown.com', 'Markdown 語法完整指南，含標題、段落、格式、列表、程式碼區塊等。學習用 Markdown 格式化文件。', 'markdown, 語法, 指南, 格式, 文件, 編輯器, 標題, 列表, 程式碼, 連結, 圖片, 表格', 'Markdown 語法指南', '格式化文件所需的基本語法', '概覽', 'Markdown 是一種輕量標記語言，可為純文字文件加入格式。由 John Gruber 於 2004 年創建，現為世上最普及的標記語言之一。', '使用 Markdown 與所見即所得編輯器不同。在如 Word 的程式中，你按鈕即可格式化文字；Markdown 則是在文字中加入語法標記來標示格式。', '標題', '建立標題時，在文字前加上 #，數量對應級別。例如三級標題用 ###。', 'Markdown', 'HTML', '轉譯結果', '段落', '用空行分隔一行或多行文字以建立段落。', '換行', '要換行時，在行尾加兩個以上空格再按 Enter。', '強調', '可將文字設為粗體或斜體以強調。', '粗體', '粗體：在文字前後各加 ** 或 __。', '斜體', '斜體：在文字前後各加 * 或 _。', '粗體與斜體', '同時粗體與斜體：在文字前後各加 *** 或 ___。', '引用', '在段落前加 > 建立引用區塊。', '巢狀引用', '引用可巢狀，在要巢狀的段落前加 >>。', '列表', '可建立有序與無序列表。', '有序列表', '有序列表：每行前加數字與句點，建議從 1 開始。', '無序列表', '無序列表：在每行前加 -、* 或 +。', '程式碼', '將文字標記為程式碼時，用反引号 ` 包住。', '程式碼區塊', '程式碼區塊：每行縮排至少四格或一 Tab，或用 ``` 包住區塊。', '水平線', '單獨一行使用三個以上 ***、--- 或 ___ 可產生水平線。', '連結', '連結：[文字](網址)，例如 [Duck Duck Go](https://duckduckgo.com)。', '加入標題', '可為連結加 title，滑鼠懸停時顯示。在網址後用引號加入。', '圖片', '圖片：! 後接 [替代文字](圖片網址)，可選在後加引號標題。', '跳脫字元', '要顯示會被當成格式的字元時，在其前加反斜線 \\。', '可跳脫的字元', '可用反斜線跳脫以下字元：', '反斜線', '反引号', '星號', '底線', '大括號', '方括號', '括號', '井字號', '加號', '減號（連字號）', '點', '驚嘆號', '豎線', '表格', '表格：用 --- 做欄標題、| 分隔欄位，可選在兩端加 |。', '對齊', '在標題列的 --- 左、右或兩側加 : 可設定欄位左、右或置中對齊。', '靠左', '置中', '靠右', '左', '中', '右']
);

// ar: Arabic
const ar = makeTranslations(
  ['محرر Markdown', 'Online Markdown', 'البداية', 'البنية', 'Cheat Sheet', 'أدوات', 'فتح المحرر', 'تبديل القائمة', 'أدوات', 'من نحن', 'اتصل', 'سياسة الخصوصية', 'الشروط والأحكام', 'جميع الحقوق محفوظة'],
  ['دليل بنية Markdown | OnlineMarkdown.com', 'دليل شامل لبنية Markdown يشمل العناوين والفقرات والتنسيق والقوائم وكتل الكود والمزيد. تعلم تنسيق المستندات بـ Markdown.', 'markdown, بنية, دليل, تنسيق, توثيق, محرر نصوص, محرر markdown, عناوين, قوائم, كتل كود, روابط, صور, جداول', 'دليل بنية Markdown', 'البنية الأساسية لتنسيق مستنداتك', 'نظرة عامة', 'Markdown لغة ترميز خفيفة لإضافة عناصر تنسيق لنصوص بسيطة. أنشأها John Gruber عام 2004 وهي اليوم من أكثر لغات الترميز استخداماً.', 'استخدام Markdown يختلف عن محرر WYSIWYG. في برنامج مثل Word تضغط أزراراً للتنسيق؛ في Markdown تضيف رموزاً في النص لتمييز ما يظهر بشكل مختلف.', 'العناوين', 'لإنشاء عنوان أضف # أمام الكلمة أو العبارة. عدد # يحدد المستوى، مثلاً ### للعنوان من المستوى الثالث.', 'Markdown', 'HTML', 'المخرجات المعرضة', 'الفقرات', 'لفصل فقرات استخدم سطراً فارغاً بين الأسطر.', 'أسطر جديدة', 'لأسطر جديدة انتهِ السطر بمسافتين أو أكثر ثم Enter.', 'التأكيد', 'يمكنك التأكيد بجعل النص عريضاً أو مائلاً.', 'عريض', 'لنص عريض: ** أو __ قبل وبعد الكلمة أو العبارة.', 'مائل', 'لنص مائل: * أو _ قبل وبعد الكلمة أو العبارة.', 'عريض ومائل', 'للجمع: *** أو ___ قبل وبعد النص.', 'اقتباس', 'لاقتباس أضف > أمام الفقرة.', 'اقتباس متداخل', 'الاقتباسات يمكن تداخلها. أضف >> أمام الفقرة المراد تداخلها.', 'القوائم', 'يمكن تنظيم العناصر في قوائم مرقبة أو نقطية.', 'قوائم مرقبة', 'قائمة مرقبة: أرقام متبوعة بنقطة في بداية كل سطر، يفضل البدء بـ 1.', 'قوائم نقطية', 'قائمة نقطية: - أو * أو + في بداية كل سطر.', 'كود', 'لتمييز كود ضع النص بين `.', 'كتل كود', 'لكتلة كود: Indent أربع مسافات أو Tab، أو ``` قبل وبعد الكتلة.', 'خطوط أفقية', 'ثلاثة أو أكثر من *** أو --- أو ___ في سطر لوحده يعطي خطاً أفقياً.', 'روابط', 'رابط: [النص](الرابط)، مثلاً [Duck Duck Go](https://duckduckgo.com).', 'إضافة عناوين', 'يمكن إضافة title للرابط يظهر عند التمرير. ضعه بين علامتي تنصيص بعد الرابط.', 'صور', 'صورة: ! ثم [نص بديل](رابط الصورة)، واختيارياً عنوان بين علامتي تنصيص.', 'حرف الهروب', 'لعرض حرف يُستخدم للتنسيق ضع \\ قبله.', 'أحرف يمكن تهريبها', 'يمكن استخدام \\ لتهريب الأحرف التالية:', 'خط مائل عكسي', 'backtick', 'نجمة', 'شرطة سفلية', 'أقواس معقوفة', 'أقواس', 'قوسين', 'علامة #', 'علامة +', 'علامة - (وصلة)', 'نقطة', 'علامة تعجب', 'أنبوب', 'جداول', 'جدول: --- للرأس و | لفصل الأعمدة، واختيارياً | في الطرفين.', 'المحاذاة', 'إضافة : لليسار أو لليمين أو كلا جانبي --- في صف الرأس لمحاذاة الأعمدة.', 'محاذاة لليسار', 'محاذاة للوسط', 'محاذاة لليمين', 'يسار', 'وسط', 'يمين']
);

// hi: Hindi
const hi = makeTranslations(
  ['Markdown एडिटर', 'Online Markdown', 'शुरुआत', 'सिंटैक्स', 'Cheat Sheet', 'टूल्स', 'एडिटर खोलें', 'मेन्यू टॉगल करें', 'टूल्स', 'हमारे बारे में', 'संपर्क', 'गोपनीयता नीति', 'नियम और शर्तें', 'सर्वाधिकार सुरक्षित'],
  ['Markdown सिंटैक्स गाइड | OnlineMarkdown.com', 'Markdown सिंटैक्स की पूरी गाइड: हेडिंग, पैराग्राफ, फॉर्मैटिंग, लिस्ट, कोड ब्लॉक आदि। Markdown से दस्तावेज़ फॉर्मैट करना सीखें।', 'markdown, सिंटैक्स, गाइड, फॉर्मैटिंग, डॉक्यूमेंटेशन, टेक्स्ट एडिटर, हेडिंग, लिस्ट, कोड ब्लॉक, लिंक, इमेज, टेबल', 'Markdown सिंटैक्स गाइड', 'अपने दस्तावेज़ों को फॉर्मैट करने के लिए ज़रूरी सिंटैक्स', 'अवलोकन', 'Markdown एक हल्की मार्कअप भाषा है जिससे आप प्लेन टेक्स्ट में फॉर्मैटिंग जोड़ सकते हैं। 2004 में John Gruber द्वारा बनाई गई, अब दुनिया की सबसे लोकप्रिय मार्कअप भाषाओं में से एक है।', 'Markdown इस्तेमाल करना WYSIWYG एडिटर से अलग है। Word जैसे ऐप में बटन दबाते हैं; Markdown में आप टेक्स्ट में सिंटैक्स जोड़ते हैं।', 'हेडिंग', 'हेडिंग बनाने के लिए शब्द या वाक्यांश के आगे # लगाएं। # की संख्या स्तर बताती है, जैसे ### तीसरे स्तर के लिए।', 'Markdown', 'HTML', 'रेंडर आउटपुट', 'पैराग्राफ', 'पैराग्राफ के लिए एक या ज़्यादा पंक्तियों के बीच खाली लाइन रखें।', 'लाइन ब्रेक', 'नई लाइन के लिए पंक्ति के अंत में दो या ज़्यादा स्पेस लगाकर Enter दबाएं।', 'जोर', 'टेक्स्ट को बोल्ड या इटैलिक कर जोर दे सकते हैं।', 'बोल्ड', 'बोल्ड के लिए शब्द के आगे-पीछे ** या __।', 'इटैलिक', 'इटैलिक के लिए आगे-पीछे * या _।', 'बोल्ड और इटैलिक', 'दोनों के लिए आगे-पीछे *** या ___।', 'ब्लॉकक्वोट', 'ब्लॉकक्वोट के लिए पैराग्राफ के आगे > लगाएं।', 'नेस्टेड ब्लॉकक्वोट', 'ब्लॉकक्वोट नेस्ट कर सकते हैं। नेस्ट करने वाली पंक्ति के आगे >>।', 'लिस्ट', 'आइटम को ऑर्डर्ड या अनऑर्डर्ड लिस्ट में व्यवस्थित कर सकते हैं।', 'ऑर्डर्ड लिस्ट', 'ऑर्डर्ड लिस्ट: हर लाइन की शुरुआत में नंबर और पीरियड, एक से शुरू करें।', 'अनऑर्डर्ड लिस्ट', 'अनऑर्डर्ड लिस्ट: हर लाइन के आगे - या * या +।', 'कोड', 'कोड दिखाने के लिए टेक्स्ट को ` में रखें।', 'कोड ब्लॉक', 'कोड ब्लॉक: हर लाइन को चार स्पेस या एक टैब से इंडेंट करें, या ``` से घेरें।', 'हॉरिजॉन्टल रूल', 'अकेली लाइन में *** या --- या ___ तीन या ज़्यादा बार लिखें।', 'लिंक', 'लिंक: [टेक्स्ट](URL), जैसे [Duck Duck Go](https://duckduckgo.com)।', 'टाइटल जोड़ना', 'लिंक के लिए टाइटल ऐड कर सकते हैं, हॉवर पर दिखेगा। URL के बाद कोट्स में लिखें।', 'इमेज', 'इमेज: ! फिर [alt टेक्स्ट](इमेज URL), वैकल्पिक रूप से कोट्स में टाइटल।', 'एस्केप करने वाले कैरेक्टर', 'जो कैरेक्टर फॉर्मैटिंग के लिए इस्तेमाल होता है उसे लिटरल दिखाने के लिए उसके आगे \\ लगाएं।', 'एस्केप हो सकने वाले कैरेक्टर', 'निम्न कैरेक्टरों को एस्केप करने के लिए \\ इस्तेमाल कर सकते हैं:', 'बैकस्लैश', 'बैकटिक', 'ऐस्टरिस्क', 'अंडरस्कोर', 'कर्ली ब्रेसिज़', 'ब्रैकेट्स', 'पैरेंथेसिस', 'पाउंड साइन', 'प्लस साइन', 'माइनस साइन (हाइफन)', 'डॉट', 'एक्सक्लेमेशन मार्क', 'पाइप', 'टेबल', 'टेबल: कॉलम हेडर के लिए --- और कॉलम अलग करने के लिए |, वैकल्पिक रूप से दोनों छोर पर |।', 'अलाइनमेंट', 'हेडर रो में --- के बाएँ, दाएँ या दोनों तरफ : लगाकर कॉलम बाएँ/दाएँ/सेंटर अलाइन कर सकते हैं।', 'बाएँ अलाइन', 'केंद्र अलाइन', 'दाएँ अलाइन', 'बाएँ', 'केंद्र', 'दाएँ']
);

// id: Indonesian
const id = makeTranslations(
  ['Editor Markdown', 'Online Markdown', 'Memulai', 'Sintaks', 'Cheat Sheet', 'Alat', 'Buka Editor', 'Alihkan menu', 'Alat', 'Tentang Kami', 'Kontak', 'Kebijakan Privasi', 'Syarat & Ketentuan', 'Hak cipta dilindungi'],
  ['Panduan Sintaks Markdown | OnlineMarkdown.com', 'Panduan lengkap sintaks Markdown: judul, paragraf, pemformatan, daftar, blok kode, dan lainnya. Pelajari memformat dokumen dengan Markdown.', 'markdown, sintaks, panduan, pemformatan, dokumentasi, editor teks, editor markdown, judul, daftar, blok kode, tautan, gambar, tabel', 'Panduan Sintaks Markdown', 'Sintaks penting untuk memformat dokumen Anda', 'Ringkasan', 'Markdown adalah bahasa markup ringan untuk menambah pemformatan pada teks biasa. Dibuat John Gruber tahun 2004, kini salah satu bahasa markup paling populer di dunia.', 'Menggunakan Markdown berbeda dari editor WYSIWYG. Di aplikasi seperti Word Anda mengklik tombol; di Markdown Anda menambah sintaks pada teks.', 'Judul', 'Untuk judul, tambahkan # di depan kata atau frasa. Jumlah # sesuai tingkat, misalnya ### untuk tingkat tiga.', 'Markdown', 'HTML', 'Output yang Diterjemahkan', 'Paragraf', 'Untuk paragraf, pisahkan satu atau lebih baris teks dengan baris kosong.', 'Baris Baru', 'Untuk baris baru, akhiri baris dengan dua spasi atau lebih lalu Enter.', 'Penekanan', 'Anda bisa menekankan dengan teks tebal atau miring.', 'Tebal', 'Tebal: ** atau __ sebelum dan sesudah kata atau frasa.', 'Miring', 'Miring: * atau _ sebelum dan sesudah kata atau frasa.', 'Tebal dan Miring', 'Keduanya: *** atau ___ sebelum dan sesudah teks.', 'Kutipan Blok', 'Untuk kutipan blok tambahkan > di depan paragraf.', 'Kutipan Blok Bersarang', 'Kutipan blok bisa bersarang. Tambahkan >> di depan paragraf yang ingin disarangkan.', 'Daftar', 'Anda bisa mengatur item dalam daftar bernomor atau tidak bernomor.', 'Daftar Bernomor', 'Daftar bernomor: nomor diikuti titik di awal setiap baris, mulailah dari satu.', 'Daftar Tidak Bernomor', 'Daftar tidak bernomor: - atau * atau + di awal setiap baris.', 'Kode', 'Untuk menandai kode, bungkus teks dengan backtick `.', 'Blok Kode', 'Blok kode: indent setiap baris minimal empat spasi atau satu tab, atau bungkus dengan ```.', 'Garis Horizontal', 'Tiga atau lebih *** atau --- atau ___ di baris terpisah menghasilkan garis horizontal.', 'Tautan', 'Tautan: [teks](URL), misalnya [Duck Duck Go](https://duckduckgo.com).', 'Menambah Judul', 'Anda bisa menambah title pada tautan yang muncul saat hover. Tambahkan dalam tanda petik setelah URL.', 'Gambar', 'Gambar: ! lalu [teks alt](URL gambar), opsional judul dalam tanda petik.', 'Karakter Escape', 'Untuk menampilkan karakter yang dipakai untuk pemformatan, tambahkan \\ di depannya.', 'Karakter yang Bisa Di-escape', 'Anda bisa memakai \\ untuk meng-escape karakter berikut:', 'backslash', 'backtick', 'asterisk', 'garis bawah', 'kurung kurawal', 'kurung siku', 'tanda kurung', 'tanda pagar', 'tanda plus', 'tanda minus (strip)', 'titik', 'tanda seru', 'pipa', 'Tabel', 'Tabel: --- untuk header kolom dan | untuk memisahkan kolom, opsional | di kedua ujung.', 'Perataan', 'Tambahkan : di kiri, kanan, atau kedua sisi --- pada baris header untuk meratakan kolom kiri/tengah/kanan.', 'Rata Kiri', 'Rata Tengah', 'Rata Kanan', 'kiri', 'tengah', 'kanan']
);

export const extraLocaleTranslations = {
  'zh-tw': zhTw,
  'ar': ar,
  'hi': hi,
  'id': id,
};
