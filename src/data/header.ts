export interface Header {
  name: string;
  email: `${string}@${string}.${string}`;
  webpage: {
    url: `https://${string}`;
    label: string;
  };
  linkedin: {
    url: `https://linkedin.com/in/${string}`;
    label: string;
  };
  github: {
    url: `https://github.com/${string}`;
    label: string;
  };
}

export const HEADER: Header = {
  name: "Federico Melo Barrero",
  email: "f.melo@uniandes.edu.co",
  webpage: {
    url: "https://fedemelo.github.io/",
    label: "fedemelo.github.io"
  },
  linkedin: {
    url: "https://linkedin.com/in/federico-melo",
    label: "federico-melo"
  },
  github: {
    url: "https://github.com/fedemelo",
    label: "fedemelo"
  }
}