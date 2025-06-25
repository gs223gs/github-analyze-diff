import { atom } from "jotai";

// テーマの型定義
export type Theme = 
  | "default"
  | "2077" 
  | "dracula"
  | "github"
  | "github_dark"
  | "gruvbox"
  | "monokai"
  | "nord_bright"
  | "nord_dark"
  | "radical"
  | "solarized"
  | "solarized_dark"
  | "tokyonight"
  | "vue"
  | "zenburn"
  | "transparent";

// テーマ定数オブジェクト（UI用）
export const THEMES = {
  default: { value: "default", label: "Default" },
  "2077": { value: "2077", label: "2077" },
  dracula: { value: "dracula", label: "Dracula" },
  github: { value: "github", label: "GitHub" },
  github_dark: { value: "github_dark", label: "GitHub Dark" },
  gruvbox: { value: "gruvbox", label: "Gruvbox" },
  monokai: { value: "monokai", label: "Monokai" },
  nord_bright: { value: "nord_bright", label: "Nord Bright" },
  nord_dark: { value: "nord_dark", label: "Nord Dark" },
  radical: { value: "radical", label: "Radical" },
  solarized: { value: "solarized", label: "Solarized" },
  solarized_dark: { value: "solarized_dark", label: "Solarized Dark" },
  tokyonight: { value: "tokyonight", label: "Tokyo Night" },
  vue: { value: "vue", label: "Vue" },
  zenburn: { value: "zenburn", label: "Zenburn" },
  transparent: { value: "transparent", label: "Transparent" },
} as const;

// テーマ選択肢の配列（セレクトボックス用）
export const THEME_OPTIONS = Object.values(THEMES);

// ユーザー関連のatom
export const userAtom = atom<string>("");
export const profileUserAtom = atom<string>("");

// テーマ関連のatom（型安全に）
export const themeAtom = atom<Theme>("tokyonight");

// 型定義（必要に応じて）
export type UserState = string;
export type ThemeState = string; 