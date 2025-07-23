function showLLMResponse(correctedText, originalText) {
  const existing = document.getElementById("llm-result-popup");
  if (existing) existing.remove();
  console.log('Diff object:', window.Diff);
  const diff = window.Diff.diffWords(originalText, correctedText);
  
  console.log(diff)

  const highlighted = diff.map(part => {
    if (part.added) {
      return `<span style="background-color: #2e7d32; color: white; padding: 1px 3px; border-radius: 3px;">${part.value}</span>`;
    } else if (part.removed) {
      return ''; // skip removed words or show with strikethrough if preferred
    }
    return part.value;
  }).join('');

  const popup = document.createElement("div");
  popup.id = "llm-result-popup";
  popup.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    max-width: 600px;
    max-height: 400px;
    overflow-y: auto;
    background: #1e1e1e;
    color: #fff;
    padding: 16px 20px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 999999;
    font-family: sans-serif;
    white-space: normal;
    word-break: break-word;
  `;

  popup.innerHTML = `
    <div style="font-weight:bold; margin-bottom: 10px;">✅ LLM Correction (highlighted):</div>
    <div>${highlighted}</div>
    <button style="
      position: absolute;
      top: 6px;
      right: 8px;
      background: transparent;
      border: none;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    " onclick="document.getElementById('llm-result-popup').remove()">×</button>
  `;

  document.body.appendChild(popup);

  setTimeout(() => popup.remove(), 15000);
}

window.showLLMResponse = showLLMResponse;
