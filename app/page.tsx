"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/template/HeroSection";
import FeatureSection from "@/components/template/FeatureSection";
import HowToUseSection from "@/components/template/HowToUseSection";
import PreviewSection from "@/components/template/PreviewSection";
import Footer from "@/components/template/Footer";
export const runtime = "edge";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (username: string) => {
    router.push(`/status?user=${encodeURIComponent(username)}`);
  };

  return (
    <>
      <HeroSection
        username={username}
        setUsername={setUsername}
        onSubmit={handleSubmit}
      />
      <FeatureSection />
      <HowToUseSection />
      <PreviewSection />
      <Footer />
    </>
  );
}
