import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchQuery } from '@/types/user-stats';

export function useMultiPlatformUserStats() {
  const searchParams = useSearchParams();
  const [currentQuery, setCurrentQuery] = useState<SearchQuery>({});
  const [displayUser, setDisplayUser] = useState<string>('');

  // URLパラメータから検索クエリを取得
  useEffect(() => {
    const query: SearchQuery = {};
    let primaryUser = '';

    // 各プラットフォームのパラメータをチェック
    const github = searchParams.get('github');
    const zenn = searchParams.get('zenn');
    const qiita = searchParams.get('qiita');
    const atcoder = searchParams.get('atcoder');
    
    // 後方互換性：古い'user'パラメータもサポート
    const legacyUser = searchParams.get('user');

    if (github) {
      query.github = github;
      primaryUser = github;
    } else if (legacyUser) {
      // 古い形式の場合はGitHubユーザーとして扱い、プライマリユーザーとして設定
      query.github = legacyUser;
      primaryUser = legacyUser;
    }

    if (zenn) {
      query.zenn = zenn;
      if (!primaryUser) primaryUser = zenn;
    } else if (legacyUser && !zenn) {
      // 古い形式でZennが指定されていない場合はデフォルト値として設定
      query.zenn = legacyUser;
    }

    if (qiita) {
      query.qiita = qiita;
      if (!primaryUser) primaryUser = qiita;
    } else if (legacyUser && !qiita) {
      // 古い形式でQiitaが指定されていない場合はデフォルト値として設定
      query.qiita = legacyUser;
    }

    if (atcoder) {
      query.atcoder = atcoder;
      if (!primaryUser) primaryUser = atcoder;
    } else if (legacyUser && !atcoder) {
      // 古い形式でAtCoderが指定されていない場合はデフォルト値として設定
      query.atcoder = legacyUser;
    }

    setCurrentQuery(query);
    setDisplayUser(primaryUser);
  }, [searchParams]);

  // 検索クエリが有効かどうかをチェック
  const hasValidQuery = Object.values(currentQuery).some(value => value && value.trim());

  // プラットフォーム別のユーザー名を取得（フォールバック付き）
  const getUserForPlatform = (platform: keyof SearchQuery): string => {
    // 指定されたプラットフォームのユーザー名があればそれを使用
    if (currentQuery[platform]) {
      return currentQuery[platform]!;
    }
    
    // なければプライマリユーザー（通常はGitHub）を使用
    return displayUser;
  };

  return {
    currentQuery,
    displayUser,
    hasValidQuery,
    getUserForPlatform,
    // 表示用の統合されたユーザー名
    primaryDisplayUser: displayUser,
  };
} 