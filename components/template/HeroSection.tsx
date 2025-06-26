import { Dispatch, SetStateAction } from "react";
import SearchForm from "./SearchForm";

interface HeroSectionProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  onSubmit: (username: string) => void;
  sampleUsers?: string[];
}

export default function HeroSection({
  username,
  setUsername,
  onSubmit,
  sampleUsers = ["gs223gs"],
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 dark:from-purple-600/10 dark:to-blue-600/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 animate-fade-in">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              GitHub Stats Visualizer
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in animation-delay-200">
            GitHub、Zenn、Qiita、AtCoderでの開発者活動を美しく可視化
          </p>

          {/* 検索フォーム */}
          <div className="animate-fade-in animation-delay-400">
            <SearchForm
              username={username}
              setUsername={setUsername}
              onSubmit={onSubmit}
              placeholder="GitHubユーザー名を入力"
            />
          </div>

          {/* サンプルユーザー */}
          <div className="mt-8 animate-fade-in animation-delay-600">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              サンプル:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {sampleUsers.map((user) => (
                <button
                  key={user}
                  onClick={() => {
                    setUsername(user);
                    onSubmit(user);
                  }}
                  className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                >
                  @{user}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 