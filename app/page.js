"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "/mobile";
    } else {
      window.location.href = "/desktop";
    }
  }, []);

  return (
    <main className="flex items-center justify-center h-screen text-lg">
      Loading DishFuse...
    </main>
  );
}
