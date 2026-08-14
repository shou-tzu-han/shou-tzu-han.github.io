import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const themeScript = `
  (function () {
    try {
      var stored = localStorage.getItem("theme");
      var theme = stored === "light" || stored === "dark"
        ? stored
        : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      document.documentElement.dataset.theme = theme;
    } catch (error) {
      document.documentElement.dataset.theme = "light";
    }
  })();
`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shou-Tzu Han | Trustworthy AI Researcher",
  description:
    "Research in trustworthy AI, LLM robustness, mechanistic interpretability, agentic retrieval, and human-centered AI.",
  authors: [{ name: "Shou-Tzu Han" }],
  keywords: [
    "Shou-Tzu Han",
    "Trustworthy AI",
    "LLM robustness",
    "mechanistic interpretability",
    "agentic retrieval",
    "Wayne State University",
  ],
  openGraph: {
    title: "Shou-Tzu Han | Trustworthy AI Researcher",
    description:
      "Research in LLM robustness, mechanistic interpretability, and agentic retrieval.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Shou-Tzu Han — Trustworthy AI, LLM Reasoning, Agentic Retrieval",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shou-Tzu Han | Trustworthy AI Researcher",
    description:
      "Research in LLM robustness, mechanistic interpretability, and agentic retrieval.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
