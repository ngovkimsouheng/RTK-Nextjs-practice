"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const pathname = usePathname();
  return (
    <ul
      className="relative text-[#0038FF]  mx-auto flex w-fit  border-2  border-[#CCFF00] bg-white/10 p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Link className={pathname === "/" ? "font-semibold " : ""} href="/">
        <Tab setPosition={setPosition}>Home</Tab>
      </Link>

      {/* <Link
        className={pathname === "/cart" ? "font-semibold " : ""}
        href={"/cart"}
      >
        {" "}
        <Tab setPosition={setPosition}>Cart</Tab>
      </Link> */}
      {/* <Tab setPosition={setPosition}>About</Tab> */}
      <Link
        className={pathname === "/product" ? "font-semibold " : ""}
        href={"/product"}
      >
        {" "}
        <Tab setPosition={setPosition}>Product</Tab>
      </Link>
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<
    React.SetStateAction<{ left: number; width: number; opacity: number }>
  >;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-[#CCFF00] mix-blend-difference md:px-5 md:py-2 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7  bg-[#0038FF] md:h-10"
    />
  );
};

export default NavHeader;
