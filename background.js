import { fetchWithRetry } from './utils/fetchLLM.js';
import { loadSettings } from './utils/settings.js';

const COMMANDS = {
  "check-grammar": {
    title: "LLM: Check grammar",
    prompt: `Correct the grammar, spelling, and punctuation of the following text.
Only output the corrected version. If the text is already correct, output it exactly as written.
Do not explain. Do not say anything like "It is already correct." Do not add quotation marks or extra lines.`
  },
  "summarize": {
    title: "LLM: Summarize",
    prompt: "[PLACEHOLDER] Summarize the following content briefly:"
  },
  "explain": {
    title: "LLM: Explain",
    prompt: "[PLACEHOLDER] Explain the following content as if teaching a beginner:"
  },
  "custom": {
    title: "LLM: Custom",
    prompt: "[PLACEHOLDER] Custom behavior to be defined."
  }
};

chrome.runtime.onInstalled.addListener(() => {
  for (const [id, { title }] of Object.entries(COMMANDS)) {
    chrome.contextMenus.create({
      id,
      title,
      contexts: ["selection"]
    });
  }
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  const command = COMMANDS[info.menuItemId];
  if (!command) return;

  const selectedText = info.selectionText;
  const prompt = command.prompt;

  const { apiKey, apiEndpoint, model, copyToClipboard } = await loadSettings();

  if (!apiKey) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => alert("LLM API key not configured. Click the extension icon to set it.")
    });
    return;
  }

  try {
    const result = await fetchWithRetry({ prompt, input: selectedText, apiKey, apiEndpoint, model });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['diff.min.js', 'content.js']
    });

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (correctedText, originalText) => {
        if (typeof window.showLLMResponse === 'function') {
          window.showLLMResponse(correctedText, originalText);
        } else {
          alert("Error: showLLMResponse function is not available.");
        }
      },
      args: [result, selectedText]
    });

    if (copyToClipboard) {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => navigator.clipboard.writeText(text),
        args: [result]
      });
    }
  } catch (e) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (msg) => alert(`Failed to get a response from the LLM.\n${msg}`),
      args: [e.message]
    });
  }
});
