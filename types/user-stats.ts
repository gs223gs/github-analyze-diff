export interface UserStats {
  username: string;
  github: GitHubStats;
  zenn?: ZennStats;
  qiita?: QiitaStats;
  atcoder?: AtCoderStats;
}

export interface GitHubStats {
  followers: number;
  stars: number;
  repositories: number;
  contributions: number;
}

export interface ZennStats {
  articles: number;
  likes: number;
  followers: number;
  books: number;
}

export interface QiitaStats {
  contributions: number;
  articles: number;
}

export interface AtCoderStats {
  algorithmRating: number | null;
  heuristicRating: number | null;
}

export interface Platform {
  name: string;
  icon: React.ReactNode;
  bgColor: string;
} 