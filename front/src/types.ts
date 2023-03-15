export interface getListVoteArgs {
  id: number;
}

export interface getListVoteOutput {
  idVote: string;
  valeurPour: number;
  valeurContre: number;
}

export interface addVoteArgs {
  valeurVote: number;
  date: Date;
  idUtilisateurVote: number;
  idProjetVote: number;
}

export interface addVoteOutput {
  idVote: string;
}

export interface getVoteArgs {
  idVote: string;
}

export interface addProjetArgs {
  nomProjet: string;
  description: string;
}

export interface addProjetOutput {
  idProjet: string;
}

export interface getProjetArgs {
  idProjet: string;
}

export interface getListProjetOutput {
  idProjet: string;
  nomProjet: string;
  description: string;
}

export interface addUtilisateurArgs {
  nomUtilisateur: string;
}

export interface addUtilisateurOutput {
  idUtilisateur: string;
}
