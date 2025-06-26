import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ユーザー統計 - GitHub Stats Visualizer",
  description: "GitHubユーザーの詳細な統計情報と活動履歴を表示",
};

interface StatusLayoutProps {
  children: React.ReactNode;
}

export default function StatusLayout({ children }: StatusLayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
} 