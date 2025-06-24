import { atom } from "jotai";

// ユーザー関連のatom
export const userAtom = atom<string>("");
export const profileUserAtom = atom<string>("");

// テーマ関連のatom  
export const themeAtom = atom<string>("");

// 型定義（必要に応じて）
export type UserState = string;
export type ThemeState = string; 