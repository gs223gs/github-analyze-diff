import { useAtom } from "jotai";
import { themeAtom, THEME_OPTIONS, Theme } from "@/app/state/atoms";

export function ThemeSelector() {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="theme-select" className="text-sm font-medium">
        テーマを選択
      </label>
      <select
        id="theme-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value as Theme)}
        className="border border-gray-300 rounded-md px-3 py-2 bg-white"
      >
        {THEME_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
} 