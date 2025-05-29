"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPendingRequests, updateRequestStatus } from "@/lib/api";

export default function RequestsTable() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pendingRequests"],
    queryFn: getPendingRequests,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: updateRequestStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pendingRequests"] });
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-64 text-gray-300">
        Loading guest requests...
      </div>
    );

  if (error)
    return (
      <div className="text-red-400 text-center font-medium mt-4">
        Failed to load guest requests.
      </div>
    );

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat">
      <h2 className="text-3xl font-bold text-white mt-6 mb-6 text-center drop-shadow">
        Guest Service Requests
      </h2>

      <div className="overflow-x-auto p-2 rounded-xl font-semibold ">
        <table className="min-w-full text-sm text-white/90 backdrop-blur">
          <thead className="bg-blue-900 text-white text-base">
            <tr>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Request</th>
              <th className="px-4 py-3 text-left">Timestamp</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-base">
            {data?.map((req, index) => (
              <tr
                key={req.id}
                className={`border-b ${
                  index % 2 === 0 ? "bg-black/30" : "bg-black/20"
                } hover:bg-blue-900/30 transition`}
              >
                <td className="px-4 py-3">{req.guest_phone}</td>
                <td className="px-4 py-3">{req.guest_name}</td>
                <td className="px-4 py-3">{req.request_text}</td>
                <td className="px-4 py-3">
                  {new Date(req.timestamp).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      req.status === "pending"
                        ? "bg-yellow-400 text-yellow-900"
                        : "bg-green-500 text-green-900"
                    }`}
                  >
                    {req.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <select
                    value={req.status}
                    onChange={(e) =>
                      mutation.mutate({ id: req.id, status: e.target.value })
                    }
                    className="border border-white bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm"
                  >
                    <option value="pending">Pending</option>
                    <option value="done">Done</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
