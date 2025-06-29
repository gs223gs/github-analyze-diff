import { atom } from "jotai";

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

export const THEME_OPTIONS = Object.values(THEMES);

export const userAtom = atom<string>("");
export const userZennAtom = atom<string>("");
export const userQiitaAtom = atom<string>("");
export const userAtcoderAtom = atom<string>("");

export const profileUserAtom = atom<string>("");

export const themeAtom = atom<Theme>("tokyonight");

export type UserState = string;
export type ThemeState = string; 