chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "translateMulti") {
    const text = msg.text;
    Promise.all([
      translate(text, 'auto', 'vi'),
      translate(text, 'auto', 'zh'),
      translate(text, 'auto', 'en'),
    ]).then(([vi, zh, en]) => {
      detectLanguage(text).then(detectedLang => {
        sendResponse({ vi, zh, en, detected: `[${detectedLang}] ${text}` });
      });
    }).catch(() => {
      sendResponse({ vi: "[Lỗi dịch]", zh: "[Lỗi dịch]", en: "[Lỗi dịch]", detected: text });
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
