"use client";
import { useAtom } from "jotai";
import { userAtom } from "../state/atoms/userAtom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Analyze from "@/components/template/Analyze";

export default function Status() {
  const [user, setUser] = useAtom(userAtom);
  const [userInput, setUserInput] = useState<string>("");
  const [statsData, setStatsData] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!userInput.trim()) return;

    setLoading(true);
    setUser(userInput);

    try {
      const response = await fetch(
        `https://github-readme-stats.vercel.app/api?username=${userInput}&count_private=true&show_icons=true&theme=tokyonight`
      );

      if (response.ok) {
        const data = await response.text();
        setStatsData(data);
      } else {
        setStatsData(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      setStatsData(
        `Error: ${error instanceof Error ? error.message : "Unknown error"}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className=""
        />
        <Button onClick={handleSubmit} disabled={loading}>
          {loading ? "Loading..." : "Set User"}
        </Button>
      </div>

      {loading && <p>データを取得中...</p>}
      {user !== "" ? (
        <Analyze user={user} statsData={statsData} />
      ) : (
        <p>IDを入力してください</p>
      )}
    </div>
  );
}
