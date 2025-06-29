"use client";
import { MultiPlatformSearchForm } from "@/components/features/search/MultiPlatformSearchForm";
import { MultiPlatformUserStatsDisplay } from "@/components/features/user-stats/MultiPlatformUserStatsDisplay";
import { EmptyState } from "@/components/common";
import { useMultiPlatformUserStats } from "../hooks/useMultiPlatformUserStats";

export default function StatusPageContent() {
  const { currentQuery, displayUser, hasValidQuery, getUserForPlatform } = useMultiPlatformUserStats();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <MultiPlatformSearchForm className="mb-8" />

      <div className="mt-8">
        {hasValidQuery && displayUser ? (
          <MultiPlatformUserStatsDisplay 
            query={currentQuery}
            getUserForPlatform={getUserForPlatform}
            primaryUser={displayUser}
          />
        ) : (
          <EmptyState
            message="いずれかのプラットフォームのユーザー名を入力して統計を表示してください"
            icon={
              <svg 
                className="w-16 h-16 text-gray-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                />
              </svg>
            }
          />
        )}
      </div>
    </main>
  );
} 