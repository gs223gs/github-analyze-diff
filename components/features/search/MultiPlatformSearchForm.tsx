import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchQuery, PlatformType } from '@/types/user-stats';
import { useSearchHistory } from '@/app/status/hooks/useSearchHistory';

interface MultiPlatformSearchFormProps {
  onSearch?: (query: SearchQuery) => void;
  className?: string;
}

export function MultiPlatformSearchForm({ onSearch, className = '' }: MultiPlatformSearchFormProps) {
  const [query, setQuery] = useState<SearchQuery>({});
  const [isLoading, setIsLoading] = useState(false);
  const [manuallyEditedFields, setManuallyEditedFields] = useState<Set<PlatformType>>(new Set());
  const router = useRouter();
  const { addToHistory } = useSearchHistory();

  const handleInputChange = (platform: PlatformType, value: string) => {
    const trimmedValue = value.trim() || undefined;
    
    setQuery(prev => {
      const newQuery = {
        ...prev,
        [platform]: trimmedValue,
      };

      // GitHubユーザー名が入力され、他のプラットフォームが手動編集されていない場合は自動同期
      if (platform === 'github' && trimmedValue) {
        const otherPlatforms: (keyof SearchQuery)[] = ['zenn', 'qiita', 'atcoder'];
        
        otherPlatforms.forEach(otherPlatform => {
          // 手動編集されていないフィールドのみ自動同期
          if (!manuallyEditedFields.has(otherPlatform)) {
            newQuery[otherPlatform] = trimmedValue;
          }
        });
      }

      return newQuery;
    });

    // GitHub以外のフィールドが編集された場合、手動編集フラグを設定
    if (platform !== 'github' && value.trim()) {
      setManuallyEditedFields(prev => new Set([...prev, platform]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 少なくとも1つのプラットフォームが入力されているかチェック
    const hasInput = Object.values(query).some(value => value && value.trim());
    if (!hasInput) return;

    setIsLoading(true);
    
    try {
      // 履歴に追加
      addToHistory(query);
      
      // 検索実行
      if (onSearch) {
        onSearch(query);
      } else {
        // デフォルトの動作：ステータスページにリダイレクト
        const searchParams = new URLSearchParams();
        
        Object.entries(query).forEach(([platform, username]) => {
          if (username) {
            searchParams.set(platform, username);
          }
        });
        
        router.push(`/status?${searchParams.toString()}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const platformConfigs = [
    {
      key: 'github' as const,
      label: 'GitHub',
      placeholder: 'GitHubユーザー名',
      icon: '🐙',
      color: 'border-gray-300 focus:border-gray-500',
    },
    {
      key: 'zenn' as const,
      label: 'Zenn',
      placeholder: 'Zennユーザー名',
      icon: '📝',
      color: 'border-blue-300 focus:border-blue-500',
    },
    {
      key: 'qiita' as const,
      label: 'Qiita',
      placeholder: 'Qiitaユーザー名',
      icon: '📚',
      color: 'border-green-300 focus:border-green-500',
    },
    {
      key: 'atcoder' as const,
      label: 'AtCoder',
      placeholder: 'AtCoderユーザー名',
      icon: '🏆',
      color: 'border-orange-300 focus:border-orange-500',
    },
  ];

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platformConfigs.map(({ key, label, placeholder, icon, color }) => (
          <div key={key} className="space-y-2">
            <label htmlFor={key} className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="mr-2">{icon}</span>
              {label}
            </label>
            <Input
              id={key}
              type="text"
              placeholder={placeholder}
              value={query[key] || ''}
              onChange={(e) => handleInputChange(key, e.target.value)}
              className={`${color} transition-colors duration-200`}
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <Button
          type="submit"
          disabled={isLoading || !Object.values(query).some(value => value && value.trim())}
          className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:transform-none disabled:opacity-50"
        >
          {isLoading ? (
            <div className="flex items-center">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              検索中...
            </div>
          ) : (
            '統計を表示'
          )}
        </Button>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
          いずれかのプラットフォームのユーザー名を入力してください
        </p>
      </div>

      <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1">
        <p>💡 ヒント:</p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>GitHubユーザー名を入力すると、他のプラットフォームにも自動的に同じ値が設定されます</li>
          <li>各プラットフォームで異なるユーザー名を使用する場合は個別に編集できます</li>
          <li>複数のプラットフォームを同時に検索できます</li>
        </ul>
      </div>
    </form>
  );
} 