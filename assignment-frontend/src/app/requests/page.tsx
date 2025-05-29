// "use client";

// import RequestsTable from "@/components/RequestsTable";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";

// export default function RequestsPage() {
//   const [queryClient] = useState(() => new QueryClient());

//   return (
//     <QueryClientProvider client={queryClient}>
//       <main className="min-h-screen p-4 sm:p-8">
//         <h1 className="text-2xl sm:text-4xl font-bold text-center text-blue-800">
//           Welcome to Travel Studio Hotel
//         </h1>
//         <RequestsTable />
//       </main>
//     </QueryClientProvider>
//   );
// }

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
