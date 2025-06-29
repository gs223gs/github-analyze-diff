'use client';

import { AppHeader } from '@/components/template/AppHeader';

interface StatusLayoutProps {
  children: React.ReactNode;
}

export default function StatusLayout({ children }: StatusLayoutProps) {
  return (
    <>
      <AppHeader />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {children}
      </div>
    </>
  );
} 