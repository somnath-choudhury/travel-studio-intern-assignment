"use client";

import RequestsTable from "@/components/RequestsTable";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function RequestsPage() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <main className="relative min-h-screen bg-gray-900 bg-[url('/hotel-bg.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/15 backdrop-blur-sm" />

        {/* Main content */}
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

// "use client";

// import { useRouter } from "next/navigation";

// export default function HomePage() {
//   const router = useRouter();

//   return (
//     <main className="min-h-screen flex flex-col justify-center items-center p-4">
//       <h1 className="text-3xl sm:text-5xl font-bold text-blue-900 mb-6 text-center">
//         Welcome to Travel Studio Hotel Dashboard
//       </h1>
//       <p className="text-lg text-gray-700 mb-6 text-center max-w-md">
//         Click the button below to view and manage guest service requests.
//       </p>
//       <button
//         onClick={() => router.push("/requests")}
//         className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-medium transition"

//       >
//         Go to Guest Requests
//       </button>
//     </main>
//   );
// }
