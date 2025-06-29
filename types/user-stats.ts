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

export interface SearchQuery {
  github?: string;
  zenn?: string;
  qiita?: string;
  atcoder?: string;
}

export interface SearchHistoryItem {
  id: string;
  query: SearchQuery;
  timestamp: number;
  displayName: string;
}

export type PlatformType = 'github' | 'zenn' | 'qiita' | 'atcoder'; 