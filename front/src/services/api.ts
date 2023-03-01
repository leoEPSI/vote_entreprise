import { addVoteArgs } from "../types";

const API_URL = "http://localhost:8080";

export async function addVote(args: addVoteArgs) {
  const response = await fetch(`${API_URL}/vote`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  return response.json();
}

export async function getVote(): Promise<string> {
  const response = await fetch(`${API_URL}/vote`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
