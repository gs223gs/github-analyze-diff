import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/template/Providers";

export const metadata: Metadata = {
  title: "GitHub Stats Visualizer",
  description: "GitHub、Zenn、Qiita、AtCoderでの開発者活動を美しく可視化するツール",
  keywords: ["GitHub", "統計", "開発者", "プログラミング", "Zenn", "Qiita", "AtCoder"],
  authors: [{ name: "GitHub Stats Visualizer Team" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "GitHub Stats Visualizer",
    description: "GitHub、Zenn、Qiita、AtCoderでの開発者活動を美しく可視化するツール",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
