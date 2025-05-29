"use client";

import RequestsTable from "@/components/RequestsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RequestsPage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen p-4 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-800">
          Welcome to Travel Studio Hotel
        </h1>
        <RequestsTable />
      </main>
    </QueryClientProvider>
  );
}
