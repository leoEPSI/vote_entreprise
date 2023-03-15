export interface addVoteArgs {
  valeurVote: boolean;
  date: Date;
}

export interface addVoteOutput {
  idVote: string;
}

export interface addProjetArgs {
  nomProjet: string;
  description: string;
}

export interface addProjetOutput {
  idProjet: string;
}

export interface addUtilisateurArgs {
  nomUtilisateur: string;
}

export interface addUtilisateurOutput {
  idUtilisateur: string;
}
