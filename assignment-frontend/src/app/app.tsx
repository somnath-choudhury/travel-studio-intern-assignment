// src/app/page.tsx

"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-6 text-center">
        Welcome to Travel Studio Hotel Dashboard
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
        Click the button below to view and manage guest service requests.
      </p>
      <button
        onClick={() => router.push("/requests")}
        className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
      >
        Go to Guest Requests
      </button>
    </main>
  );
}
