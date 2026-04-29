import { OpenRouter } from "@openrouter/sdk";
import { NextResponse } from "next/server";

const openrouter = new OpenRouter({
  apiKey: "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"
});

const SYSTEM_PROMPT = `Anda adalah asisten AI resmi untuk IMPACT Inc., sebuah inkubator startup berbasis founder di Indonesia. 
Visi IMPACT Inc. adalah membangun ekosistem tangguh dengan fokus pada validasi, mentorship, akses permodalan, dan komunitas. 
Tim utama terdiri dari Yogi Saputra (CEO), Awang Dody Kardeli (CTO), dan Hilman Maulana (Core Team). 
TUGAS UTAMA: Anda HANYA boleh menjawab pertanyaan yang berhubungan dengan IMPACT Inc., program inkubasi, layanan startup, mentoring, akses investor, acara, dan ekosistem kami. 
ATURAN KETAT: Jika pengguna menanyakan hal-hal di luar topik ini (seperti pertanyaan umum, matematika, cuaca, politik, resep masakan, kode pemrograman, dll), Anda WAJIB menolak untuk menjawab dengan sopan dan menyatakan bahwa Anda adalah AI khusus untuk IMPACT Inc. dan hanya melayani informasi terkait inkubator kami. Jangan pernah melanggar aturan ini. Jawablah dengan ramah dan ringkas.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const stream = await openrouter.chat.send({
      model: "qwen/qwen3.6-35b-a3b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      stream: true,
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
    return NextResponse.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
