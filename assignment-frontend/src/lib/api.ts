import axios from "axios";
import { GuestRequest } from "@/types";

export const getPendingRequests = async (): Promise<GuestRequest[]> => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/requests`
  );
  return res.data;
};
const BACKEND_URL = "http://localhost:3001";
export async function updateRequestStatus({
  id,
  status,
}: {
  id: number;
  status: string;
}) {
  const res = await fetch(`${BACKEND_URL}/api/requests/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) throw new Error("Failed to update status");
  return res.json();
}

