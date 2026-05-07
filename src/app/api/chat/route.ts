import { OpenRouter } from "@openrouter/sdk";

const openrouterApiKey = process.env.OPENROUTER_API_KEY;

const openrouter = new OpenRouter({
  apiKey: openrouterApiKey ?? "",
});

const SYSTEM_PROMPT = `Anda adalah asisten AI resmi untuk IMPACT Inc., sebuah inkubator startup berbasis founder di Indonesia. 
Visi IMPACT Inc. adalah membangun ekosistem tangguh dengan fokus pada validasi, mentorship, akses permodalan, dan komunitas. 
Tim utama terdiri dari Yogi Saputra (CEO), Awang Dody Kardeli (CTO), dan Hilman Maulana (Core Team). 
TUGAS UTAMA: Anda HANYA boleh menjawab pertanyaan yang berhubungan dengan IMPACT Inc., program inkubasi, layanan startup, mentoring, akses investor, acara, dan ekosistem kami. 
ATURAN KETAT: Jika pengguna menanyakan hal-hal di luar topik ini (seperti pertanyaan umum, matematika, cuaca, politik, resep masakan, kode pemrograman, dll), Anda WAJIB menolak untuk menjawab dengan sopan dan menyatakan bahwa Anda adalah AI khusus untuk IMPACT Inc. dan hanya melayani informasi terkait inkubator kami. Jangan pernah melanggar aturan ini. Jawablah dengan ramah dan ringkas.`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const CHAT_REQUEST_TIMEOUT_MS = 45000;

const isChatMessage = (message: unknown): message is ChatMessage => {
  if (!message || typeof message !== "object") return false;
  const candidate = message as Partial<ChatMessage>;
  return (
    (candidate.role === "user" || candidate.role === "assistant") &&
    typeof candidate.content === "string"
  );
};

const textStreamResponse = (message: string) => {
  return new Response(message, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
};

const getChatErrorMessage = (error: unknown) => {
  const maybeError = error as { name?: unknown; statusCode?: unknown };

  if (maybeError.statusCode === 401) {
    return "Maaf, koneksi AI belum aktif karena API key OpenRouter belum valid.";
  }

  if (maybeError.name === "RequestTimeoutError" || maybeError.name === "RequestAbortedError") {
    return "Maaf, respons AI terlalu lama. Silakan coba lagi.";
  }

  return "Maaf, AI sedang tidak bisa dihubungi. Silakan coba lagi sebentar lagi.";
};

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const chatMessages = Array.isArray(messages)
      ? messages.filter(isChatMessage).slice(-50)
      : [];

    if (!openrouterApiKey) {
      return textStreamResponse("Maaf, koneksi AI belum dikonfigurasi. Tambahkan OPENROUTER_API_KEY yang valid di environment server.");
    }

    const stream = await openrouter.chat.send({
      chatRequest: {
        model: "qwen/qwen3.6-35b-a3b",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...chatMessages
        ],
        stream: true,
      }
    }, {
      timeoutMs: CHAT_REQUEST_TIMEOUT_MS,
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              controller.enqueue(new TextEncoder().encode(content));
            }
          }
        } catch (err) {
          console.error("Stream parsing error", err);
        } finally {
          controller.close();
        }
      }
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });

  } catch (error) {
    console.error("Chat API error:", error);
    return textStreamResponse(getChatErrorMessage(error));
  }
}
