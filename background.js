import { fetchWithRetry } from './utils/fetchLLM.js';
import { loadSettings } from './utils/settings.js';

const COMMANDS = {
  "check-grammar": {
    title: "LLM: Check grammar",
    prompt: `Correct the grammar, spelling, and punctuation of the following text.
Only output the corrected version. If the text is already correct, output it exactly as written.
Do not explain. Do not say anything like "It is already correct." Do not add quotation marks or extra lines. 
Respond in the same language as the input`
  },
  "summarize": {
    title: "LLM: Summarize",
    prompt: `Summarize the following text clearly and concisely. 
    Use proper grammar, spelling, and punctuation. Only output the summary. Do not explain your response. 
    Do not add quotation marks or extra lines. Respond in the same language as the input`
  },
  "explain": {
    title: "LLM: Explain",
    prompt: `Explain the following content clearly and simply. 
    Use proper grammar, spelling, and punctuation. Only output the explanation. 
    Do not add extra formatting, quotes, or commentary. Respond in the same language as the input
`
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

  const { apiKey, apiEndpoint, model, copyToClipboard, customPrompt } = await loadSettings();
  
  if (info.menuItemId === 'custom') command.prompt = customPrompt;

  const selectedText = info.selectionText;
  const prompt = command.prompt;

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
      func: (correctedText, originalText, commandKey) => {
        if (typeof window.showLLMResponse === 'function') {
          window.showLLMResponse(correctedText, originalText, commandKey);
        } else {
          alert("Error: showLLMResponse function is not available.");
        }
      },
      args: [result, selectedText, info.menuItemId]
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
