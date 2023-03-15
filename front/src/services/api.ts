import {
  addProjetArgs,
  addProjetOutput,
  addVoteArgs,
  addVoteOutput,
} from "../types";

const API_URL = "http://localhost:8080";

export async function addVote(args: addVoteArgs): Promise<addVoteOutput> {
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

export async function addProjet(args: addProjetArgs): Promise<addProjetOutput> {
  const response = await fetch(`${API_URL}/projet`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  return response.json();
}

export async function getProjet(): Promise<string> {
  const response = await fetch(`${API_URL}/projet`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
