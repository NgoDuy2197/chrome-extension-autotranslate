let lastMouseX = 0
let lastMouseY = 0
let tooltipDiv = null

// Emoji mapping cho các ngôn ngữ
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

document.addEventListener("mouseup", (e) => {
    const selection = window.getSelection().toString().trim()

    // Nếu bôi đen trong tooltip thì bỏ qua
    if (e.target.closest(".my-translate-tooltip")) return

    // Nếu có bôi đen ngoài tooltip → xử lý dịch
    if (selection.length > 0) {
        lastMouseX = e.pageX
        lastMouseY = e.pageY

        chrome.runtime.sendMessage(
            { action: "translateMulti", text: selection },
            (res) => {
                if (res) {
                    showTooltip(res, lastMouseX, lastMouseY)
                }
            }
        )
    } else {
        // Nếu không còn bôi đen, ẩn tooltip
        if (tooltipDiv) {
            tooltipDiv.remove()
            tooltipDiv = null
        }
    }
})

// Lắng nghe cập nhật ngôn ngữ từ popup
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'updateLanguages') {
        // Có thể cập nhật UI nếu cần
        console.log('Languages updated:', msg.languages);
    }
});

function showTooltip(results, x, y) {
    if (tooltipDiv) tooltipDiv.remove()

    tooltipDiv = document.createElement("div")
    tooltipDiv.className = "my-translate-tooltip"

    const values = Object.values(languageEmojis)
    
    let resultsHTML = [
        `<div style="margin-bottom: 10px; font-weight: 500; color: #666;">${values[Math.floor(Math.random() * values.length)]}</div>`,
    ]
    
    // Hiển thị ngôn ngữ gốc được phát hiện
    // if (results.detected) {
    //     resultsHTML.push(`<div style="margin-bottom: 10px; font-weight: 500; color: #666;">🔍 ${results.detected}</div>`)
    // }
    
    // Hiển thị các bản dịch
    if (results.languages && results.languages.length > 0) {
        results.languages.forEach(lang => {
            if (results[lang]) {
                const emoji = languageEmojis[lang] || '🌐'
                resultsHTML.push(`<div style="margin-bottom: 10px;">${emoji} ${results[lang]}</div>`)
            }
        })
    }

    tooltipDiv.innerHTML = resultsHTML.join("")

    tooltipDiv.style.cssText = `
    position: absolute;
    top: ${y + 40}px;
    left: ${x + 40}px;
    background: #fefefe;
    border: 1px solid #ccc;
    padding: 12px 16px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    z-index: 99999;
    max-width: 360px;
    font-size: 15px;
    line-height: 1.5;
    color: #222;
    font-family: system-ui, sans-serif;
    transition: opacity 0.2s;
    user-select: text; /* Cho phép copy nội dung */
  `
    document.body.appendChild(tooltipDiv)
}
