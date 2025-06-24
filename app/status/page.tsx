"use client";
import { useAtom } from "jotai";
import { userAtom } from "../state/atoms";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Analyze from "@/components/template/Analyze";

export default function Status() {
  const [user, setUser] = useAtom(userAtom);
  const [userInput, setUserInput] = useState<string>("");

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    setUser(userInput);
  };

  return (
    <div>
      <div>
        <Input
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className=""
          placeholder="GitHubユーザー名を入力"
        />
        <Button onClick={handleSubmit}>
          Set User
        </Button>
      </div>

      {user !== "" ? (
        <Analyze user={user} />
      ) : (
        <p>IDを入力してください</p>
      )}
    </div>
  );
}
