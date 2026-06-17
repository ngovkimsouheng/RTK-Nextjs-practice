"use client";
import ButtonComponent from "@/components/ButtonComponent";
import { CardSmall } from "@/components/ui/cardComponent";
import { IconCloudDemo } from "@/components/ui/icon-cloud-demo";
import { addToCart } from "@/features/count/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import NavHeader from "@/components/nav-header";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { MorphingText } from "@/components/ui/morphing-text";
import { LightRays } from "@/components/ui/light-rays";
import BlurText from "@/components/BlurText";
import AgencyHeroSection from "@/components/shadcn-space/blocks/hero-01";
import { Component } from "@/components/hero";

export default function Home() {
  const dispatch = useDispatch();
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="">
      {/* <LightRays /> */}
      <AgencyHeroSection />
      {/* <Component /> */}
      home
    </div>
    // <div className="w-full h-full min-h-screen">
    //   <Component />
    // </div>
  );
}
