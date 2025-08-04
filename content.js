let lastMouseX = 0
let lastMouseY = 0
let tooltipDiv = null

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
                    showTooltip(
                        res.detected,
                        res.vi,
                        res.zh,
                        res.en,
                        lastMouseX,
                        lastMouseY
                    )
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

function showTooltip(original, vietnamese, chinese, english, x, y) {
    if (tooltipDiv) tooltipDiv.remove()

    tooltipDiv = document.createElement("div")
    tooltipDiv.className = "my-translate-tooltip"

    let results = [
        // `<div style="margin-bottom: 10px;">🔍 ${original}</div>`,
        `<div style="margin-bottom: 10px;">🎋 ${vietnamese}</div>`,
        `<div style="margin-bottom: 10px;">🀄 ${chinese}</div>`,
        `<div style="margin-bottom: 10px;">🌍 ${english}</div>`,
    ]

    tooltipDiv.innerHTML = results.join("")

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
