export function loadSettings() {
  return new Promise((resolve) => {
    chrome.storage.local.get(["apiEndpoint", "model", "apiKey", "copyToClipboard", "customPrompt"], (config) => {
      resolve({
        apiEndpoint: config.apiEndpoint || '',
        model: config.model || '',
        apiKey: config.apiKey || null,
        copyToClipboard: config.copyToClipboard || false,
        customPrompt: config.customPrompt || ''
      });
    });
  });
}
