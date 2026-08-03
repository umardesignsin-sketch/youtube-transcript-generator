const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function getTranscript(url: string) {
  const res = await fetch(`${API_URL}/transcript`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  return res.json();
}