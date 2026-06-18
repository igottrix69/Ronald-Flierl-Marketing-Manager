export type Project = {
  title: string;
  client: string;
  clientHref: string;
  role: string;
  cover: string;
  width: number;
  height: number;
  tags: string[];
  blurb: string;
};

export const projects: Project[] = [
  {
    title: "Mahindra Scorpio Landing Page",
    client: "Boroko Motors",
    clientHref: "https://borokomotors.com/",
    role: "Strategy · Copy · Paid Acquisition",
    cover: "/work/boroko-motors-landing.png",
    width: 864,
    height: 1821,
    tags: ["Landing Page", "CRO", "Paid Acquisition"],
    blurb:
      "A lead-gen automotive funnel for a high-ticket SUV launch — built to turn cold paid traffic into booked test drives and quote requests.",
  },
  {
    title: "Home Loans Landing Page",
    client: "Kina Bank",
    clientHref: "https://www.kinabank.com.pg/",
    role: "Strategy · Copy · Lead Generation",
    cover: "/work/kina-bank-landing.png",
    width: 864,
    height: 1821,
    tags: ["Landing Page", "CRO", "Lead Generation"],
    blurb:
      "A high-ticket finance lead-gen page with an embedded repayment calculator and eligibility flow, engineered to capture qualified home-loan applicants.",
  },
];
