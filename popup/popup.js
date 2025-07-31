document.addEventListener("DOMContentLoaded", () => {
  const endpointInput = document.getElementById("endpoint");
  const modelInput = document.getElementById("model");
  const modelList = document.getElementById("modelList");
  const providerSelect = document.getElementById("provider");
  const apikey = document.getElementById("apikey");
  const customPrompt = document.getElementById("customPrompt");
  const copyToClipboard = document.getElementById("copyToClipboard");
  const status = document.getElementById("status");
  const endpointContainer = document.getElementById("endpoint-container");
  const modelContainer = document.getElementById("model-container");

  // Hide endpoint and model at first
  endpointContainer.classList.add("hidden");
  modelContainer.classList.add("hidden");

  const PROVIDERS = {
    openai: {
      endpoint: "https://api.openai.com/v1",
      models: ["gpt-4o-mini", "gpt-4o", "gpt-4.1", "o1-mini"]
    },
    google: {
      endpoint: "https://generativelanguage.googleapis.com/v1beta/openai",
      models: ["gemini-2.0-flash-lite", "gemini-2.0-flash", "gemini-2.5-flash-lite", "gemini-2.5-flash", "gemini-2.5-pro"]
    },
    openrouter: {
      endpoint: "https://openrouter.ai/api/v1",
      models: [
        "qwen/qwen-2.5-72b-instruct:free",
        "mistralai/mistral-small-3.2-24b-instruct:free",
        "google/gemini-2.5-flash-lite",
        "google/gemini-2.5-flash",
        "openai/gpt-4.1",
        "openai/gpt-4.1-mini"
      ]
    },
    custom: {
      endpoint: "",
      models: []
    }
  };

  chrome.storage.local.get([
    "provider", "apiEndpoint", "model", "apiKey", "copyToClipboard", "customPrompt"
  ], (data) => {
    if (data.provider) providerSelect.value = data.provider;
    if (data.apiEndpoint) endpointInput.value = data.apiEndpoint;
    if (data.model) modelInput.value = data.model;
    if (data.apiKey) apikey.value = data.apiKey;
    if (data.copyToClipboard) copyToClipboard.checked = data.copyToClipboard;
    if (data.customPrompt) customPrompt.value = data.customPrompt;

    updateUIByProvider(data.provider);
  });

  providerSelect.addEventListener("change", () => {
    const provider = providerSelect.value;
    updateUIByProvider(provider);
  });

  document.getElementById("save").addEventListener("click", () => {
    const provider = providerSelect.value;
    let endpoint = endpointInput.value.trim();
    if (endpoint.endsWith("/")) endpoint = endpoint.slice(0, -1);

    chrome.storage.local.set({
      provider: provider,
      apiEndpoint: endpoint,
      model: modelInput.value,
      apiKey: apikey.value,
      customPrompt: customPrompt.value,
      copyToClipboard: copyToClipboard.checked
    }, () => {
      status.textContent = "✅ Saved!";
      setTimeout(() => status.textContent = "", 2000);
    });
  });

  function updateUIByProvider(provider) {
    const config = PROVIDERS[provider] || {};
    const showEndpoint = provider === "custom";
    const showModel = !!provider;

    endpointContainer.classList.toggle("hidden", !showEndpoint);
    modelContainer.classList.toggle("hidden", !showModel);
    if (!showEndpoint) endpointInput.value = config.endpoint || "";

    // Update model datalist
    modelList.innerHTML = "";
    (config.models || []).forEach(model => {
      const option = document.createElement("option");
      option.value = model;
      modelList.appendChild(option);
    });
  }
});