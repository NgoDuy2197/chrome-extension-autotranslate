// Emoji mapping cho các ngôn ngữ
const languageEmojis = {
  'vi': '🎋', // Việt Nam - cây tre
  'en': '🌍', // English - quả địa cầu
  'zh': '🀄', // Chinese - mahjong
  'ja': '🗾', // Japanese - bản đồ Nhật
  'ko': '🎎', // Korean - búp bê Nhật
  'fr': '🥖', // French - bánh mì
  'de': '🍺', // German - bia
  'es': '🌮', // Spanish - taco
  'it': '🍕', // Italian - pizza
  'pt': '🏖️', // Portuguese - bãi biển
  'ru': '🐻', // Russian - gấu
  'ar': '🏺', // Arabic - bình cổ
  'hi': '🕉️', // Hindi - om
  'th': '🐘', // Thai - voi
  'id': '🌺', // Indonesian - hoa
  'ms': '🌴', // Malay - cây dừa
  'tl': '🌋', // Tagalog - núi lửa
  'fa': '🌹', // Persian - hoa hồng
  'tr': '☕', // Turkish - trà
  'nl': '🌷', // Dutch - hoa tulip
  'pl': '🥟', // Polish - pierogi
  'sv': '🦊', // Swedish - cáo
  'da': '🧀', // Danish - phô mai
  'no': '❄️', // Norwegian - tuyết
  'fi': '🫐', // Finnish - việt quất
  'hu': '🌶️', // Hungarian - ớt
  'cs': '🍺', // Czech - bia
  'sk': '🏔️', // Slovak - núi
  'ro': '🧄', // Romanian - tỏi
  'bg': '🌹', // Bulgarian - hoa hồng
  'hr': '🏖️', // Croatian - bãi biển
  'sr': '🌲', // Serbian - cây thông
  'sl': '🏔️', // Slovenian - núi
  'et': '🌲', // Estonian - cây thông
  'lv': '🌊', // Latvian - biển
  'lt': '🌲', // Lithuanian - cây thông
  'mt': '🌊', // Maltese - biển
  'ga': '☘️', // Irish - cỏ ba lá
  'cy': '🐉', // Welsh - rồng
  'is': '🌋', // Icelandic - núi lửa
  'mk': '🏔️', // Macedonian - núi
  'sq': '🏔️', // Albanian - núi
  'ka': '🍷', // Georgian - rượu
  'hy': '🏔️', // Armenian - núi
  'az': '🔥', // Azerbaijani - lửa
  'kk': '🐎', // Kazakh - ngựa
  'ky': '🏔️', // Kyrgyz - núi
  'uz': '🌾', // Uzbek - lúa mì
  'tg': '🏔️', // Tajik - núi
  'mn': '🐎', // Mongolian - ngựa
  'my': '🐘', // Burmese - voi
  'km': '🏛️', // Khmer - đền
  'lo': '🐘', // Lao - voi
  'ne': '🏔️', // Nepali - núi
  'si': '🌺', // Sinhala - hoa
  'ur': '🌙', // Urdu - trăng
  'bn': '🌺', // Bengali - hoa
  'gu': '🌺', // Gujarati - hoa
  'pa': '🌺', // Punjabi - hoa
  'te': '🌺', // Telugu - hoa
  'kn': '🌺', // Kannada - hoa
  'ml': '🌺', // Malayalam - hoa
  'ta': '🌺', // Tamil - hoa
  'he': '🕯️', // Hebrew - nến
  'yi': '📚', // Yiddish - sách
  'am': '☕', // Amharic - cà phê
  'sw': '🦁', // Swahili - sư tử
  'zu': '🦁', // Zulu - sư tử
  'af': '🦁', // Afrikaans - sư tử
  'xh': '🦁', // Xhosa - sư tử
  'st': '🦁', // Southern Sotho - sư tử
  'tn': '🦁', // Tswana - sư tử
  'ss': '🦁', // Swati - sư tử
  've': '🦁', // Venda - sư tử
  'ts': '🦁', // Tsonga - sư tử
  'nr': '🦁', // Northern Sotho - sư tử
  'lg': '🦁', // Ganda - sư tử
  'rw': '🦁', // Kinyarwanda - sư tử
  'ak': '🦁', // Akan - sư tử
  'yo': '🦁', // Yoruba - sư tử
  'ig': '🦁', // Igbo - sư tử
  'ha': '🦁', // Hausa - sư tử
  'ff': '🦁', // Fulah - sư tử
  'wo': '🦁', // Wolof - sư tử
  'sn': '🦁', // Shona - sư tử
  'ny': '🦁', // Chichewa - sư tử
  'mg': '🦁', // Malagasy - sư tử
  'so': '🦁', // Somali - sư tử
  'om': '🦁', // Oromo - sư tử
  'ti': '🦁', // Tigrinya - sư tử
  'aa': '🦁', // Afar - sư tử
  'auto': '🔍' // Auto detect
};

// Tên ngôn ngữ
const languageNames = {
  'vi': 'Tiếng Việt',
  'en': 'English',
  'zh': '中文',
  'ja': '日本語',
  'ko': '한국어',
  'fr': 'Français',
  'de': 'Deutsch',
  'es': 'Español',
  'it': 'Italiano',
  'pt': 'Português',
  'ru': 'Русский',
  'ar': 'العربية',
  'hi': 'हिन्दी',
  'th': 'ไทย',
  'id': 'Bahasa Indonesia',
  'ms': 'Bahasa Melayu',
  'tl': 'Tagalog',
  'fa': 'فارسی',
  'tr': 'Türkçe',
  'nl': 'Nederlands',
  'pl': 'Polski',
  'sv': 'Svenska',
  'da': 'Dansk',
  'no': 'Norsk',
  'fi': 'Suomi',
  'hu': 'Magyar',
  'cs': 'Čeština',
  'sk': 'Slovenčina',
  'ro': 'Română',
  'bg': 'Български',
  'hr': 'Hrvatski',
  'sr': 'Српски',
  'sl': 'Slovenščina',
  'et': 'Eesti',
  'lv': 'Latviešu',
  'lt': 'Lietuvių',
  'mt': 'Malti',
  'ga': 'Gaeilge',
  'cy': 'Cymraeg',
  'is': 'Íslenska',
  'mk': 'Македонски',
  'sq': 'Shqip',
  'ka': 'ქართული',
  'hy': 'Հայերեն',
  'az': 'Azərbaycan',
  'kk': 'Қазақ',
  'ky': 'Кыргызча',
  'uz': 'O'zbek',
  'tg': 'Тоҷикӣ',
  'mn': 'Монгол',
  'my': 'မြန်မာ',
  'km': 'ខ្មែរ',
  'lo': 'ລາວ',
  'ne': 'नेपाली',
  'si': 'සිංහල',
  'ur': 'اردو',
  'bn': 'বাংলা',
  'gu': 'ગુજરાતી',
  'pa': 'ਪੰਜਾਬੀ',
  'te': 'తెలుగు',
  'kn': 'ಕನ್ನಡ',
  'ml': 'മലയാളം',
  'ta': 'தமிழ்',
  'he': 'עברית',
  'yi': 'יידיש',
  'am': 'አማርኛ',
  'sw': 'Kiswahili',
  'zu': 'isiZulu',
  'af': 'Afrikaans',
  'xh': 'isiXhosa',
  'st': 'Sesotho',
  'tn': 'Setswana',
  'ss': 'siSwati',
  've': 'Tshivenda',
  'ts': 'Xitsonga',
  'nr': 'Sesotho sa Leboa',
  'lg': 'Luganda',
  'rw': 'Kinyarwanda',
  'ak': 'Akan',
  'yo': 'Yorùbá',
  'ig': 'Igbo',
  'ha': 'Hausa',
  'ff': 'Fulfulde',
  'wo': 'Wolof',
  'sn': 'chiShona',
  'ny': 'Chichewa',
  'mg': 'Malagasy',
  'so': 'Soomaali',
  'om': 'Afaan Oromoo',
  'ti': 'ትግርኛ',
  'aa': 'Afar',
  'auto': 'Tự động'
};

document.addEventListener('DOMContentLoaded', function() {
  const languagesInput = document.getElementById('languages');
  const saveBtn = document.getElementById('saveBtn');
  const statusDiv = document.getElementById('status');
  const previewContent = document.getElementById('previewContent');

  // Load cấu hình hiện tại
  chrome.storage.sync.get(['languages'], function(result) {
    if (result.languages) {
      languagesInput.value = result.languages;
      updatePreview();
    }
  });

  // Cập nhật preview khi nhập
  languagesInput.addEventListener('input', updatePreview);

  // Lưu cấu hình
  saveBtn.addEventListener('click', function() {
    const languages = languagesInput.value.trim();
    
    if (!languages) {
      showStatus('Vui lòng nhập ít nhất một ngôn ngữ', 'error');
      return;
    }

    const langList = languages.split(',').map(lang => lang.trim()).filter(lang => lang);
    
    if (langList.length > 5) {
      showStatus('Tối đa chỉ được 5 ngôn ngữ', 'error');
      return;
    }

    if (langList.length === 0) {
      showStatus('Vui lòng nhập ít nhất một ngôn ngữ', 'error');
      return;
    }

    chrome.storage.sync.set({
      languages: languages
    }, function() {
      showStatus('Đã lưu cấu hình thành công!', 'success');
      
      // Thông báo cho content script cập nhật
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (tabs[0]) {
          chrome.tabs.sendMessage(tabs[0].id, {
            action: 'updateLanguages',
            languages: langList
          });
        }
      });
    });
  });

  function updatePreview() {
    const languages = languagesInput.value.trim();
    const langList = languages.split(',').map(lang => lang.trim()).filter(lang => lang);
    
    let previewHTML = '';
    
    if (langList.length === 0) {
      previewHTML = '<div class="preview-item"><span class="preview-emoji">❌</span><span class="preview-lang">Chưa có ngôn ngữ nào</span></div>';
    } else {
      langList.slice(0, 5).forEach(lang => {
        const emoji = languageEmojis[lang] || '🌐';
        const name = languageNames[lang] || lang;
        previewHTML += `<div class="preview-item">
          <span class="preview-emoji">${emoji}</span>
          <span class="preview-lang">${name} (${lang})</span>
        </div>`;
      });
      
      if (langList.length > 5) {
        previewHTML += '<div class="preview-item"><span class="preview-emoji">⚠️</span><span class="preview-lang">Chỉ hiển thị 5 ngôn ngữ đầu tiên</span></div>';
      }
    }
    
    previewContent.innerHTML = previewHTML;
  }

  function showStatus(message, type) {
    statusDiv.textContent = message;
    statusDiv.className = `status ${type}`;
    
    setTimeout(() => {
      statusDiv.className = 'status';
    }, 3000);
  }
}); 