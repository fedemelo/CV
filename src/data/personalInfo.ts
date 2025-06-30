export interface PersonalInfo {
  name: string;
  email: `${string}@${string}.${string}`;
  webpage: string;
  linkedIn: string;
  github: string;
}

export const PERSONAL_INFO: PersonalInfo = {
  name: "Federico Melo Barrero",
  email: "f.melo@uniandes.edu.co",
  webpage: "fedemelo.github.io",
  linkedIn: "federico-melo",
  github: "fedemelo",
}