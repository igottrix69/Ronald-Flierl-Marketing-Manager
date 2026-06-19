export const site = {
  name: "Ronald Flierl",
  role: "Marketing Manager",
  tagline: "Data-Driven Marketing Manager & AI Workflow Expert",
  location: "Port Moresby, Papua New Guinea",
  availability: "On-Site or Remote ready",
  url: "https://ronald-flierl-marketing.vercel.app",
  email: "ronflierl9@gmail.com",
  phones: ["+675 8304 9298", "+675 7835 4975"],
  linkedin: {
    label: "linkedin.com/in/ron-flierl-55932a266",
    href: "https://www.linkedin.com/in/ron-flierl-55932a266",
  },
} as const;

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Paid Ads", href: "/ads-management" },
  { label: "Real Estate", href: "/real-estate-media" },
  { label: "About", href: "/about" },
];
