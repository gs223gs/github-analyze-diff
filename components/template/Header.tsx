import Link from "next/link";
import { ThemeSelector } from "@/components/ui/theme-selector";

interface HeaderProps {
  showThemeSelector?: boolean;
}

export default function Header({ showThemeSelector = true }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
          >
            GitHub Stats Visualizer
          </Link>
          {showThemeSelector && <ThemeSelector />}
        </div>
      </div>
    </header>
  );
} 