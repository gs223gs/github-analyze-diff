"use client";
import { usePathname } from "next/navigation";
import { Provider as JotaiProvider } from "jotai";
import Header from "./Header";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <JotaiProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        {!isHomePage && <Header />}
        {children}
      </div>
    </JotaiProvider>
  );
} 