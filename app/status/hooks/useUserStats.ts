"use client";
import { useAtom } from "jotai";
import { userAtom } from "@/app/state/atoms";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function useUserStats() {
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

  return {
    user,
    userInput,
    setUserInput,
    handleSubmit,
  };
} 