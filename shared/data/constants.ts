export const UNIANDES = {
  organization: "Universidad de los Andes",  // Ensure consistency
  city: "Bogotá",
  country: "Colombia",
};

export const PORTFOLIO_URLS = {
  CV: process.env.NEXT_PUBLIC_CV_URL || "https://cv.fedemelo.com",
  RESUME: process.env.NEXT_PUBLIC_RESUME_URL || "https://resume.fedemelo.com", 
  API: process.env.NEXT_PUBLIC_API_URL || "https://api.fedemelo.com",
  WEBPAGE: process.env.NEXT_PUBLIC_WEBPAGE_URL || "https://fedemelo.com",
} as const;