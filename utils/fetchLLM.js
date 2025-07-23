export async function fetchWithRetry({ prompt, input, apiKey, apiEndpoint, model }, retries = 3, delay = 2500) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(`${apiEndpoint}/chat/completions`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: prompt },
            { role: "user", content: `Text: """\n${input}\n"""` }
          ]
        })
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}.`);
      const data = await res.json();
      return data.choices?.[0]?.message?.content;
    } catch (err) {
      console.warn(`Attempt ${attempt} failed:`, err.message);
      if (attempt < retries) await new Promise(res => setTimeout(res, delay*attempt));
      else throw err;
    }
  }
}
