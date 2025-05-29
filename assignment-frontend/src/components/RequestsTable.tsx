"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPendingRequests } from "@/lib/api";
import { updateRequestStatus } from "@/lib/api";

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
      <div className="flex justify-center items-center min-h-64 text-gray-500">
        Loading guest requests...
      </div>
    );

  if (error)
    return (
      <div className="text-red-500 text-center font-medium mt-4">
        Failed to load guest requests.
      </div>
    );

  return (
    <div className="overflow-x-auto">
      <div className="max-w-7xl mx-auto mt-6 p-4 sm:p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-luxuryBlue mb-4">
          Guest Service Requests
        </h2>

        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-blue-700 text-xl text-white sticky top-0">
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
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition`}
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
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
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
                    className="border px-2 py-1 rounded text-sm"
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
