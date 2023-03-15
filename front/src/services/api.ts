import {
  addProjetArgs,
  addProjetOutput,
  addVoteArgs,
  addVoteOutput,
  getListProjetOutput,
  getListVoteArgs,
  getListVoteOutput,
  getProjetArgs,
  getVoteArgs,
} from "../types";

const API_URL = "http://localhost:8080";

export async function getListVote(
  args: getListVoteArgs
): Promise<getListVoteOutput> {
  const response = await fetch(`${API_URL}/vote/${args.id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function getVote(args: getVoteArgs): Promise<string> {
  const response = await fetch(`${API_URL}/vote/${args.idVote}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function addVote(args: addVoteArgs): Promise<addVoteOutput> {
  const response = await fetch(
    `${API_URL}/vote?valeurVote=${args.valeurVote}&date=${args.date}&idUtilisateurVote=${args.idUtilisateurVote}&idProjetVote=${args.idProjetVote}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(args),
    }
  );
  return response.json();
}

export async function deleteVote(args: getVoteArgs): Promise<string> {
  const response = await fetch(`${API_URL}/vote/${args.idVote}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function getListProjet(): Promise<getListProjetOutput[]> {
  const response = await fetch(`${API_URL}/projet`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function getProjet(args: getProjetArgs): Promise<string> {
  const response = await fetch(`${API_URL}/projet/${args.idProjet}`, {
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

export async function deleteProjet(args: getProjetArgs): Promise<string> {
  const response = await fetch(`${API_URL}/projet/${args.idProjet}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}
