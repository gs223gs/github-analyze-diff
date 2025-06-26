"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface UserSearchFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  submitButtonText?: string;
}

export function UserSearchForm({
  value,
  onChange,
  onSubmit,
  placeholder = "GitHubユーザー名を入力",
  submitButtonText = "統計を更新",
}: UserSearchFormProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1"
          placeholder={placeholder}
        />
        <Button onClick={onSubmit} className="sm:w-auto">
          {submitButtonText}
        </Button>
      </div>
    </div>
  );
} 