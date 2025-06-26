import Image from "next/image";
import { useAtom } from "jotai";
import { themeAtom } from "@/app/state/atoms";

interface AnalyzeProps {
  user: string;
}

export default function Analyze({ user }: AnalyzeProps) {
  const [theme] = useAtom(themeAtom);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            {user}のデベロッパー統計
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            GitHub、Zenn、Qiita、AtCoderでの活動を可視化
          </p>
        </div>

        {/* GitHub セクション */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-black dark:bg-white rounded-full p-2 mr-3">
              <svg
                className="w-6 h-6 text-white dark:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              GitHub
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                フォロワー数
              </h3>
              <Image
                src={`https://img.shields.io/github/followers/${user}?label=follow&logo=github&style=flat`}
                alt={`${user}'s GitHub followers`}
                width={150}
                height={30}
                unoptimized
                className="mx-auto"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                スター数
              </h3>
              <Image
                src={`https://img.shields.io/github/stars/${user}?label=star&logo=github&style=flat`}
                alt={`${user}'s GitHub stars`}
                width={150}
                height={30}
                unoptimized
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Zenn セクション */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-blue-500 rounded-full p-2 mr-3">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Zenn
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                記事数
              </h3>
              <Image
                src={`https://badgen.org/img/zenn/${user}/articles?style=plastic`}
                alt={`${user}'s Zenn articles`}
                width={120}
                height={20}
                unoptimized
                className="mx-auto"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                いいね数
              </h3>
              <Image
                src={`https://badgen.org/img/zenn/${user}/likes?style=plastic`}
                alt={`${user}'s Zenn likes`}
                width={120}
                height={20}
                unoptimized
                className="mx-auto"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                フォロワー
              </h3>
              <Image
                src={`https://badgen.org/img/zenn/${user}/followers?style=plastic`}
                alt={`${user}'s Zenn followers`}
                width={120}
                height={20}
                unoptimized
                className="mx-auto"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                本の数
              </h3>
              <Image
                src={`https://badgen.org/img/zenn/${user}/books?style=plastic`}
                alt={`${user}'s Zenn books`}
                width={120}
                height={20}
                unoptimized
                className="mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Qiita & AtCoder セクション */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Qiita */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-green-500 rounded-full p-2 mr-3">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Qiita
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    貢献度
                  </h3>
                  <Image
                    src={`https://badgen.org/img/qiita/${user}/contributions?style=plastic`}
                    alt={`${user}'s Qiita contributions`}
                    width={120}
                    height={20}
                    unoptimized
                    className="mx-auto"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    記事数
                  </h3>
                  <Image
                    src={`https://badgen.org/img/qiita/${user}/articles?style=plastic`}
                    alt={`${user}'s Qiita articles`}
                    width={120}
                    height={20}
                    unoptimized
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>

            {/* AtCoder */}
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gray-700 rounded-full p-2 mr-3">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  AtCoder
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    Algorithm
                  </h3>
                  <Image
                    src={`https://badgen.org/img/atcoder/${user}/rating/algorithm?style=plastic`}
                    alt={`${user}'s AtCoder algorithm rating`}
                    width={120}
                    height={20}
                    unoptimized
                    className="mx-auto"
                  />
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                    Heuristic
                  </h3>
                  <Image
                    src={`https://badgen.org/img/atcoder/${user}/rating/heuristic?style=plastic`}
                    alt={`${user}'s AtCoder heuristic rating`}
                    width={120}
                    height={20}
                    unoptimized
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* トロフィー セクション */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            🏆 GitHub トロフィー
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 overflow-x-auto">
            <Image
              src={`https://github-profile-trophy.vercel.app/?username=${user}&theme=${
                theme.includes("dark") ? "darkhub" : "flat"
              }&column=7&margin-w=15&margin-h=15`}
              alt={`${user}'s GitHub trophies`}
              width={1200}
              height={200}
              unoptimized
              className="mx-auto"
            />
          </div>
        </section>

        {/* 統計情報 セクション */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            📊 詳細統計
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                最も使用している言語
              </h3>
              <Image
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=${theme}&langs_count=10`}
                alt={`${user}'s top languages`}
                width={495}
                height={195}
                unoptimized
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                プロフィール詳細
              </h3>
              <Image
                src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${user}&theme=${theme}`}
                alt={`${user}'s profile details`}
                width={495}
                height={195}
                unoptimized
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                GitHub統計
              </h3>
              <Image
                src={`https://github-readme-stats.vercel.app/api?username=${user}&count_private=true&show_icons=true&theme=${theme}&include_all_commits=true`}
                alt={`${user}'s GitHub stats`}
                width={495}
                height={195}
                unoptimized
                className="w-full h-auto"
              />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                アクティブ時間
              </h3>
              <Image
                src={`http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${user}&theme=${theme}&utcOffset=9`}
                alt={`${user}'s productive time`}
                width={495}
                height={195}
                unoptimized
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
