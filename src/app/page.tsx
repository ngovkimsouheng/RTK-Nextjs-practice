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
export default function Home() {
  const dispatch = useDispatch();
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="pb-20">
      <div className="relative py-20 grid place-content-center h-screen w-full overflow-hidden rounded-xl border">
        <LightRays />
        <BlurText
          text="welcome to our web page"
          delay={200}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-6xl mb-8"
        />
      </div>
    </div>
  );
}
