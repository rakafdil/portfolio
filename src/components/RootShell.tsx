"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavbar = !pathname?.startsWith("/admin");

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}