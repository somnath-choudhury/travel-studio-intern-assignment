"use client";

import RequestsTable from "@/components/RequestsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RequestsPage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative min-h-screen bg-gray-900 bg-[url('/hotel-bg.jpg')] bg-cover bg-center bg-no-repeat">
       
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

      
        <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 pt-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-center text-white drop-shadow-lg mb-8">
            Travel Studio Guest Request Dashboard
          </h1>
          <RequestsTable />
        </div>
      </main>
    </QueryClientProvider>
  );
}
