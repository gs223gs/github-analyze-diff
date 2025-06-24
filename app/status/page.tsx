"use client";
import { useAtom } from "jotai";
import { userAtom } from "../state/atoms/userAtom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Status() {
  const [user, setUser] = useAtom(userAtom);
  const [userInput, setUserInput] = useState("");
  return (
    <div>
      <Input value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <Button onClick={() => setUser(userInput)}>Set User</Button>
      <p>{user}</p>
    </div>
  );
}
