"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useLocoScroll from "@/hooks/useLocoScroll";

export default function IntroductionPage() {
  useLocoScroll(); // scroll init
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "", country: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/landing");
  };

  return (
    <main
      data-scroll-container
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-28 py-20"
    >
      <h1 className="h-80">Hello from introduction page</h1>
      <h1 className="h-80">Hello from introduction page</h1>
      <h1 className="h-80">Hello from introduction page</h1>
      <h1 className="h-80">Hello from introduction page</h1>
      <h1 className="h-80">Hello from introduction page</h1>
    </main>
  );
}
