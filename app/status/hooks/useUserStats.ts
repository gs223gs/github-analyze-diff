"use client";
import { useAtom } from "jotai";
import { userAtom } from "@/app/state/atoms";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function useUserStats() {
  const [user, setUser] = useAtom(userAtom);
  const [userInput, setUserInput] = useState<string>("");
  
  let searchParams: URLSearchParams | null = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    searchParams = useSearchParams();
  } catch {
    // SSR環境では useSearchParams が使用できない場合があるため、エラーをキャッチ
    console.warn("useSearchParams is not available in SSR environment");
  }

  useEffect(() => {
    if (searchParams) {
      const userParam = searchParams.get("user");
      if (userParam) {
        setUserInput(userParam);
        setUser(userParam);
      }
    }
  }, [searchParams, setUser]);

  const handleSubmit = () => {
    if (!userInput.trim()) return;
    setUser(userInput);
  };

  return {
    user,
    userInput,
    setUserInput,
    handleSubmit,
  };
} 