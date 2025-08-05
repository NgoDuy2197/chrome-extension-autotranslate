// Emoji mapping cho các ngôn ngữ (copy từ popup.js)
const languageEmojis = {
  'vi': '🎋', 'en': '🌍', 'zh': '🀄', 'ja': '🗾', 'ko': '🎎',
  'fr': '🥖', 'de': '🍺', 'es': '🌮', 'it': '🍕', 'pt': '🏖️',
  'ru': '🐻', 'ar': '🏺', 'hi': '🕉️', 'th': '🐘', 'id': '🌺',
  'ms': '🌴', 'tl': '🌋', 'fa': '🌹', 'tr': '☕', 'nl': '🌷',
  'pl': '🥟', 'sv': '🦊', 'da': '🧀', 'no': '❄️', 'fi': '🫐',
  'hu': '🌶️', 'cs': '🍺', 'sk': '🏔️', 'ro': '🧄', 'bg': '🌹',
  'hr': '🏖️', 'sr': '🌲', 'sl': '🏔️', 'et': '🌲', 'lv': '🌊',
  'lt': '🌲', 'mt': '🌊', 'ga': '☘️', 'cy': '🐉', 'is': '🌋',
  'mk': '🏔️', 'sq': '🏔️', 'ka': '🍷', 'hy': '🏔️', 'az': '🔥',
  'kk': '🐎', 'ky': '🏔️', 'uz': '🌾', 'tg': '🏔️', 'mn': '🐎',
  'my': '🐘', 'km': '🏛️', 'lo': '🐘', 'ne': '🏔️', 'si': '🌺',
  'ur': '🌙', 'bn': '🌺', 'gu': '🌺', 'pa': '🌺', 'te': '🌺',
  'kn': '🌺', 'ml': '🌺', 'ta': '🌺', 'he': '🕯️', 'yi': '📚',
  'am': '☕', 'sw': '🦁', 'zu': '🦁', 'af': '🦁', 'xh': '🦁',
  'st': '🦁', 'tn': '🦁', 'ss': '🦁', 've': '🦁', 'ts': '🦁',
  'nr': '🦁', 'lg': '🦁', 'rw': '🦁', 'ak': '🦁', 'yo': '🦁',
  'ig': '🦁', 'ha': '🦁', 'ff': '🦁', 'wo': '🦁', 'sn': '🦁',
  'ny': '🦁', 'mg': '🦁', 'so': '🦁', 'om': '🦁', 'ti': '🦁',
  'aa': '🦁', 'auto': '🔍'
};

// Ngôn ngữ mặc định
let defaultLanguages = ['vi', 'en', 'zh'];

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "translateMulti") {
    const text = msg.text;
    
    // Lấy cấu hình ngôn ngữ từ storage
    chrome.storage.sync.get(['languages'], function(result) {
      let languages = defaultLanguages;
      
      if (result.languages) {
        const langList = result.languages.split(',').map(lang => lang.trim()).filter(lang => lang);
        if (langList.length > 0) {
          languages = langList.slice(0, 5); // Giới hạn 5 ngôn ngữ
        }
      }
      
      // Tạo promises cho tất cả ngôn ngữ
      const translatePromises = languages.map(lang => 
        translate(text, 'auto', lang)
      );
      
      Promise.all(translatePromises).then((translations) => {
        detectLanguage(text).then(detectedLang => {
          const results = {};
          languages.forEach((lang, index) => {
            results[lang] = translations[index];
          });
          results.detected = `[${detectedLang}] ${text}`;
          results.languages = languages;
          sendResponse(results);
        });
      }).catch(() => {
        const errorResults = {};
        languages.forEach(lang => {
          errorResults[lang] = "[Lỗi dịch]";
        });
        errorResults.detected = text;
        errorResults.languages = languages;
        sendResponse(errorResults);
      });
    });
    
    return true;
  }
});

async function translate(text, sl, tl) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sl}&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data[0].map(d => d[0]).join('');
}

async function detectLanguage(text) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=ld&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data[2]; // "en", "ja", ...
}
