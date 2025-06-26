"use client";
import { useAtom } from "jotai";
import { userAtom } from "../state/atoms";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Analyze from "@/components/template/Analyze";
import { useSearchParams } from "next/navigation";

export default function Status() {
  const [user, setUser] = useAtom(userAtom);
  const [userInput, setUserInput] = useState<string>("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const userParam = searchParams.get("user");
    if (userParam) {
      setUserInput(userParam);
      setUser(userParam);
    }
  }, [searchParams, setUser]);

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    setUser(userInput);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <Input
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="flex-1"
            placeholder="GitHubユーザー名を入力"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSubmit();
              }
            }}
          />
          <Button onClick={handleSubmit} className="sm:w-auto">
            統計を更新
          </Button>
        </div>
      </div>

      {user !== "" ? (
        <Analyze user={user} />
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            GitHubユーザー名を入力して統計を表示してください
          </p>
        </div>
      )}
    </main>
  );
}
