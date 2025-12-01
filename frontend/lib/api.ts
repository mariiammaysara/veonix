// lib/api.ts
export async function analyzeImage(file: File) {
  const url = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const form = new FormData();
  form.append("file", file);

  const resp = await fetch(`${url}/analyze/`, {
    method: "POST",
    body: form,
  });

  if (!resp.ok) {
    const text = await resp.text();
    // try parse JSON error
    try {
      const j = JSON.parse(text);
      throw new Error(j.detail?.message || JSON.stringify(j));
    } catch {
      throw new Error(text || "Network error");
    }
  }

  return await resp.json();
}
