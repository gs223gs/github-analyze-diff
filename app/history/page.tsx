'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useSearchHistory } from '@/app/status/hooks/useSearchHistory';
import { SearchQuery } from '@/types/user-stats';

export default function HistoryPage() {
  const { history, removeFromHistory, clearHistory } = useSearchHistory();
  const [showConfirmClear, setShowConfirmClear] = useState(false);
  const router = useRouter();

  const handleSearchFromHistory = (query: SearchQuery) => {
    const searchParams = new URLSearchParams();
    Object.entries(query).forEach(([platform, username]) => {
      if (username) {
        searchParams.set(platform, username);
      }
    });
    router.push(`/status?${searchParams.toString()}`);
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('ja-JP', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleClearHistory = () => {
    clearHistory();
    setShowConfirmClear(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            検索履歴
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            過去の検索を再実行したり、管理することができます
          </p>
        </div>

        {/* アクション */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <Link href="/">
            <Button variant="outline" className="flex items-center space-x-2">
              <span>🔍</span>
              <span>新しい検索</span>
            </Button>
          </Link>

          {history.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {history.length}件の履歴
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowConfirmClear(true)}
                className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                すべて削除
              </Button>
            </div>
          )}
        </div>

        {/* 確認ダイアログ */}
        {showConfirmClear && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full">
              <h3 className="text-lg font-semibold mb-4">履歴を削除</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                すべての検索履歴を削除しますか？この操作は取り消せません。
              </p>
              <div className="flex space-x-3">
                <Button
                  onClick={handleClearHistory}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  削除
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowConfirmClear(false)}
                >
                  キャンセル
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* 履歴リスト */}
        {history.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
              検索履歴がありません
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              検索を実行すると、ここに履歴が表示されます
            </p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                検索を開始
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                      {item.displayName}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {Object.entries(item.query).map(([platform, username]) => {
                        if (!username) return null;
                        const platformConfig = {
                          github: { icon: '🐙', color: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200' },
                          zenn: { icon: '📝', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' },
                          qiita: { icon: '📚', color: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300' },
                          atcoder: { icon: '🏆', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300' },
                        }[platform as keyof typeof item.query];

                        return (
                          <span
                            key={platform}
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${platformConfig?.color}`}
                          >
                            <span className="mr-1">{platformConfig?.icon}</span>
                            {username}
                          </span>
                        );
                      })}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(item.timestamp)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={() => handleSearchFromHistory(item.query)}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      再検索
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromHistory(item.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                    >
                      削除
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 