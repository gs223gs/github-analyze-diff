"use client";
import HeroSection from "@/components/template/HeroSection";
import FeatureSection from "@/components/template/FeatureSection";
import HowToUseSection from "@/components/template/HowToUseSection";
import PreviewSection from "@/components/template/PreviewSection";
import Footer from "@/components/template/Footer";
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <HowToUseSection />
      <PreviewSection />
      <Footer />
    </>
  );
}
