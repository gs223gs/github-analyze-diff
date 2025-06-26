import { Dispatch, SetStateAction, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFormProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  onSubmit: (username: string) => void;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export default function SearchForm({
  username,
  setUsername,
  onSubmit,
  placeholder = "GitHubユーザー名を入力",
  buttonText = "表示",
  className = "",
}: SearchFormProps) {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSubmit(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`max-w-md mx-auto ${className}`}>
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder={placeholder}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 h-12 text-lg"
        />
        <Button type="submit" size="lg" className="h-12 px-8">
          {buttonText}
        </Button>
      </div>
    </form>
  );
} 