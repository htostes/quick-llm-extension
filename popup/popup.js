document.addEventListener("DOMContentLoaded", () => {
  const endpoint = document.getElementById("endpoint");
  const model = document.getElementById("model");
  const apikey = document.getElementById("apikey");
  const status = document.getElementById("status");
  const copyToClipboard = document.getElementById("copyToClipboard");
  const customPrompt = document.getElementById('customPrompt');

  chrome.storage.local.get(["apiEndpoint", "model", "apiKey", "copyToClipboard", "customPrompt"], (data) => {
    endpoint.value = data.apiEndpoint || 'https://openrouter.ai/api/v1';
    model.value = data.model || 'mistralai/mistral-small-3.2-24b-instruct:free';
    apikey.value = data.apiKey || "";
    copyToClipboard.checked = data.copyToClipboard || false;
    customPrompt.value = data.customPrompt || '';
  });

  document.getElementById("save").addEventListener("click", () => {
    chrome.storage.local.set({
      apiEndpoint: endpoint.value,
      model: model.value,
      apiKey: apikey.value,
      copyToClipboard: copyToClipboard.checked,
      customPrompt: customPrompt.value
    }, () => {
      status.textContent = "Saved!";
      setTimeout(() => status.textContent = "", 2000);
    });
  });
});
