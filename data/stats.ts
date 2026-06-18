export type Stat = {
  /** numeric value the counter animates to */
  value: number;
  prefix?: string;
  suffix?: string;
  /** override the displayed value entirely (for ranges like "12–15%") */
  display?: string;
  label: string;
  sublabel?: string;
};

export const stats: Stat[] = [
  { value: 4, suffix: "+", label: "Years experience", sublabel: "Full-funnel digital strategy" },
  {
    value: 100,
    suffix: "K+",
    label: "Monthly active users reached",
    sublabel: "B2C platform scale",
  },
  {
    value: 48,
    suffix: "K",
    label: "Email subscribers",
    sublabel: "Scaled from 12,000",
  },
  {
    value: 500,
    suffix: "+",
    label: "Qualified leads",
    sublabel: "Per client, per campaign cycle",
  },
  { value: 35, suffix: "%", label: "Platform growth in Q1", sublabel: "321Lotto launch" },
  {
    value: 0,
    display: "12–15%",
    label: "Email click-through rate",
    sublabel: "Above industry average",
  },
  {
    value: 40,
    suffix: "%+",
    label: "Manual overhead reduced",
    sublabel: "Via bespoke AI workflows",
  },
  {
    value: 85,
    suffix: "K",
    label: "Monthly site visitors driven",
    sublabel: "Sustained 50K–85K range",
  },
];
