import { useState, useEffect } from 'react';
import { SearchQuery, SearchHistoryItem } from '@/types/user-stats';

const SEARCH_HISTORY_KEY = 'github-stats-search-history';
const MAX_HISTORY_ITEMS = 20;

export function useSearchHistory() {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);

  // ローカルストレージから履歴を読み込み
  useEffect(() => {
    if (typeof window === 'undefined' || !window.localStorage) {
      return;
    }
    try {
      const saved = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SearchHistoryItem[];
        setHistory(parsed.sort((a, b) => b.timestamp - a.timestamp));
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  // 履歴をローカルストレージに保存
  const saveHistory = (newHistory: SearchHistoryItem[]) => {
    try {
      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
      setHistory(newHistory);
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  };

  // 新しい検索を履歴に追加
  const addToHistory = (query: SearchQuery) => {
    const displayName = generateDisplayName(query);
    const newItem: SearchHistoryItem = {
      id: crypto.randomUUID(),
      query,
      timestamp: Date.now(),
      displayName,
    };

    const updatedHistory = [newItem, ...history]
      .filter((item, index, arr) => 
        // 重複を除去（同じクエリは最新のもののみ保持）
        arr.findIndex(h => JSON.stringify(h.query) === JSON.stringify(item.query)) === index
      )
      .slice(0, MAX_HISTORY_ITEMS);

    saveHistory(updatedHistory);
  };

  // 履歴アイテムを削除
  const removeFromHistory = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id);
    saveHistory(updatedHistory);
  };

  // 履歴をクリア
  const clearHistory = () => {
    saveHistory([]);
  };

  return {
    history,
    addToHistory,
    removeFromHistory,
    clearHistory,
  };
}

// 検索クエリから表示名を生成
function generateDisplayName(query: SearchQuery): string {
  const platforms = [];
  if (query.github) platforms.push(`GitHub: ${query.github}`);
  if (query.zenn) platforms.push(`Zenn: ${query.zenn}`);
  if (query.qiita) platforms.push(`Qiita: ${query.qiita}`);
  if (query.atcoder) platforms.push(`AtCoder: ${query.atcoder}`);
  
  return platforms.join(' | ');
} 