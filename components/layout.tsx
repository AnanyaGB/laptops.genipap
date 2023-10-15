"use client";

import Navbar from "./navbar";
import NextNProgress from "nextjs-progressbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Navbar />
      <div className="min-h-screen">{children}</div>
    </div>
  );
}
