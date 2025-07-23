export function loadSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["apiEndpoint", "model", "apiKey", "copyToClipboard"], (config) => {
      resolve({
        apiEndpoint: config.apiEndpoint || "https://openrouter.ai/api/v1",
        model: config.model || "mistralai/mistral-small-3.2-24b-instruct:free",
        apiKey: config.apiKey || null,
        copyToClipboard: config.copyToClipboard || false
      });
    });
  });
}
