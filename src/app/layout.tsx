import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { AIChat } from "@/components/ui/ai-chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMPACT Inc. | Inkubator Startup & Ekosistem Inovasi",
  description: "IMPACT Inc. membantu startup bertumbuh dengan program inkubasi, akses mentor, jaringan investor, dan ekosistem kolaborasi berdampak.",
  icons: {
    icon: "/logo without name.png",
    apple: "/logo without name.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ThemeToggle />
          <AIChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
