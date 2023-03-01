import { VoteArgs } from "../types";

const API_URL = "http://localhost:8080";

export async function vote(args: VoteArgs) {
  const response = await fetch(`${API_URL}/vote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  return response.json();
}
