export const PLATFORM_CONFIGS = {
  github: {
    name: "GitHub",
    baseUrl: "https://github.com",
    statsUrls: {
      followers: (user: string) => `https://img.shields.io/github/followers/${user}?label=follow&logo=github&style=flat`,
      stars: (user: string) => `https://img.shields.io/github/stars/${user}?label=star&logo=github&style=flat`,
      stats: (user: string, theme: string) => `https://github-readme-stats.vercel.app/api?username=${user}&count_private=true&show_icons=true&theme=${theme}&include_all_commits=true`,
      languages: (user: string, theme: string) => `https://github-readme-stats.vercel.app/api/top-langs/?username=${user}&layout=compact&theme=${theme}&langs_count=10`,
      trophy: (user: string, theme: string) => `https://github-profile-trophy.vercel.app/?username=${user}&theme=${theme.includes("dark") ? "darkhub" : "flat"}&column=7&margin-w=15&margin-h=15`,
      profileDetails: (user: string, theme: string) => `https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${user}&theme=${theme}`,
      productiveTime: (user: string, theme: string) => `http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=${user}&theme=${theme}&utcOffset=9`,
    },
  },
  zenn: {
    name: "Zenn",
    baseUrl: "https://zenn.dev",
    statsUrls: {
      articles: (user: string) => `https://badgen.org/img/zenn/${user}/articles?style=plastic`,
      likes: (user: string) => `https://badgen.org/img/zenn/${user}/likes?style=plastic`,
      followers: (user: string) => `https://badgen.org/img/zenn/${user}/followers?style=plastic`,
      books: (user: string) => `https://badgen.org/img/zenn/${user}/books?style=plastic`,
    },
  },
  qiita: {
    name: "Qiita",
    baseUrl: "https://qiita.com",
    statsUrls: {
      contributions: (user: string) => `https://badgen.org/img/qiita/${user}/contributions?style=plastic`,
      articles: (user: string) => `https://badgen.org/img/qiita/${user}/articles?style=plastic`,
    },
  },
  atcoder: {
    name: "AtCoder",
    baseUrl: "https://atcoder.jp",
    statsUrls: {
      algorithm: (user: string) => `https://badgen.org/img/atcoder/${user}/rating/algorithm?style=plastic`,
      heuristic: (user: string) => `https://badgen.org/img/atcoder/${user}/rating/heuristic?style=plastic`,
    },
  },
} as const;

export const DEFAULT_THEME = "tokyonight";
export const TIMEZONE_OFFSET = 9; // JST 