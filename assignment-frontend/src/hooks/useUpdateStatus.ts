import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, status }: { id: number; status: string }) => {
      const res = await fetch(
        `https://travel-studio-intern-assignment-1-qjim.onrender.com/api/requests/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );

    const data = await res.json();
    console.log("PATCH response", data); // Add this for debugging

    if (!res.ok) {
      throw new Error("Failed to update status");
    }

    return data;
    },
    onSuccess: () => {
      
      queryClient.invalidateQueries({ queryKey: ["pendingRequests"] });
    },
  });
};
