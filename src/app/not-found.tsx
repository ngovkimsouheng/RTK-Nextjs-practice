import React from "react";
import Link from "next/link";
import TrueFocus from "@/components/ui/TrueFocus";
export default function NotFound() {
  return (
    <div className="h-screen w-full grid place-content-center ">
      <div className="text-center flex flex-col justify-center items-center gap-4">
        <h1 className="text-6xl font-bold text-center">404</h1>
        <TrueFocus
          sentence="Not Found"
          manualMode={false}
          blurAmount={5}
          borderColor="# "
          animationDuration={0.5}
          pauseBetweenAnimations={1}
        />
        <p className="text-xl text-gray-600 mt-4">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className=" border-2 py-3 px-6  text-white bg-gray-800 rounded-lg cursor-pointer  hover:underline"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
