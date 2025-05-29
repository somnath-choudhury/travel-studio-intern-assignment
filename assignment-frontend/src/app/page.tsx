"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center p-4 bg-gradient-to-r from-slate-900 to-slate-700  text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/hotel-bg.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/5 backdrop-blur-none" />

      <div className="relative z-10 text-center w-full px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 text-white drop-shadow-lg leading-tight">
          Welcome to Travel Studio Hotel Requests Dashboard
        </h1>
        <p className="text-lg text-gray-200 font-semibold mt-6 mb-6">
          Click below to view and manage guest service requests.
        </p>
        <button
          onClick={() => router.push("/requests")}
          className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 hover:from-blue-800 hover:to-blue-400 text-white  px-6 py-3 rounded-xl text-lg font-semibold shadow-lg transition duration-300 cursor-pointer"
        >
          Go to Guest Requests
        </button>
      </div>
    </main>
  );
}
